const dotenv = require('dotenv');
dotenv.config();
const server = require('./models/server')
let servidor = new server();
servidor.listen();
servidor.middleware();
