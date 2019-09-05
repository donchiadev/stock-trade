<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" v-for="stock in stocks" :key="stock.id">
        <app-stock :stock="stock" :isPortfolio="isPortfolio"></app-stock>
      </div>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock";
import { buildPortfolioStocksList } from "../../utils";

export default {
  props: {
    isPortfolio: {
      default: false
    }
  },
  computed: {
    stocks() {
      let stocksList = [];
      if (this.isPortfolio) {
        stocksList = buildPortfolioStocksList(
          this.$store.state.user.portfolio,
          this.$store.state.stocks
        );
      } else {
        stocksList = this.$store.state.stocks;
      }
      return stocksList;
    }
  },
  components: {
    appStock: Stock
  }
};
</script>