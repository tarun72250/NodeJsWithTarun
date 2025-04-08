const http = require('http');

var server = http.createServer((req, res) => {
	// console.log('New req start.');
	// console.log(req.headers)
	console.log(req)
	res.end("Hello from server");
})


server.listen(8000, () => console.log("Server started ."))
