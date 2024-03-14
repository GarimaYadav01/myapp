const express = require("express")
const router = express.Router();

const {
    getAllproducts,
    getAllproductstesting
} = require("../controllers/product")

router.route("/").get(getAllproducts);
router.route("/testing").get(getAllproductstesting);

module.exports = router;

