module.exports = {
    "exec" : ()=>{

        const nmap = require('libnmap');

        const opts = {
            range: ['scanme.nmap.org', '192.168.0.0/26']
        };
          
          
        console.log(nmap);
    }
}


