const catchAsync = require('../utils/catchAsync');

const { questionService } = require('../services');

const getFiveQuestions = catchAsync(async (req, res) => {
  const result = await questionService.queryFiveRandomQuestions();
  res.send(result);
});

const getScore = catchAsync(async(req,res)=>{  
  const score = await questionService.getScore(req.body.answers)
  res.send({score});
})

module.exports = {
    getFiveQuestions,
    getScore
}
