const path = require('path');
const packageJson = require(path.join(process.cwd(), 'package.json'));
const program = require('./commander')();
const canReinstall = require('./lib/canReinstall.js');
const removePackage = require('./lib/removePackage');

const onlyThisOne = program.dependency || false;
const updated = {
  dependencies: [],
  devDependencies: []
};

const iterator = (items, dev, iteratorCb) => {
  dev = dev || false;
  if (items.length === 0) {
    iteratorCb();
  } else {
    const item = items.pop();
    if (canReinstall(onlyThisOne, item)) {
      removePackage(item[0]);
      if (dev) {
        updated.devDependencies.push(item[0] + ': ' + item[1]);
      } else {
        updated.dependencies.push(item[0] + ': ' + item[1]);
      }
    }
    iterator(items, dev, iteratorCb);
  }
};

iterator(Object.entries(packageJson.dependencies || {}), false, () => {
  iterator(Object.entries(packageJson.devDependencies || {}), true, () => {
    console.log('Cleaned the following git based repos:');
    console.log(updated);

    console.log('');

    console.log('To quickly install them all again run this command:');
    console.log('npm i --no-audit');
  });
});
