// Seed Data
export const userSeed = { funds: 100000, portfolio: [] }
export const stocksSeed = [
  {
    id: 1,
    name: "BMW",
    price: 110
  },
  {
    id: 2,
    name: "Google",
    price: 200
  },
  {
    id: 3,
    name: "Apple",
    price: 250
  },
  {
    id: 4,
    name: "Twitter",
    price: 8
  }
]

// Functions
export const currency = value => {
  const decimalParsed = []
  let fractional = null

  value = value.toString()
  const decimal = value
    .split(".")[0]
    .split("")
    .reverse()

  let counter = 0
  decimal.forEach(num => {
    if (counter === 3) {
      decimalParsed.push(".")
      counter = 0
    }
    decimalParsed.push(num)
    counter++
  })
  if (value.split(".").length > 1) {
    fractional = value.split(".")[1]
    if (fractional.length === 1) {
      fractional = fractional.concat("0")
    }
  }
  let valueParsed = null
  if (fractional) {
    valueParsed = decimalParsed.reverse().concat([",", fractional])
  } else {
    valueParsed = decimalParsed.reverse()
  }
  valueParsed = valueParsed.join("")
  return valueParsed
}

export const generateDeviation = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
}

export const sanitizeQuantity = value => {
  if (isNaN(value)) throw new Error("Quantity entered is not a number.")
  value = parseFloat(value)
  if (value % 1 !== 0 || value === 0)
    throw new Error(
      "You can only enter an integer value greater than 0 as quantity."
    )
  return value
}
