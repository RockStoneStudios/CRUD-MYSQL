const router = require('express').Router();
const controller = require('../Controllers/customerController');

router.get('/',controller.list);
router.post('/add',controller.save);
router.get('/delete/:id',controller.delete);
router.get('/update/:id',controller.edit);
router.post('/update/:id',controller.update);


module.exports = router;

