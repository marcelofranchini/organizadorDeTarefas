var express = require('express');
var router = express.Router();
const TaskValidation = require('../middlewares/TaskValidation')


let TaskController = require('../controllers/TaskController')


router.get('/task/all/:macaddress', TaskController.index)
router.get('/task/last/:macaddress',TaskController.last)
router.get('/task/today/:macaddress',TaskController.today)
router.get('/task/week/:macaddress',TaskController.week)
router.get('/task/month/:macaddress',TaskController.month)
router.get('/task/year/:macaddress',TaskController.year)

router.get('/:id',TaskController.show)

router.post('/task',TaskValidation, TaskController.create)
router.put('/task/:id',TaskValidation, TaskController.update)
router.put('/task/:id/:done',TaskController.done)
router.delete('/delete/:id',TaskController.delete)

module.exports = router;
