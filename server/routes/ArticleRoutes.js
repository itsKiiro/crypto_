const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/articles', async (req, res) => {
    try {
        const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.ARTICLE_API_KEY}&q=crypto`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;