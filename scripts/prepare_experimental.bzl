load("//:es_experimental_metadata.bzl", "PROTOC_ES_EXPERIMENTAL_VERSION")
load("@bazel_skylib//rules:write_file.bzl", "write_file")
load("@bazel_skylib//rules:copy_file.bzl", "copy_file")

# Generates all files required to build a project with ng-builder
def generate_project_files_experimental(connect_version, lib_name, internal_dependencies, extra_info):
    generated_files = []
    generated_files += _copy_sources_to_src()
    generated_files += _create_index_ts()
    generated_files += _create_public_api_ts(lib_name)
    generated_files += _create_package_json(connect_version, lib_name+"-experimental", internal_dependencies)

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

def _create_public_api_ts(lib_name):
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

def _create_package_json(connect_version, lib_name, internal_dependencies):
    packagedeps = ""
    for i, dep in enumerate(internal_dependencies):
        name = "@saltoapis/%s" % project_name(dep)
        packagedeps += ',\n    '
        # import the package with an alias, that way the code can use
        # @saltoapis/user-v1 for the @saltoapis/user-v1-experimental package
        packagedeps += '"{name}": "npm:{name}-experimental@$(version)"'.format(name = name)
    
    native.genrule(
        name = "generated_package_json",
        srcs = ["//scripts:package.json.tpl"],
        outs = ["package.json"],
        cmd = '''
            export PACKAGE_NAME='{package_name}'
            export PACKAGE_VERSION='$(version)'
            export BUFBUILD_PROTOBUF_VERSION='{bufbuild_protobuf_version}'
            export CONNECTRPC_CONNECT_VERSION='{connect_version}'
            export PACKAGE_DEPS='{package_deps}'
            export PROTOBUF_VERSION='{protobuf_version}'
            envsubst '$$PACKAGE_NAME,$$PACKAGE_VERSION,$$BUFBUILD_PROTOBUF_VERSION,$$CONNECTRPC_CONNECT_VERSION,$$PROTOBUF_VERSION,$$PACKAGE_DEPS' < "$(SRCS)" > "$(OUTS)";
        '''.format(
            package_name = lib_name,
            bufbuild_protobuf_version = PROTOC_ES_EXPERIMENTAL_VERSION,
            connect_version = connect_version,
            package_deps = packagedeps,
            protobuf_version = "3.21.2",
        ),
    )
    
    return [":generated_package_json"]


def project_name(p):
    p = p.replace("//experimental/", "//")
    p = p.replace("//src/salto/", "")
    p = p.replace("//src/", "")
    p = p.replace("/", "-")
    return p
