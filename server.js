const express = require('express');
const cors = require('cors');
const data = require('./data/weather.json')
const server = express();
server.use(cors());

const PORT =process.env.PORT;

server.get(('/',req,res) => {
    res.send("Hi from the home route")
});

server.get(('http://localhost:3000/getdata?name=city_name',(req,res))=>{
    const result = data.result.find(item)=>{
        if(item.name== req.query.name){
            return item;
        }
    }

})

server.get(('*',req,res) => {
    res.send("Page not found")
});

server.listen(PORT,()=>{
    console.log(`Hello,I'm listening on ${PORT}`)
})