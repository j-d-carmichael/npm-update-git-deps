const spawn = require('child_process').spawn
/**
 * Spawns and runs provided cli prog
 * @param program
 * @param args
 * @param next
 */
module.exports = (program, args, next) => {
  console.log('Running ' + program, args)
  const command = spawn(program, args)
  command.stdout.on('data', (data) => {
    console.log(String(data))
  })
  command.stderr.on('data', (data) => {
    console.log(String(data))
  })
  command.on('close', () => {
    next()
  })
}
