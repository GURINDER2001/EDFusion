const express = require('express');
const app = express();
const mongoose = require('mongoose');

const url = 'mongodb+srv://Gurinder-dev:16012001@edfusion.gqzmm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url,{useNewUrlParser :true, useUnifiedTopology:true})
.then(()=> app.listen(4500,()=>{console.log('Listening on Port 4500.');}))
.catch((error)=>console.log(error))



app.get('/',(req,res)=>{
    res.send("WELCOME TO EDFUISON APIS")
})

