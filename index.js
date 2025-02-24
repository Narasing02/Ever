const express =require('express');
require('dotenv').config();
const cors = require('cors');
const app =express();
const { alldl } = require('rahad-all-downloader');

const PORT = process.env.PORT || 5000;
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/download', async (req, res) => {
    const url = req.query.url;

    // Check if URL is missing from query
    if (!url) {
        return res.status(400).json({ error: 'Missing URL' });
    }

    try {
        // Attempt to process the download with 'alldl'
        const result = await alldl(url);
        console.log(result); // Debugging: Log the result

        // Send back the result as JSON
        res.json(result);
    } catch (error) {
        console.error('AllDL Error:', error); // Log the error

        // Return a 500 status with a generic error message
        return res.status(500).json({ error: 'Failed to process video' });
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}` );
})

