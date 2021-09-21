/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/
const fs = require("fs");

const problem1 = () => {
    fs.mkdir("../JSON", () => {
        for (let i = 0; i < 8; i++) {
            const path ="../JSON/" + Math.random().toString(36).substr(2, 5) + ".json";
    
            //Creating random files
            fs.writeFile(path, "Content", (error) => {
                if (error) {
                    throw error;
                } else {
                    console.log("File created  " + path);
                }
    
                //Deleting files inside the callback function of writeFile
                fs.unlink(path, (error) => {
                    if (error) {
                        throw error;
                    } else {
                        console.log("File deleted  " + path);
                    }
                });
            });
        }
    });
};

module.exports = problem1;
