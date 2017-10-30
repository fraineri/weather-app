const getLocation     = require('./modules/geolocation/geolocation.js').getLocation;
const getTemperature  = require('./modules/weather/weather.js').getTemperature;
const express         = require('express');
const PORT = 5000;

var app = express();

app.set('view engine','hbs');

app.get('/',(req, res)=>{
  res.render('index.hbs');
});

app.get('/weather',(req, res)=>{
  getLocation(req.query.address)
  .then((location)=>{
    return getTemperature(location);
  }).then((temperature)=>{
    res.render('weather',{temperature:temperature});
  });

});

app.listen(PORT,()=>{
  console.log(`Server running on ${PORT}...`);
});
