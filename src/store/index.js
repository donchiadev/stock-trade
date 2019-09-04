import mutations from "./mutations"
import { userSeed, stocksSeed } from "../utils"

export default {
  state: { user: userSeed, stocks: stocksSeed },
  mutations,
  actions: {
    buyStocks({ commit }, target) {
      commit("buyStocks", target)
    },
    sellStocks({ commit }, target) {
      commit("sellStocks", target)
    },
    endDay({ commit }) {
      commit("endDay")
    },
    saveData({ commit }) {
      commit("saveData")
    },
    loadData({ commit }) {
      commit("loadData")
    }
  }
}
