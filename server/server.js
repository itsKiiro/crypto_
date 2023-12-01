const express = require("express");
const app = express();
const axios = require("axios");
const cors = require('cors');
require('dotenv').config();

app.use(cors());

const ArticleRoutes = require('./routes/ArticleRoutes.js');
const RateRoutes = require('./routes/RateRoutes.js');



app.use("/api", ArticleRoutes);
app.use("/api", RateRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${process.env.PORT}`)
})