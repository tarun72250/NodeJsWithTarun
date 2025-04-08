const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();
const PORT = 8000;

//Middleware -plugin
//it is used for whenever any form data comes this will put that data into body 
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
// 	// console.log("Hello from Middleware 1");
// 	fs.appendFile("Log.txt", `\n${Date.now()} : ${req.method} : ${req.path}`, (err, data) => {
// 		next();
// 	});
// 	req.myUserName = "tarun";
// 	next();
// })




//routes 
app.get('/users', (req, res) => {

	const html = `
	<ul>
		${users.map((user) => `<li>${user.first_name}</li>`).join("")};
	</ul>
	`;
	res.send(html);
})


//REST API 
app.get('/api/users', (req, res) => {
	// console.log(req.headers);//read client headers 
	// res.setHeader("X-myName", "Tarun");
	//always added x to custome headers 
	return res.json(users);
})





app.get('/api/user/:id', (req, res) => {
	const id = Number(req.params.id);
	const user = users.find((user) => user.id === id);
	return res.json(user);
})


// app.post('/api/user', (req, res) => {

// 	const body = req.body;
// 	// console.log(body);
// 	users.push({ id: users.length + 1, ...body });
// 	fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
// 		return res.status(201).json({ status: "success", id: users.length });
// 	});

// 	//create new user 
// })



//all req data are manadatory
app.post('/api/user', (req, res) => {

	const body = req.body;
	if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
		return res.status(400).json({ msg: 'All feilds are mandatary' })
	}
	// console.log(body);
	users.push({ id: users.length + 1, ...body });
	fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
		return res.status(201).json({ status: "success", id: users.length });
	});

	//create new user 
})
//====================================================================
app.patch('/api/user/:id', (req, res) => {
	//get id and convert it into number 
	const id = Number(req.params.id);

	const body = req.body;

	//find the index of the user to update 
	const userIndex = users.findIndex((user) => user.id === id);

	//if the user is not found return 404 error 
	if (userIndex === -1) {
		return res.status(404).json({ status: "User not found" });
	}
	// Update the user data
	users[userIndex] = { ...users[userIndex], ...body };

	// Save the updated data back to the JSON file
	fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
		if (err) {
			return res.status(500).json({ status: "Error   updating user...!" })
		}
		return res.status(200).json({ status: "successfully updated", user: users[userIndex] })
	})
})

//===================================================================


app.delete('/api/user/:id', (req, res) => {

	const id = Number(req.params.id);

	const userIndex = users.findIndex((user) => user.id === id);

	if (userIndex === -1) {
		return res.status(400).json({ status: "User Not found" });
	}


	//remove the user from the array
	const deletUser = users.splice(userIndex, 1);

	//save the updated data back to json file 
	fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
		if (err) {
			return res.status(500).json({ status: "Error Deleting User !" })
		}
		return res.status(200).json({ status: " Deleted succesfully.", user: deletUser[0] })
	})
})

//==============================================================
//get put delete 
//so we called as grouping.
//have common /api/user:id
// so we can merging of all these 
// app.route("api/user:id").get((req, res) => {
// 	const id = Number(req.params.id);

// 	const user = users.find((user) => user.id === id);

// 	return res.json(user);
// }).put((req, res) => {
// 	//edit user with id
// 	res.json({ status: "pending" });
// })
// 	.delete((req, res) => {
// 		//delete user with id
// 		res.json({ status: "pending" })
// 	})



//==============================================================

app.listen(PORT, () => console.log('Server started at Port 8000'))