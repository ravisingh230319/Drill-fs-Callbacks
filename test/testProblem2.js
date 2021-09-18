const fs = require("fs");
const problem2 = require("../problem2.js");



const deleteFiles = (filePath) => {
    fs.unlink(filePath, (error) => {
        if (error) throw error;
    });
};
problem2();
