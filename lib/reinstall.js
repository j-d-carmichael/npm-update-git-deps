const fs = require('fs-extra');
const path = require('path');
const runCommand = require('./runCommand');

/**
 * Reinstalls an npm dep of devDep
 * @param {string} packageName The package name in the package.json to uninstall then reinstall
 * @param {string} url The url of the package
 * @param {boolean} dev If true installs to dev dependency else dependency
 * @param {function} reinstallCb Callback function run after installed
 */
module.exports = (packageName, url, dev, reinstallCb) => {
  const base = process.cwd();

  const nodeMod = path.join(base, 'node_modules');
  const packageLock = path.join(base, 'package-lock.json');

  // remove the node mods and lock file, then just run npm i again
  fs.removeSync(path.join(nodeMod, packageName));

  fs.removeSync(packageLock);

  runCommand('npm', ['install', '--force'], reinstallCb);
};
