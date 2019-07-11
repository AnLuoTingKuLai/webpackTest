const express = require('express');
const path = require('path')

const app = express();

app.listen(8888, function(){
})

app.use(express.static(path.join(__dirname, './')));