const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { tokenTypes } = require('../config/tokens');

const answerSchema = mongoose.Schema({
    content: {
      type: String,
      required: true
    },
    isCorrect: {
      type: Boolean,
      default: false
    }
})

const questionSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    answers:[answerSchema]
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
questionSchema.plugin(toJSON);

/**
 * @typedef Question
 */
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
