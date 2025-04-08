const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer((req, res) => {

	if (req.url === '/favicon.ico') return res.end();
	const log = `${Date.now()}: ${req.method} ${req.url}  new Request recieved\n`;
	const myUrl = url.parse(req.url, true);

	fs.appendFile('A_03_log.txt', log, (err, data) => {
		switch (myUrl.pathname) {
			case '/': if (req.method === 'GET') res.end('Hello From Home Page');
				break;
			case '/about':
				const userName = myUrl.query.myname;
				res.end(`I am ${userName} rathore`);
				break;

			case '/search':
				const search = myUrl.query.search_query;
				res.end(`Here are your result for :` + search)
				break;

			case '/signUp':
				if (req.method === 'GET')
					res.end(`This is signup form.`);
				else if (req.method === 'POST') {
					//DB query
					res.end(`This is signup form.`);
				}
				break;
			default: res.end('success');
		}
	})

})


server.listen(8000, () => console.log("Server started ."))
