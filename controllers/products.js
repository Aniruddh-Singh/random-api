const product = require("../models/product");

const getAllProducts = async (req, resp) => {
    const { name, brand } = req.query;
    const queryObject = {};

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    if (brand) {
        queryObject.brand = { $regex: brand, $options: "i" };
    }

    const myAPI = await product.find(queryObject).sort("-price");
    resp.status(200).json({ myAPI });
};

const getAllProductsTesting = async (req, resp) => {
    const myAPI = await product.find(req.query);
    resp.status(200).json({ myAPI });
    // resp.status(200).json({ name: "Anruddh Singh,====getAllProductsTesting" });
};

module.exports = { getAllProducts, getAllProductsTesting };
