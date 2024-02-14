const getAllproducts = async (req , res) => {
    res.status(200).json({msg:"i am get all product"});

}
const getAllproductstesting = async (req , res) => {
    res.status(200).json({msg:"i am get all productstesting"});
    
}

module.exports = { getAllproducts,getAllproductstesting};
