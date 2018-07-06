const loaderUtils = require('loader-utils')
const Px2scalability = require('px2scalability')

module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  const px2scalability = new Px2scalability(options)
  return px2scalability.init(source)
}