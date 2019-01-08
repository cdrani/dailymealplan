const randomInt = (min, max) => {
  if (max === undefined) {
    max = min
    min = 0
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers')
  }

  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomArrayElement = arr => {
  return arr[randomInt(0, arr.length - 1)]
}

module.exports = { randomInt, randomArrayElement }
