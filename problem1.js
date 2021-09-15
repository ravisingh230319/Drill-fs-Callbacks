const fs = require("fs");

const problem1 = (cb) => {
    fs.mkdir("../JSON", cb);
};

module.exports = problem1;
