const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController')


router.get('/', TodoController.read)
router.post('/add', TodoController.create)
router.get('/edit/:id', TodoController.update)
router.post('/edit/:id', TodoController.update)
router.get('/delete/:id', TodoController.delete)


module.exports = router