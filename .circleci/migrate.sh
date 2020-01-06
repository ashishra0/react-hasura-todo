#!/usr/bin/env bash

get_hasura() {
  curl -L https://github.com/hasura/graphql-engine/raw/master/cli/get.sh | bash
  cd ./hasura
  hasura migrate apply --admin-secret valleyforge
}