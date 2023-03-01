// const express = require('express')
import { ChatGPTAPI } from "chatgpt"
import express from "express"

const router = express.Router()
const requireCompletion = async (req, res) => {
  console.log("!11")
  const { prompt } = req.body

  try {
    const api = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY,
    })
    console.log(prompt)
    const data = await api.sendMessage(prompt)
    console.log(data.text)

    res.status(200).json(data.text)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

router.post("/", requireCompletion)
// module.exports = router
export default router
