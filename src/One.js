const find = require('local-devices');

module.exports = {
    "exec" : ()=>{
        let mpromise = find();
        mpromise.then(devices => {
            console.log("APPROACH - 1");
            console.log(devices);
        }).catch((err)=>{
            console.log(err);
        });
    }
}


