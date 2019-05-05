const isGit = require('./isGit')
module.exports = (onlyThisOne, item) => {
  return ((!onlyThisOne && isGit(item[1])) || onlyThisOne === item[0])
}
