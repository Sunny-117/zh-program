var loaderUtils = require("loader-utils")

module.exports = function (sourceCode) {
    console.log(sourceCode)
    var options = loaderUtils.getOptions(this)
    var changeVarReg = new RegExp(options.changeVar, "g");
    var changeLogReg = new RegExp(options.changeLog, "g");

    const changeVarReged = sourceCode.replace(changeVarReg, "var");

    return changeVarReged.replace(changeLogReg, (a, v, c) => {
        console.log('a', a)
        console.log('v', v)
        return ''
    });
}