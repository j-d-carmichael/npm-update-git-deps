const isGit = require('./isGit')
/**
 * Returns true if should be reinstalled
 * @param onlyThisOne
 * @param item
 * @return {boolean}
 */
module.exports = (onlyThisOne, item) => {
  return ((!onlyThisOne && isGit(item[1])) || onlyThisOne === item[0])
}
