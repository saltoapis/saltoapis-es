load("//:es_metadata.bzl", "PROTOC_ES_VERSION")
load("//:es_legacy_metadata.bzl", "PROTOC_ES_LEGACY_VERSION")

load("@bazel_skylib//rules:write_file.bzl", "write_file")
load("@bazel_skylib//rules:copy_file.bzl", "copy_file")

# Generates all files required to build a project with ng-builder
def generate_project_files(lib_name, internal_dependencies, extra_info, package_json):
    generated_files = []
    generated_files += _copy_sources_to_src()
    generated_files += _create_index_ts()
    generated_files += _create_public_api_ts()
    generated_files += _create_package_json(lib_name, internal_dependencies, package_json, False)
    
    return generated_files

# Generates all files required to build a project with ng-builder
def generate_project_files_legacy(lib_name, internal_dependencies, extra_info, package_json):
    generated_files = []
    generated_files += _copy_sources_to_src()
    generated_files += _create_index_ts()
    generated_files += _create_public_api_ts()
    generated_files += _create_package_json(lib_name+"-legacy", internal_dependencies, package_json, True)

    return generated_files

def _copy_sources_to_src():
    files = []
    for f in native.glob(['**/*.ts']):
        copy_file(
            name = "copy_%s" % f,
            src = f,
            out = "src/%s" % f,
        )
        files.append(":copy_%s" % f)
    return files

def _create_index_ts():
    # Create index.ts
    native.genrule(
        name = "generated_index_ts_file",
        outs = ["index.ts"],
        cmd = 'echo "%s" > "$@"' % "export * from './src/public_api'",
    )
    return [":generated_index_ts_file"]

def _create_public_api_ts():
    # Create public_api.ts
    native.genrule(
        name = "generated_public_api_file",
        srcs = native.glob(["**/*.ts"]),
        outs = ["src/public_api.ts"],
        cmd = '''
        for src in $(SRCS); do
            echo "export * from './$$(basename $${src%%.*})';" >> "$(OUTS)"
        done
        '''
    )
    return [":generated_public_api_file"]

def _create_package_json(lib_name, internal_dependencies, package_json_file, is_legacy):
    packagedeps = ""
    for i, dep in enumerate(internal_dependencies):
        name = "@saltoapis/%s" % project_name(dep, is_legacy)
        packagedeps += ',\n    '

        if is_legacy:
            # @saltoapis/user-v1 for the @saltoapis/user-v1-legacy package
            packagedeps += '"{name}": "npm:{name}-legacy@$(version)"'.format(name = name)
        else:
            packagedeps += '"%s": "$(version)"' % name

    protoc_es_version = PROTOC_ES_VERSION
    if is_legacy:
        protoc_es_version = PROTOC_ES_LEGACY_VERSION
    
    # extract values from package json
    native.genrule(
        name = "generated_package_json",
        srcs = ["//scripts:package.json.tpl", package_json_file],
        outs = ["package.json"],
        cmd = '''
            pkg="$$(cat $(location {package_json_file}))"
            connect_version=$$(echo "$$pkg" | jq -r '.devDependencies["@connectrpc/connect"]')
            
            export PACKAGE_NAME='{package_name}'
            export PACKAGE_VERSION='$(version)'
            export BUFBUILD_PROTOBUF_VERSION='{bufbuild_protobuf_version}'
            export CONNECTRPC_CONNECT_VERSION="$$connect_version"
            export PACKAGE_DEPS='{package_deps}'
            envsubst '$$PACKAGE_NAME,$$PACKAGE_VERSION,$$BUFBUILD_PROTOBUF_VERSION,$$CONNECTRPC_CONNECT_VERSION,$$PACKAGE_DEPS' < "$(location //scripts:package.json.tpl)" > "$(OUTS)";
        '''.format(
            package_json_file = package_json_file,
            package_name = lib_name,
            bufbuild_protobuf_version = protoc_es_version,
            package_deps = packagedeps,
        ),
    )
    
    return [":generated_package_json"]


def project_name(p, is_legacy):
    if is_legacy:
        p = p.replace("//legacy/", "//")

    p = p.replace("//src/salto/", "")
    p = p.replace("//src/", "")
    p = p.replace("/", "-")
    return p
