const  arp = require('arp-a');
const tbl = { ipaddrs: {}, ifnames : {} };

module.exports = {
    "exec" : ()=>{
        arp.table(function(err, entry) {
            if (!!err) return console.log('arp: ' + err.message);
            if (!entry) return;
          
            tbl.ipaddrs[entry.ip] = entry.mac;
            if (!tbl.ifnames[entry.ifname]) tbl.ifnames[entry.ifname] = {};
            tbl.ifnames[entry.ifname][entry.mac] = entry.ip;
        });


        console.log("APPROACH #2");
        console.log(tbl);
    }
}


