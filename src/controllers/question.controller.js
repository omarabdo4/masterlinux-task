const catchAsync = require('../utils/catchAsync');

const { questionService } = require('../services');

const getFiveQuestions = catchAsync(async (req, res) => {
  const result = await questionService.queryFiveRandomQuestions();
  res.send(result);
});


module.exports = {
    getFiveQuestions,
}
