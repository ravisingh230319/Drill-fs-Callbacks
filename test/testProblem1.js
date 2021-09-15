const fs = require("fs");
const problem1 = require("../problem1");

const path = "../JSON/" + Math.random().toString(36).substr(2, 5) + ".json";

const cb = () => {
    setTimeout(() => {
        fs.writeFile(path, "Content", (error) => {
            if (error) throw error;
        });
    }, 2000);

    setTimeout(() => {
        fs.unlink(path, (error) => {
            if (error) throw error;
        });
    }, 5000);
};

problem1(cb);
