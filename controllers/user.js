const { response } = require('express');
const getUser = ( req, res = response )=>{
	const { nombre = 'No name', apiKey, query } = req.query;
	res.json({
		msg: 'get api',
		nombre,
		apiKey,
		query
	});
}
const putUser = ( req, res = response )=>{
	const id = req.params.id;
	res.json({
		msg: 'put api',
		id
	});
}
const postUser =  ( req, res = response )=>{
	const { nombre, edad } = req.body; 
	res.status(201).json({
		msg: 'post api',
		nombre,
		edad
	});
}
const deleteUser = ( req, res = response )=>{
	res.json({
		msg: 'delete api'
	});
}
module.exports= {
	getUser,
	putUser,
	deleteUser,
	postUser

}
