require("dotenv").config();
const express = require("express");
const rest = express();
const router = require("./routers/products");
const connectDB = require("./db/connect");

const port = process.env.PORT || 5000;

rest.get("/", (req, resp) => {
    resp.send("<h1>Namaste, mera naam Aniruddh Singh hai.</h1>");
});

rest.use("/products", router);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        rest.listen(port, () => {
            console.log(`${port} is runned successfully.`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
