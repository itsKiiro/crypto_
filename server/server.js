const express = require("express");
const app = express();
const axios = require("axios");
const cors = require('cors');
require('dotenv').config();


app.use(cors());

app.get('/api/rates', async (req, res) => {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/articles', async (req, res) => {
    try {
        const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.ARTICLE_API_KEY}&q=crypto`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${process.env.PORT}`)
})