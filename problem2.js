const fs = require("fs");

const problem2 = () => {
    fs.readFile("../input/lipsum.txt", "utf-8",(error, data) => {
        let path = "../output/UpperCase.txt";
        let upperCaseData = data.toUpperCase();
    
        //Creating a new file UpperCase.txt
        fs.writeFile(path, upperCaseData, (err) => {
            if (err) {
                throw err;
            } else {
                let content=path.substring(path.indexOf("U"), path.length);
    
                //Writing name of uppercase file in filesname.txt
                fs.writeFile("../output/filenames.txt", content, (err) => {
                        if (err) throw err;
                    }
                );
    
                //Reading Uppercase.txt
                fs.readFile(path, "utf-8", (err, data) => {
                    let lowerCaseSentence = data.toLowerCase().replace(/[\r\n]+/gm, " ").split(".").join("\n");
                    path = "../output/LowerCase.txt";
    
                    //Creating a new file LowerCase.txt and writing separate sentences into the file
                    fs.writeFile(path, lowerCaseSentence, (err) => {
                        if (err) {
                            throw err;
                        } else {
                            content="\n" + path.substring(path.indexOf("L"), path.length);
    
                            //Appending the LowerCase.txt filename in filenames.txt
                            fs.appendFile("../output/filenames.txt", content,(err) => {
                                    if (err) throw err;
                                }
                            );
    
                            //Reading Lowercase.txt
                            fs.readFile(path, "utf-8", (err, data) => {
                                let sortedSentences = data.split("\n").sort().join("\n");
                                path = "../output/Sorted.txt";
                                
                                //Creating a new file Sorted.txt and writing sorted order of sentences
                                fs.writeFile(path, sortedSentences, (err) => {
                                    if (err) {
                                        throw err;
                                    } else {
                                        content="\n" +path.substring(path.indexOf("S"),path.length)
    
                                        //Appending the Sorted.txt filename in filenames.txt
                                        fs.appendFile("../output/filenames.txt",content,(err) => {
                                                if (err) {
                                                    throw err;
                                                } else {
                                                    //Reading filenames.txt and passing path with that filename
                                                    fs.readFile("../output/filenames.txt","utf-8",(err, data) => {
                                                            let fileName =data.split("\n");
    
                                                            fileName.forEach((element) => {
                                                                    deleteFiles("../output/" +element);
                                                                }
                                                            );
                                                        }
                                                    );
                                                }
                                            }
                                        );
                                    }
                                });
                            });
                        }
                    });
                });
            }
        });
    });
}

const deleteFiles = (filePath) => {
    fs.unlink(filePath, (error) => {
        if (error) throw error;
    });
};

module.exports=problem2;