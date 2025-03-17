SHELL = /bin/bash

# Overridable by CI

COMMIT_SHORT     ?= $(shell git rev-parse --verify --short HEAD)
VERSION          ?= v0.0.0-sha.$(COMMIT_SHORT)
VERSION_NOPREFIX ?= $(shell echo $(VERSION) | sed -e 's/^[[v]]*//')

#
# Common methodology based targets
#

.PHONY: prepare
prepare:
	npm ci

.PHONY: sanity-check
sanity-check:

.PHONY: build
build:
	bazel run //:build_all --define version=$(VERSION_NOPREFIX) --verbose_failures

.PHONY: test
test:

.PHONY: release
release:
	./scripts/release.sh

.PHONY: clean
clean:
	bazel clean
	rm -rf node_modules dist experimental/node_modules
