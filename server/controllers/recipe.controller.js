var path = require('path');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.sendFile(path.join(__dirname + '../../../client/index.html'));
};