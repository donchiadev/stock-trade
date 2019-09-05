import { generateDeviation, sanitizeQuantity } from "../utils"

export default {
  buyStocks(state, payload) {
    try {
      payload.quantity = sanitizeQuantity(payload.quantity)
      const companyStocks = state.stocks.find(stock => stock.id === payload.id)
      const stocksCost = companyStocks.price * payload.quantity

      if (stocksCost > state.user.funds) {
        throw new Error(
          "You don't have enough funds to buy stocks quantity selected."
        )
      }
      state.user.funds -= stocksCost
      const isStockInPortfolio = state.user.portfolio.find(
        stock => stock.id === companyStocks.id
      )
      if (!isStockInPortfolio) {
        state.user.portfolio.push({ ...payload })
      } else {
        isStockInPortfolio.quantity += payload.quantity
      }
    } catch (e) {
      alert(e)
    }
  },

  sellStocks(state, payload) {
    try {
      payload.quantity = sanitizeQuantity(payload.quantity)
      const selectedStocks = state.user.portfolio.find(
        stock => stock.id === payload.id
      )
      if (selectedStocks.quantity < payload.quantity) {
        throw new Error(
          "The number of stocks to sell exceed the amount avaiable."
        )
      }
      const selectedStocksPrice = state.stocks.find(
        stock => stock.id === selectedStocks.id
      ).price
      state.user.funds += selectedStocksPrice * payload.quantity
      if (selectedStocks.quantity === payload.quantity) {
        state.user.portfolio = state.user.portfolio.filter(
          stock => stock.id !== selectedStocks.id
        )
      } else {
        selectedStocks.quantity -= payload.quantity
      }
    } catch (e) {
      alert(e)
    }
  },

  endDay(state) {
    const deviation = generateDeviation(-30, 30)
    const updatedStock = state.stocks.map(stock => {
      stock.price = parseFloat(
        (stock.price + stock.price * deviation).toFixed(2)
      )
      return stock
    })
    state.stocks = updatedStock
  },

  loadData(state) {
    const data = JSON.parse(localStorage.getItem("data"))
    if (!data) {
      alert("No data exists")
    } else {
      state.user = data.user
      state.stocks = data.stocks
      alert("Data loaded successfully!")
    }
  },

  saveData({ user, stocks }) {
    localStorage.setItem("data", JSON.stringify({ user, stocks }))
    alert("Data saved successfully!")
  }
}
