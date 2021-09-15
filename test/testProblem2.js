const fs=require('fs');
const problem2=require("../problem2.js");

const cb=(error)=>{
    if(error)
    throw error;
}

problem2(cb);