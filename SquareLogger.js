const fs = require("fs");
const stream = fs.createWriteStream("app.log")

module.exports.logInfo = function(infoMsg) {
    stream.write("[Info]: " + infoMsg);
    stream.end();
}
module.exports.logInfo = function(warnMsg) {
    stream.write("[Warn]: " + warnMsg);
    stream.end();
}
module.exports.logError = function(errorMsg) {
    stream.write("[Error]: " + errorMsg);
    stream.end();
}