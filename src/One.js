const find = require('local-devices');

module.exports = {
    "exec" : ()=>{
        console.log("ONE - 1111");

        let mpromise = find();
        mpromise.then(devices => {
            console.log(devices);
        }).catch((err)=>{
            console.log(err);
        });
    }
}


