const express = require("express");
const app = express();
const cors = require("cors")
const fs = require('fs')
app.use(express.json())

app.use(cors());
app.use('/',express.static('./public'));
app.listen(8080,()=>{
    console.log(`server is running on 8080...`);
});
