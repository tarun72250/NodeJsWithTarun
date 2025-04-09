const express = require('express');
const router = express.Router();
const { handleGetAllUsers,
	handleGetUserById,
	handleUpdateUserById,
	handleDeleteUserById,
	handlecreateNewUser } =
	require('../Controllers/User');

//REST API 
router.route('/').
	get(handleGetAllUsers).
	post(handlecreateNewUser);

router.route("/:id")
	.get(handleGetUserById)
	.patch(handleUpdateUserById)
	.delete(handleDeleteUserById)

module.exports = router;		