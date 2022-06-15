const fs = require('fs-extra');
const path = require('path');

/**
 * Reinstalls an npm dep of devDep
 * @param {string} packageName The package name in the package.json to uninstall then reinstall
 */
module.exports = (packageName) => {
  const base = process.cwd();

  const nodeMod = path.join(base, 'node_modules');
  const packageLock = path.join(base, 'package-lock.json');

  // remove the node mods and lock file, then just run npm i again
  console.log('Uninstalling: ' + packageName);
  console.log('Removing: ' + path.join(nodeMod, packageName));
  console.log('Removing: ' + packageLock);
  // fs.removeSync(path.join(nodeMod, packageName));
  // fs.removeSync(packageLock);
};
