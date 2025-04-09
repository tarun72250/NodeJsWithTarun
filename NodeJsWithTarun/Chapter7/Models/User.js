const { mongoose } = require('mongoose');

//Schema 
const userSchema = new mongoose.Schema({
	fname: {
		type: String,
		required: true,
	},
	lname: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	jobTitle: {
		type: String,
	},
	gender: {
		type: String,
	},
},
	{ timestamps: true }
)

const User = mongoose.model("user", userSchema);

module.exports = User
