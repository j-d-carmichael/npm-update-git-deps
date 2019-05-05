const canReinstall = require('../lib/canReinstall.js')

it('should return true for git https and onlythisone false', () => {
  const item = ['name', 'git+https://git@github.com/johndcarmichael/swagger-nodegen-cli.git']
  expect(canReinstall(false, item)).toBe(true)
})

it('should return true for git https and onlythisone set to the same name as the package', () => {
  const item = ['name', 'git+https://git@github.com/johndcarmichael/swagger-nodegen-cli.git']
  expect(canReinstall('name', item)).toBe(true)
})

it('should return false for git https and onlythisone set to the different name as the package', () => {
  const item = ['name', 'git+https://git@github.com/johndcarmichael/swagger-nodegen-cli.git']
  expect(canReinstall('othername', item)).toBe(false)
})
