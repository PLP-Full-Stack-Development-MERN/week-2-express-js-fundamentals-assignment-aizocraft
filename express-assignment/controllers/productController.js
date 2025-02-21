const getProducts = (req, res) => res.send('Get all products');
const createProduct = (req, res) => res.send('Create a product');
const updateProduct = (req, res) => res.send(`Update product ${req.params.id}`);
const deleteProduct = (req, res) => res.send(`Delete product ${req.params.id}`);
module.exports = { getProducts, createProduct, updateProduct, deleteProduct };