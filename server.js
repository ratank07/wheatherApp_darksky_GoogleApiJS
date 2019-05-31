if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
}


const DARK_API_KEY = process.env.DARKSKY_API_KEY;
//const DARK_API_KEY = d101a930f0d7bdba0fb57cf1a40b313f
const axios = require('axios');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/weather', (req, res)=>{
    console.log('entered in wheather');
    const url = `https://api.darksky.net/forecast/${DARK_API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto`
console.log(req.body);
axios({
    url: url,
    responseType: 'json'
   // console.log("");
}).then(data=> {
    console.log(data.data.currently);
    res.json(data.data.currently)

})
})

app.listen(3000, ()=>{
    console.log('server started');
})