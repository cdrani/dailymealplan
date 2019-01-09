const { randomArrayElement } = require('./utils')

const meals = {
  breakfast: ['🍳', '🍎', '🍌', '🍞', '🥞', '🥓'],
  lunch: ['🍕', '🌯', '🌮', '🥙', '🥗', '🥔', '🥓', '🍔'],
  tea: ['🍜', '🍖', '🍲', '🍗', '🍚', '🍙', '🥓', '🥗'],
  coffee: ['🍦', '🍧', '🍰', '🍡', '🍠', '🍘', '🥓', '🍮'],
  beverage: ['🥛', '🚰', '🍷', '🍸', '🍺', '🍻', '🥃']
}

const selectMeals = mealRations => {
  const mealPlan = {
    breakfast: [],
    lunch: [],
    tea: [],
    coffee: []
  }

  Object.keys(mealRations).forEach(option => {
    for (let i = 0; i < mealRations[option]; i++) {
      mealPlan[option].push(randomArrayElement(meals[option]))
    }
    mealPlan[option].push(randomArrayElement(meals.beverage))
  })

  return mealPlan
}

const addToMealPlan = () => {
  const mealRations = {
    breakfast: 3,
    lunch: 2,
    tea: 3,
    coffee: 2
  }

  return selectMeals(mealRations)
}

module.exports = { addToMealPlan }
