const fs = require("fs").promises;

function problem2() {
    let path = "../output/UpperCase.txt";

    fs.readFile("../input/lipsum.txt", "utf-8")
        .then((data) => {
            let upperCaseData = data.toUpperCase();
            return fs.writeFile(path, upperCaseData);
        })
        .then((data) => {
            return fs.writeFile("../output/filenames.txt", "UpperCase.txt"+"\n");
        })
        .then((data) => {
            return fs.readFile("../output/UpperCase.txt", "utf-8");
        })
        .then((data) => {
            let lowerCaseSentence = data.toLowerCase().replace(/[\r\n]+/gm, " ").split(".").join("\n");
            return fs.writeFile("../output/LowerCase.txt", lowerCaseSentence);
        })
        .then((data) => {
            return fs.appendFile("../output/filenames.txt", "LowerCase.txt"+"\n");
        })
        .then((data) => {
            return fs.readFile("../output/LowerCase.txt", "utf-8");
        })
        .then((data) => {
            let sortedSentences = data.split("\n").sort().join("\n");
            return fs.writeFile("../output/Sorted.txt", sortedSentences);
        })
        .then((data) => {
            return fs.appendFile("../output/filenames.txt", "Sorted.txt");
        })
        .then((data) => {
            fs.readFile("../output/filenames.txt", "utf-8").then((data) => {
                let fileName = data.split("\n");
                fileName.forEach((element) => {
                    deleteFiles("../output/" + element);
                });
            });
        })
        .catch((error) => console.log(error));
}

const deleteFiles = (filePath) => {
    fs.unlink(filePath)
    .then((data)=>console.log("File deleted:  "+filePath))
};

module.exports = problem2;
