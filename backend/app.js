const express = require('express');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.get('/pain' ,(req , res) => {
      res.send("pond")
});

app.listen(PORT,()=>{
    console.log(`server is stated ${PORT}`)
})