const Twit = require('twit')
const config = require('./config')
const { addToMealPlan } = require('./meals')
const { randomInt, randomArrayElement } = require('./utils')

const mealPlan = () => {
  const spaces = ' '
  const columns = 4
  const rows = [
    Array(columns).fill(spaces),
    Array(columns).fill(spaces),
    Array(columns).fill(spaces),
    Array(columns).fill(spaces)
  ]

  const mealTypes = ['breakfast', 'lunch', 'tea', 'coffee']
  const dailyMeals = addToMealPlan()

  rows.forEach((row, i) => {
    const meal = dailyMeals[mealTypes[i]]
    for (let j = 0; j < meal.length; j++) {
      row[j] = meal[j]
    }
  })

  const tray = `
  Breakfast | ${rows[0].join(' ')} 
-------------------------------------------
Lunch       | ${rows[1].join(' ')} 
-------------------------------------------
Tea           | ${rows[2].join(' ')} 
-------------------------------------------
Coffee     | ${rows[3].join(' ')} 
-------------------------------------------
`

  const T = new Twit(config)
  T.post('statuses/update', { status: tray }, (err, data, res) => {
    if (err) {
      console.error(err.twitterReply.errors)
    }
  })
}

module.exports = { mealPlan }
