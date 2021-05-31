const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const shuffleArray = require('../utils/shuffleArray');
const { Question } = require('../models');

/**
 * Query for questions
 * @returns {Promise<QueryResult>}
 */
const queryFiveRandomQuestions = async () => {
  const allQuestionsIds = await Question.find({},{"_id":1})
  const fiveRandomIds = shuffleArray(allQuestionsIds).slice(0, 5)

  const fiveRandomQuestions = await Question.find({"_id":{$in:fiveRandomIds}})

  return fiveRandomQuestions;
};



module.exports = {
    queryFiveRandomQuestions
}