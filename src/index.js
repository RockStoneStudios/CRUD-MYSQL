const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000|| process.env.PORT;
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const { urlencoded } = require('express');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host : 'localhost',
    user : 'root',
    password :'3508436568',
    port : 3306,
    database : 'Crud_Nodejs'
},'single'));

app.use(express.urlencoded({extended:false}));

//Static Files
app.use(express.static(path.join(__dirname,'public')));
//routes

app.use(require('./Routers/customer'));

app.listen(PORT,()=>{
        console.log('Starting ... Port');
});


