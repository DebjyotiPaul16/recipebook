const express = require('express');
const router = express.Router();

const recipe_controller = require('../controllers/recipe.controller');
router.get('/test', recipe_controller.test);

module.exports = router;