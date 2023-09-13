const mongoose =  require('mongoose')

const promptmodel =  new mongoose.Schema({
    question : {
        type :String,
        required : true
    },
    answer : {
        type :String,
        required : true
    }
})

const PromptModel =  mongoose.model('PromptModel',promptmodel)
module.exports =  PromptModel