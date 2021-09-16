const fs = require("fs");
const problem1 = require("../problem1");

const cb = () => {
    let noOfFiles;
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
};

problem1(cb);
