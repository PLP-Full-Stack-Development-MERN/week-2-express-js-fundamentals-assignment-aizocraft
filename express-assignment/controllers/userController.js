const getUsers = (req, res) => res.send('Get all users');
const createUser = (req, res) => res.send('Create a user');
const updateUser = (req, res) => res.send(`Update user ${req.params.id}`);
const deleteUser = (req, res) => res.send(`Delete user ${req.params.id}`);
module.exports = { getUsers, createUser, updateUser, deleteUser };
