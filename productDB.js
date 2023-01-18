require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const productJson = require("./product.json");

const start = async () => {
    try {
        console.log("succeeded");
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(productJson);
    } catch (error) {
        console.log(error);
    }
};

start();
