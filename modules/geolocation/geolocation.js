const https = require('https');

function getLocation (address){
  return new Promise((resolve, reject)=>{
    var encodeAddress = encodeURI(address);
    https.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,(res)=>{
      var data = '';

      res.on('data',(chunk)=>{
        data+=chunk;
      });

      res.on('end',()=>{
        var obj = JSON.parse(data)
        var location = {
          lat:obj.results[0].geometry.location.lat,
          lng:obj.results[0].geometry.location.lng
        };
        resolve(location);

      });
    });
  });

}

module.exports.getLocation = getLocation;
