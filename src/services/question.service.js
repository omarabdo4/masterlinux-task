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
  const fiveRandomIds = (shuffleArray(allQuestionsIds)).slice(0, 5)
  
  const fiveRandomQuestions = await Question.find({"_id":{$in:fiveRandomIds}})

  return fiveRandomQuestions;
};

/**
 * Query for Score
 * @returns {Promise<QueryResult>}
 */
const getScore = async (answers) => {
  var correctNo = 0
  for (const answer of answers) {
    const question = await Question.findOne({"_id":answer.questionId})
    for (const qanswer of question.answers) {
      if(qanswer._id == answer.answerId && qanswer.isCorrect){
        correctNo = correctNo + 1
      }
    }

  }
  return correctNo;
};


module.exports = {
    queryFiveRandomQuestions,
    getScore
}