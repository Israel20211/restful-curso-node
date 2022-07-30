const express = require('express');
const cors = require('cors');
const port = process.env.PORT;
class Server{
	constructor(){
		this.app = express();
		this.middleware();
		this.routes();

	}
	middleware(){
		this.app.use(cors());
		this.app.use(express.static('./public'));
		//Lectura y parseo del body
		this.app.use(express.json());
	}
	routes(){
		this.app.use('/api/usuarios', require('../routes/user'));

	}
	listen(){
		this.app.listen(port, ()=>{
			console.log("Servidor corriendo en", port);
		});
	}
}
module.exports = Server;
