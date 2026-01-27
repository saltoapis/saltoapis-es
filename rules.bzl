load("//scripts:prepare.bzl", "generate_project_files", "generate_project_files_legacy")

def load_rules(lib_name, internal_dependencies, extra_info):
    """A macro that loads common rules for all the packages

    Args:
        lib_name: the name of the package
        internal_dependencies: the internal dependencies of the package
        extra_info: additional information required by the following rules (Service(s) name(s))
    """

    if extra_info['generator'] == 'es':
        project_files = generate_project_files(lib_name, internal_dependencies, extra_info, "//:package.json")

        native.genrule(
            name = "build",
            srcs = project_files + ["//:tsconfig.json"],
            outs = ["build.sh"],
            cmd = '''
                echo "set -e" >> $(OUTS)
                echo "mkdir -p dist/{lib_name}" >> $(OUTS)
                echo "cp $(execpath //:tsconfig.json) \"$$(dirname $(OUTS))\"" >> $(OUTS)
                echo "(cd \"$$(dirname $(OUTS))\" && npx tsdown index.ts --clean --format esm,cjs --dts)" >> $(OUTS)
                echo "cp -R $$(dirname $(OUTS))/dist/* dist/{lib_name}" >> $(OUTS)
                echo "cp -R $$(dirname $(OUTS))/package.json dist/{lib_name}" >> $(OUTS)
            '''.format(lib_name = lib_name),
            executable = True
        )
    elif extra_info['generator'] == 'es-legacy':
        project_files = generate_project_files_legacy(lib_name, internal_dependencies, extra_info, "//legacy:package.json")

        native.genrule(
            name = "build_legacy",
            srcs = project_files + ["//legacy:tsconfig.json"],
            outs = ["build.sh"],
            cmd = '''
                echo "set -e" >> $(OUTS)
                echo "mkdir -p dist/{lib_name}" >> $(OUTS)
                echo "cp $(execpath //legacy:tsconfig.json) \"$$(dirname $(OUTS))/tsconfig.json\"" >> $(OUTS)
                echo "(cd \"$$(dirname $(OUTS))\" && npx tsdown index.ts --clean --format esm,cjs --dts)" >> $(OUTS)
                echo "cp -R $$(dirname $(OUTS))/dist/* dist/{lib_name}" >> $(OUTS)
                echo "cp -R $$(dirname $(OUTS))/package.json dist/{lib_name}" >> $(OUTS)
            '''.format(lib_name = lib_name+"-legacy"),
            executable = True
        )
