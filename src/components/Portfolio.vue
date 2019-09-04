<template>
  <app-stocks-list :stocks="stocks" :portfolio="true"></app-stocks-list>
</template>

<script>
import StocksList from "./Stocks/StocksList";

export default {
  computed: {
    stocks() {
      const portfolio = [];
      this.$store.state.user.portfolio.forEach(stockInPortfolio => {
        const stockData = this.$store.state.stocks.find(
          stock => stock.id === stockInPortfolio.id
        );
        portfolio.push({ ...stockData, quantity: stockInPortfolio.quantity });
      });
      return portfolio;
    }
  },
  components: {
    appStocksList: StocksList
  }
};
</script>