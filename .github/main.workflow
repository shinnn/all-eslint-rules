workflow "Test" {
  on = "push"
  resolves = ["npm"]
}

action "npm" {
  uses = "docker://node:alpine"
  runs = "npm"
  args = "install-ci-test"
  secrets = ["CODECOV_TOKEN"]
}
