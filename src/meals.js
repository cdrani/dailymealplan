const { randomArrayElement } = require('./utils')

const meals = {
  breakfast: ['🍳', '🍎', '🍌', '🍞', '🥞', '🥓'],
  lunch: ['🍕', '🌯', '🌮', '🥙', '🥗', '🥔', '🥓', '🍔'],
  tea: ['🍜', '🍖', '🍲', '🍗', '🍚', '🍙', '🥓', '🥗'],
  coffee: ['🍦', '🍧', '🍰', '🍡',  '🍘', '🍮'],
  beverage: ['🥛', '🚰', '🍷', '🍸', '🍺', '🍻', '🥃']
}

const selectMeals = () => {
  const mealPlan = {
    breakfast: [],
    lunch: [],
    tea: [],
    coffee: []
  }

  Object.keys(mealPlan).forEach(option => {
    for (let i = 0; i < 4; i++) {
      mealPlan[option].push(randomArrayElement(meals[option]))
    }
    mealPlan[option].push(randomArrayElement(meals.beverage))
  })

  return mealPlan
}

const addToMealPlan = () => selectMeals()

module.exports = { addToMealPlan }
