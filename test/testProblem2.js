const fs = require("fs");
const problem2 = require("../problem2.js");

const cb = (error, data) => {
    let path = "../output/UpperCase.txt";
    fs.writeFile(path, data.toUpperCase(), (err) => {
        if (err) throw err;
    });
    fs.writeFile("../output/filenames.txt", path.substring(path.indexOf("U"), path.length), (err) => {
            if (err) {
                throw err;
            } else {
                deleteFiles("../output/UpperCase.txt");
            }
        }
    );

    path = "../output/LowerCase.txt";

    fs.writeFile(path, data.toLowerCase(), (err) => {
        if (err) throw err;
    });
    fs.appendFile("../output/filenames.txt", "\n" + path.substring(path.indexOf("L"), path.length), (err) => {
            if (err) {
                throw err;
            } else {
                deleteFiles("../output/LowerCase.txt");
            }

            fs.readFile("../output/filenames.txt", "utf-8", (err, data) => {
                console.log(data);
            });
        }
    );
};

const deleteFiles = (filepath) => {
    fs.unlink(filepath, (error) => {
        if (error) throw error;
    });
};
problem2(cb);
