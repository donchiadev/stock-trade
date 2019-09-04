<template>
  <app-stock-list :stocks="stocks"></app-stock-list>
</template>

<script>
import StockList from "./StocksList";

export default {
  computed: {
    stocks() {
      return this.$store.state.stocks;
    }
  },
  components: {
    appStockList: StockList
  }
};
</script>