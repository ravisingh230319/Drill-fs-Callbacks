/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/

const fs = require("fs").promises;

const problem1 = () => {
    fs.mkdir("../JSON", { recursive: true })
        .then((data) => {
            for (let i = 0; i < 8; i++) {
                const path ="../JSON/" +Math.random().toString(36).substr(2, 5) +".json";
                //Creating random files
                fs.writeFile(path, "Content").then((data) => {
                    console.log("File created:  " + path);
                    deleteFiles(path);
                });
            }
        })
        .catch((error) => console.log(error));
};

const deleteFiles = (filePath) => {
    fs.unlink(filePath)
    .then((data)=>console.log("File deleted:  "+filePath))
};

module.exports = problem1;
