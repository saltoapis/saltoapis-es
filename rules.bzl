load("//scripts:prepare.bzl", "generate_project_files")
load("//scripts:prepare_experimental.bzl", "generate_project_files_experimental")

def load_rules(lib_name, internal_dependencies, extra_info):
    """A macro that loads common rules for all the packages

    Args:
        lib_name: the name of the package
        internal_dependencies: the internal dependencies of the package
        extra_info: additional information required by the following rules (Service(s) name(s))
    """

    if extra_info['generator'] == 'es':
        project_files = generate_project_files(lib_name, internal_dependencies, extra_info)

        native.genrule(
            name = "build",
            srcs = project_files + ["//:tsconfig.json"],
            outs = ["build.sh"],
            cmd = '''
                echo "set -e" >> $(OUTS)
                echo "mkdir -p dist/{lib_name}" >> $(OUTS)
                echo "(cd \"$$(dirname $(OUTS))\" && npx tsup index.ts --clean --format esm,cjs --dts --tsconfig $(execpath //:tsconfig.json))" >> $(OUTS)
                echo "cp -R $$(dirname $(OUTS))/dist/* dist/{lib_name}" >> $(OUTS)
                echo "cp -R $$(dirname $(OUTS))/package.json dist/{lib_name}" >> $(OUTS)
            '''.format(lib_name = lib_name),
            executable = True
        )
    elif extra_info['generator'] == 'es-experimental':
        connect_version = "2.0.2" # must match the package.json
        project_files = generate_project_files_experimental(connect_version, lib_name, internal_dependencies, extra_info)

        native.genrule(
            name = "build_experimental",
            srcs = project_files + ["//:tsconfig-experimental.json"],
            outs = ["build.sh"],
            cmd = '''
                echo "set -e" >> $(OUTS)
                echo "mkdir -p dist/{lib_name}" >> $(OUTS)
                echo "(cd \"$$(dirname $(OUTS))\" && npx tsup index.ts --clean --format esm,cjs --dts --tsconfig $(execpath //:tsconfig-experimental.json))" >> $(OUTS)
                echo "cp -R $$(dirname $(OUTS))/dist/* dist/{lib_name}" >> $(OUTS)
                echo "cp -R $$(dirname $(OUTS))/package.json dist/{lib_name}" >> $(OUTS)
            '''.format(lib_name = lib_name+"-experimental"),
            executable = True
        )
