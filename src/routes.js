import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import StocksList from "./components/Stocks/StocksList"
import NotFound from "./components/NotFound"

export default [
  { path: "/", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/stocks", component: StocksList },
  { path: "*", component: NotFound }
]
