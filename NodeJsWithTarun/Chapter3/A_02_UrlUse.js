const http = require('http');
const fs = require('fs');
const url = require('url');

var server = http.createServer((req, res) => {

	if (req.url === '/favicon.ico') return res.end();
	const log = `${Date.now()}: ${req.url} new Request recieved\n`;
	const myUrl = url.parse(req.url, true);
	console.log(myUrl);

	fs.appendFile('A_02_log.txt', log, (err, data) => {
		switch (myUrl.pathname) {
			case '/': res.end('Hello From Home Page');
				break;
			case '/about':
				const userName = myUrl.query.myname;
				res.end(`I am ${userName} rathore`);
				break;

			case '/search':
				const search = myUrl.query.search_query;
				res.end(`Here are your result for :` + search)
				break;
			default: res.end('404 Page Not found');
		}
	})

})


server.listen(8000, () => console.log("Server started ."))
