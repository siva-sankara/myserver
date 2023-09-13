const { default: OpenAI } = require('openai')

const openai = new OpenAI({
    apiKey : process.env.CHATGPT_KEY,
})

module.exports.openai = openai;