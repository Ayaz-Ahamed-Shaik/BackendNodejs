const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv').config({path:'./config.env'});
const databaseConnect=require('./Database/Database.js');
const app=express();


databaseConnect();

app.listen(process.env.PORT,"0.0.0.0",()=>`Connection work on port ${process.env.PORT}`);