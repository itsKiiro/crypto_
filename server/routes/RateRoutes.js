const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/rates', async (req, res) => {
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


module.exports = router;