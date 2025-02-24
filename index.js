const express =require('express');
require('dotenv').config();
const cors = require('cors');
const app =express();

const PORT = process.env.PORT || 5000;
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello World');
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}` );
})

