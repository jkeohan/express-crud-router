require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// controllers
const fruitsController = require('./controllers/fruits');
app.use('/fruits', fruitsController);



app.listen(port, () => {
    console.log(`the fruits app is listening on port ${port}`);
});