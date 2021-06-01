const { Question } = require('../models');

const questionsSeeder = async ()=>{
    const question = await Question.findOne({})
    if(!question){
        //seed collection
        await Question.create([
            {
                content: "question 1 content",
                answers:[
                    {
                        content:"answer 1 for question 1",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 1",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 1",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 1",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 2 content",
                answers:[
                    {
                        content:"answer 1 for question 2",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 2",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 2",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 2",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 3 content",
                answers:[
                    {
                        content:"answer 1 for question 3",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 3",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 3",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 3",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 4 content",
                answers:[
                    {
                        content:"answer 1 for question 4",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 4",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 4",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 4",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 5 content",
                answers:[
                    {
                        content:"answer 1 for question 5",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 5",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 5",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 5",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 6 content",
                answers:[
                    {
                        content:"answer 1 for question 6",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 6",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 6",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 6",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 7 content",
                answers:[
                    {
                        content:"answer 1 for question 7",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 7",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 7",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 7",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 8 content",
                answers:[
                    {
                        content:"answer 1 for question 8",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 8",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 8",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 8",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 9 content",
                answers:[
                    {
                        content:"answer 1 for question 9",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 9",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 9",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 9",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 10 content",
                answers:[
                    {
                        content:"answer 1 for question 10",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 10",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 10",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 10",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 11 content",
                answers:[
                    {
                        content:"answer 1 for question 11",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 11",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 11",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 11",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 12 content",
                answers:[
                    {
                        content:"answer 1 for question 12",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 12",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 12",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 12",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 13 content",
                answers:[
                    {
                        content:"answer 1 for question 13",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 13",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 13",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 13",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 14 content",
                answers:[
                    {
                        content:"answer 1 for question 14",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 14",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 14",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 14",
                        isCorrect:false
                    },
                ]
            },
            {
                content: "question 15 content",
                answers:[
                    {
                        content:"answer 1 for question 15",
                        isCorrect:true
                    },
                    {
                        content:"answer 2 for question 15",
                        isCorrect:false
                    },
                    {
                        content:"answer 3 for question 15",
                        isCorrect:false
                    },
                    {
                        content:"answer 4 for question 15",
                        isCorrect:false
                    },
                ]
            },
        ])
    }
}

module.exports = questionsSeeder;