'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controller/resepMakanan_controller');

router.post('/',controller.createResep);
router.get('/',controller.findAllResep);
router.delete('/:id',controller.deleteResep);

module.exports = router;