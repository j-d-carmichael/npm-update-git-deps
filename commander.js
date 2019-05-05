const program = require('commander')
module.exports = () => {
  program
    .option('-d, --dependency [string]', 'The single dependency to target from either the dev or non-dev list (not required to be from git)')
    .parse(process.argv)

  return program
}
