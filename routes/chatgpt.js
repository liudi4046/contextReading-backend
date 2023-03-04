// const express = require('express')
import { ChatGPTAPI } from "chatgpt"
import express from "express"
import HttpsProxyAgent from "https-proxy-agent"
import { Configuration, OpenAIApi } from "openai"
const router = express.Router()
const requireCompletion = async (req, res) => {
  console.log("!11")
  const { prompt } = req.body
  const proxy = "http://127.0.0.1:7890" // Replace with your proxy server URL
  const agent = new HttpsProxyAgent(proxy)

  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
      httpsAgent: agent,
    })
    const openai = new OpenAIApi(configuration)
    // const data = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: "Hello world" }],
    //   max_tokens: 300,
    //   temperature: 0.5,
    // })
    // console.log(data.choices[0].message.content)
    // res.status(200).json({ text: data.choices[0].message.content })

    const data = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      max_tokens: 7,
      temperature: 0,
    })
    console.log(data.choices[0].text)
    res.status(200).json({ text: data.choices[0].text })
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message })
  }
}

router.post("/", requireCompletion)
// module.exports = router
export default router
