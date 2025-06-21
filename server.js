let server = require('express')();
let bodyParser = require('body-parser');
let cors = require('cors');

server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.post('/data', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Data received successfully!' });
});

server.listen(3333, () => {
    console.log('Server is running on http://localhost:3333');
});