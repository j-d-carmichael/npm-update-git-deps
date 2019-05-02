/**
 * Expects the value of the package, eg 1.0.0 or some git path.
 * Returns true if git path
 * @param {string} packageVersionValue
 * @returns {boolean}
 */
module.exports = (packageVersionValue) => {
  return (packageVersionValue.indexOf('git+ssh') !== -1 || packageVersionValue.indexOf('git+https') !== -1)
}
