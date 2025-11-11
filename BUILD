load("//:es_metadata.bzl", "es_projects")
load("//:es_experimental_metadata.bzl", "es_experimental_projects")
load("//scripts:prepare.bzl", "project_name")

exports_files(["tsconfig.json", "tsconfig-experimental.json"])

all_projects = es_projects + [ "//src/salto/auth" ]
all_experimental_projects = es_experimental_projects + [ "//src/salto/auth" ]

genrule(
    name = 'build_all',
    srcs = [":build_all_experimental", ":build_all_legacy"],
    outs = ['build_all.sh'],
    cmd = '''echo "set -e" >> $@
        echo " $(SRCS)" | sed -e "s/ /\\n/g" | grep -E "*" >> $@
        ''',
    executable = True
)

genrule(
    name = 'build_all_legacy',
    srcs = ["{}:build".format(project) for project in es_projects],
    outs = ['build_all_legacy.sh'],
    cmd = '''echo "set -e" >> $@
        echo "npm ci" >> $@
        echo " $(SRCS)" | sed -e "s/ /\\n/g" | grep -E "*" >> $@
        ''',
    executable = True
)

genrule(
    name = 'build_all_experimental',
    srcs = ["{}:build_experimental".format(project) for project in es_experimental_projects],
    outs = ['build_all_experimental.sh'],
    cmd = '''echo "set -e" >> $@
        echo "npm ci && cp -r experimental/node_modules/* node_modules/" >> $@
        echo " $(SRCS)" | sed -e "s/ /\\n/g" | grep -E "*" >> $@
        ''',
    executable = True
)
