var loaderUtils = require("loader-utils")

module.exports = function (sourceCode) {
    var options = loaderUtils.getOptions(this)
    var reg = new RegExp(options.changeVar, "g");
    return sourceCode.replace(reg, "var");
}