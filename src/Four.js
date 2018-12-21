const arpScanner = require('arpscan/promise');

module.exports = {
    "exec" : ()=>{
        let mpromise = arpScanner("-V");
        mpromise.then((data)=>{
            console.log("Approach #4");
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    
    }
}


