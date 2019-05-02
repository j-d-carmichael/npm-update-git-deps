const isGit = require('../lib/isGit.js')

it('should return true for git https', () => {
  expect(isGit('git+https://git@github.com/johndcarmichael/swagger-nodegen-cli.git')).toBe(true)
})

it('should return true for git ssh', () => {
  expect(isGit('git+ssh://git@github.com/johndcarmichael/swagger-nodegen-cli.git')).toBe(true)
})

it('should return false for semver', () => {
  expect(isGit('^1.0.2')).toBe(false)
})

it('should return false for a normal url', () => {
  expect(isGit('https://github.com/johndcarmichael/boats')).toBe(false)
})
