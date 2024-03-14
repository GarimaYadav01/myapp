const product = require("../model/product");

const getAllproducts = async (req, res) => {

    const myData = await product.find({});
    res.status(200).json({ myData});

}
const getAllproductstesting = async (req, res) => {
    res.status(200).json({ msg: "i am get all productstesting" });

}

module.exports = { getAllproducts, getAllproductstesting };
