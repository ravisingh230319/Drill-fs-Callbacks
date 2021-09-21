/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

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
