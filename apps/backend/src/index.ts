import express from "express"
import dotenv from "dotenv"

dotenv.config({ path: "../../../.env" })

const app = express()
const port = process.env.PORT

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date()
  })
})

app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})