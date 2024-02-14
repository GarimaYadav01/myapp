const express = require('express');
const app = express();
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 3000;

const products_routes = require("./routes/product")

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/products", products_routes);

// Start the server
app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
});
