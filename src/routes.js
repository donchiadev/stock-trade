import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Stocks from "./components/Stocks/Stocks"

export default [
  { path: "/", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/stocks", component: Stocks }
]
