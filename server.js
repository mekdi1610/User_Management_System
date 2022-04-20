const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const bodyparser = require('body-parser');
const connectDB = require('./server/database/connection')

const { resolve } = require('path');
const app = express();

dotenv.config({path: '.env'}) //You can share the source code while allowing people to create there own creditinals
const PORT = process.env.PORT || 8080

app.use(morgan('tiny'));

//mongodb connection
connectDB();

//Parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")

//load assets
app.use('/css',express.static(path.resolve(__dirname, "assets/css")))
app.use('/css',express.static(path.resolve(__dirname, "assets/img")))
app.use('/css',express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'))

app.listen(PORT,()=> {console.log(`Server is running on http://localhost:${PORT}`)});