const path = require('path')
const packageJson = require(path.join(process.cwd(), 'package.json'))
const program = require('./commander')()
const canReinstall = require('./lib/canReinstall.js')
const reinstall = require('./lib/reinstall')

const onlyThisOne = program.dependency || false
let updated = {
  'dependencies': [],
  'devDependencies': []
}

const iterator = (items, dev, iteratorCb) => {
  dev = dev || false
  if (items.length === 0) {
    iteratorCb()
  } else {
    let item = items.pop()
    if (canReinstall(onlyThisOne, item)) {
      reinstall(item[0], item[1], dev, () => {
        if (dev) {
          updated.devDependencies.push(item[0] + ': ' + item[1])
        } else {
          updated.dependencies.push(item[0] + ': ' + item[1])
        }
        iterator(items, dev, iteratorCb)
      })
    } else {
      iterator(items, dev, iteratorCb)
    }
  }
}

iterator(Object.entries(packageJson.dependencies || {}), false, () => {
  iterator(Object.entries(packageJson.devDependencies || {}), true, () => {
    console.log('Updated npm packages from git repos:')
    console.log(updated)
  })
})
