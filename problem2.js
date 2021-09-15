const fs = require("fs");

const problem2 = (cb) => {
    fs.readFile("../input/lipsum.txt", "utf-8", (err, data) =>{
        
        let filename="UpperCase.txt";
        let filepath="../output/"+filename;
        fs.writeFile(filepath, data.toUpperCase(), cb)
        fs.writeFile('../output/filenames.txt',filename,cb)
        filename="LowerCase.txt"
        filepath="../output/"+filename;
        fs.writeFile(filepath,data.toLowerCase(),cb)
        fs.appendFile('../output/filenames.txt','\n'+filename,cb)

        fs.readFile("../output/filenames.txt", "utf-8", (err, data) =>{
            console.log(data);
            setTimeout(()=>{
            fs.unlink("../output/UpperCase.txt", (error) => {
                if (error) throw error;
            });
            fs.unlink("../output/LowerCase.txt", (error) => {
                if (error) throw error;
            });
            },15*1000);
        });

    }
        
    ); 
}

module.exports=problem2;