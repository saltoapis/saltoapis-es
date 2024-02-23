load("//:es_metadata.bzl", "es_projects")
load("//scripts:prepare.bzl", "project_name")

exports_files(["tsconfig.json"])

all_projects = es_projects + [ "//src/salto/auth" ]

genrule(
    name = 'build_all',
    srcs = ["{}:build".format(project) for project in all_projects],
    outs = ['build_all.sh'],
    cmd = '''echo "set -e" >> $@
        echo " $(SRCS)" | sed -e "s/ /\\n/g" | grep -E "*" >> $@
        ''',
    executable = True
)
