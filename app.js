const express = require('express');
const expresslayouts = require("express-ejs-layouts");

const app = express();

//ejs
app.use(expresslayouts);
app.set('view engine', 'ejs');


//Routes
app.use('/', require('./routes/index'));
app.use('/home', require('./routes/home'));


const PORT = process.env.PORT || 3000;


app.listen(PORT, console.log(`Server started on port ${PORT}`));

//LOOK UP NODEMAILER CONNOR - THAT IS WHERE THE VIDEO IS