#!/usr/bin/env bash

get_hasura() {
  curl -L https://github.com/hasura/graphql-engine/raw/master/cli/get.sh | bash
  hasura migrate apply
}