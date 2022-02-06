const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware =jsonServer.defaults();
const port = process.env.PORT || 3000;
const cors = require('cors');

server.use(middleware);
server.use(router);
server.use(cors());


server.listen(port);