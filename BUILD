load("//:es_metadata.bzl", "es_projects")
load("//:es_legacy_metadata.bzl", "es_legacy_projects")

load("//scripts:prepare.bzl", "project_name")

exports_files(["tsconfig.json", "package.json"])

all_projects = es_projects + [ "//src/salto/auth" ]
all_legacy_projects = es_legacy_projects + [ "//src/salto/auth" ]

genrule(
    name = 'build_all',
    srcs = [":build_all_projects", ":build_all_legacy"],
    outs = ['build_all.sh'],
    cmd = '''echo "set -e" >> $@
        echo " $(SRCS)" | sed -e "s/ /\\n/g" | grep -E "*" >> $@
        ''',
    executable = True
)


genrule(
    name = 'build_all_projects',
    srcs = ["{}:build".format(project) for project in es_projects],
    outs = ['build_all_projects.sh'],
    cmd = '''echo "set -e" >> $@
        echo "npm ci" >> $@
        echo " $(SRCS)" | sed -e "s/ /\\n/g" | grep -E "*" >> $@
        ''',
    executable = True
)

genrule(
    name = 'build_all_legacy',
    srcs = ["{}:build_legacy".format(project) for project in es_legacy_projects],
    outs = ['build_all_legacy.sh'],
    cmd = '''echo "set -e" >> $@
        echo "npm ci && cp -r legacy/node_modules/* node_modules/" >> $@
        echo " $(SRCS)" | sed -e "s/ /\\n/g" | grep -E "*" >> $@
        ''',
    executable = True
)
