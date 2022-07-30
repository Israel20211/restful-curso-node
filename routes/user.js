const { Router } = require('express');
const controller = require('../controllers/user');
const router = Router();

router.get('/home', controller.getUser );
router.put('/home/:id', controller.putUser );
router.put('/home', (req, res)=>{
	res.status(404).json({err:"Necesita enviar un id"});
})
router.delete('/home', controller.deleteUser);
router.post('/home', controller.postUser);

module.exports = router;
