const { openai } = require("../config/gptConfig");
const mongoose = require("mongoose");
const PromptModel = require("../models/PromptModel");
const userModel = require("../models/userModel");

require("dotenv").config();

module.exports.promptInput = async (req, res) => {
  try {
    const { question } = req.body;
    const id = req.user.id;
    const chat = await openai.chat.completions.create({
      messages: [{ role: "user", content: `${question}`}],
      model: "gpt-3.5-turbo",
    });

    const answer = chat.choices[0].message.content;
    const pair = await PromptModel.create({ question, answer });

    const updateUser = await userModel.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          prompts: pair._id,
        },
      },
      { new: true }
    );

    const user = await userModel
      .findById({ _id: id })
      .populate("prompts")
      .exec();

    return res.status(200).json({
      success: true,
      message: answer,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.promptDelete = async(req,res)=>{
  try {
    const   userId = req.user.id;
    const {id} = req.body;
    const userPrompt =  await userModel.findByIdAndUpdate({_id : userId} ,{
      $pull: {
        prompts: id,
      },
    },
    { new: true } )
    const promptDel = await PromptModel.findByIdAndDelete({_id : id})
    res.status(200).json({
      success :true,
      message : "Prompt deleted successfull"
    })
  } catch (error) {
    res.status(500).json({
      success :false,
      message :error.message
    })
  }
}