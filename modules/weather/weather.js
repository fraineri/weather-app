const https = require('https');

function getTemperature(location){
  return new Promise((resolve, reject)=>{
    https.get(`https://api.darksky.net/forecast/333da468151c0414863da83c788774d1/${location.lat},${location.lng}`,(res)=>{
      var data = '';

      res.on('data',(chunk)=>{
        data+=chunk;
      });

      res.on('end',()=>{
        var obj = JSON.parse(data);
        var temperature = Math.round((obj.currently.temperature-32)*(5/9));
        resolve(temperature);
      });
    });
  });

}

module.exports.getTemperature = getTemperature;
