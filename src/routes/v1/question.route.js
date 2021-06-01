const express = require('express');

const {questionController} = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .get(questionController.getFiveQuestions);

router
  .route('/answers')
  .post(questionController.getScore);


module.exports = router;