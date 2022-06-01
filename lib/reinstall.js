const runCommand = require('./runCommand')
/**
 * Reinstalls an npm dep of devDep
 * @param {string} packageName The package name in the package.json to uninstall then reinstall
 * @param {string} url The url of the package
 * @param {boolean} dev If true installs to dev dependency else dependency
 * @param {function} reinstallCb Callback function run after installed
 */
module.exports = (packageName, url, dev, reinstallCb) => {
  const installType = (dev) ? '--save-dev' : '--save'
  runCommand('npm', ['uninstall', packageName, '--force'], () => {
    runCommand('npm', ['install', installType, url, '--force'], reinstallCb)
  })
}
