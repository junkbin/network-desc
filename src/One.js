const find = require('local-devices');

module.exports = {
    "exec" : ()=>{
        console.time("concatenation");
        let mpromise = find();
        mpromise.then(devices => {
            console.log("APPROACH - 1");
            console.log(devices);

            console.timeEnd("concatenation");
        }).catch((err)=>{
            console.log(err);
        });
    }
}


