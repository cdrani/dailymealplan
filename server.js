const express = require('express')
const { mealPlan } = require('./src/bot')

const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Live at PORT:${PORT}`)
  mealPlan()
})
