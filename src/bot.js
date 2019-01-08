const Twit = require('twit')
const config = require('./config')
const { addToMealPlan } = require('./meals')

const search = () => {
  const bot = new Twit(config)
  bot.get('search/tweets', { q: 'banana', count: 5 }, (err, data, res) => {
    console.log(addToMealPlan())
  })
}

module.exports = { search }
