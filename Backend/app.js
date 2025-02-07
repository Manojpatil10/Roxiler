const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/main-routes");
require('dotenv').config();

const app = express();


app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGO_URL
mongoose.connect(mongoUrl).then(() => {
    console.log("Database connected successfully");
}).catch(err => console.log("Database connection error:", err));


app.use(router);

const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is running');
});
