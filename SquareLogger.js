const fs = require("fs");
const stream = fs.createWriteStream("app.log")

module.exports.logInfo = function (infoMsg) {
    stream.write("[INFO]: " + infoMsg);
    stream.end();
}
module.exports.logWarn = function (warnMsg) {
    stream.write("[WARN]: " + warnMsg);
    stream.end();
}
module.exports.logError = function (errorMsg) {
    stream.write("[ERROR]: " + errorMsg);
    stream.end();
}
module.exports.logDebug = function (debugMsg) {
    stream.write("[DEBUG]: " + debugMsg);
    stream.end();
}