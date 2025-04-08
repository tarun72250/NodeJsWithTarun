// const http = require('http');
const exp = require('express');
const app = exp();


app.get('/', (req, res) => {
	res.send('Hello From Home By ExpreeJs ')
})

app.get('/about', (req, res) => {
	res.send('Hello From About By ExpreeJs ' + `hey ${req.query.name}` + ' you are ' + `${req.query.age}` + ' old.')
})

app.listen(8000, () => console.log("Server started ."))


// var server = http.createServer(app)
// server.listen(8000, () => console.log("Server started ."))
