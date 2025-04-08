const http = require('http');
const fs = require('fs');


var server = http.createServer((req, res) => {
	const log = `${Date.now()}: ${req.url} new Request recieved\n`;
	fs.appendFile('A_01_log.txt', log, (err, data) => {
		switch (req.url) {
			case '/': res.end('Hello From Home Page');
				break;
			case '/about': res.end("I am tarun rathore");
				break;
			default: res.end('404');
		}

	})

})


server.listen(8000, () => console.log("Server started ."))
