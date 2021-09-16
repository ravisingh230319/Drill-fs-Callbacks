const fs = require("fs");

const problem2 = (cb) => {
    fs.readFile("../input/lipsum.txt", "utf-8", cb);
}

module.exports=problem2;