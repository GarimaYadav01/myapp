require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./model/product");



const productjson = require("./products.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGOOB_URL);
        await Product.create(productjson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}

start();