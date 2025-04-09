const User = require('../Models/User')

async function handleGetAllUsers(req, res) {
	const allDbUsers = await User.find({});
	return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
	const user = await User.findById(req.params.id);
	if (!user) return res.status(404).json({ error: "user not found" });
	return res.json(user);
}


async function handleUpdateUserById(req, res) {
	const user = await User.findByIdAndUpdate(req.params.id, { lname: "Changed" });
	if (!user) return res.status(404).json({ error: "user not found" });
	res.json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
	//delete user with id
	await User.findByIdAndDelete(req.params.id);
	res.json({ status: "Success" })
}


async function handlecreateNewUser(req, res) {
	const body = req.body;
	if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
		return res.status(400).json({ msg: 'All feilds are mandatary' })
	}
	const result = await User.create({
		fname: body.first_name,
		lname: body.last_name,
		email: body.email,
		gender: body.gender,
		jobTitle: body.job_title,
	})

	console.log("result", result);

	return res.status(201).json({ msg: "success", id: result._id });
}


module.exports = {
	handleGetAllUsers,
	handleGetUserById,
	handleUpdateUserById,
	handleDeleteUserById,
	handlecreateNewUser,
}