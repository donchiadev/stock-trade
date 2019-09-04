<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6" v-for="stock in stocks" :key="stock.id">
        <app-stock :stock="stock" :portfolio="portfolio"></app-stock>
      </div>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock";

export default {
  props: ["stocks", "portfolio"],
  components: {
    appStock: Stock
  }
};
</script>