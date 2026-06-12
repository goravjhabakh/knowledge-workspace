import express from "express"
import dotenv from "dotenv"
import { fileURLToPath } from "url"
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const envPath = path.resolve(__dirname, "../../../.env")
dotenv.config({ path: envPath })

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