const path = require('path')
const packageJson = require(path.join(process.cwd(), 'package.json'))
const spawn = require('child_process').spawn
let updateCount = 0

const runCommand = (program, args, next) => {
  console.log(program, args)
  const command = spawn(program, args)
  command.stdout.on('data', (data) => {
    console.log(String(data))
  })
  command.stderr.on('data', (data) => {
    console.log(String(data))
  })
  command.on('close', () => {
    ++updateCount
    next()
  })
}

const reinstall = (programName, url, reinstallCb) => {
  runCommand('npm', ['uninstall', programName], () => {
    runCommand('npm', ['install', '--save', url], reinstallCb)
  })
}

const iterator = (items, iteratorCb) => {
  if (items.length === 0) {
    iteratorCb()
  } else {
    let item = items.pop()
    if (item[1].indexOf('git+ssh') !== -1) {
      reinstall(item[0], item[1], () => {
        iterator(items, iteratorCb)
      })
    } else {
      iterator(items, iteratorCb)
    }
  }
}
iterator(Object.entries(packageJson.dependencies || {}), () => {
  iterator(Object.entries(packageJson.devDependencies || {}), () => {
    console.log('Updated ' + updateCount + ' npm packages from git repos')
  })
})
