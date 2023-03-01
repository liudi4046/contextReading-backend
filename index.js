import dotenv from "dotenv"
dotenv.config()
import express from "express"
import chatgptRoutes from "./routes/chatgpt.js"
import * as path from "path"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.body)
  next()
})
app.use("/api/getepub", (req, res) => {
  const filePath = "sample.epub"
  console.log("11")

  res.download(path.resolve("./sample.epub"))
})
app.get("/api/get", (req, res) => {
  res.status(200).json("111")
})

app.use("/api/chatgpt", chatgptRoutes)
app.listen(process.env.PORT, () => {
  console.log("listen for port:", process.env.PORT)
})
