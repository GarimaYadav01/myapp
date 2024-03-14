
const mongoose = require("mongoose");

uri = "mongodb+srv://garimyadav933:F3xvIdUzKWgc1S5j@cluster0.9x9gczf.mongodb.net/MYAPP?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("connect data base")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;