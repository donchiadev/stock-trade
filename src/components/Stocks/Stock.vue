<template>
  <div class="card mb-3">
    <div class="card-header">
      {{ stock.name }}
      <span
        class="stock-price"
      >(Price: {{ stock.price }} {{ isPortfolio ? `| Quantity: ${stock.quantity}` : "" }})</span>
    </div>
    <div class="card-body form-inline">
      <input type="text" class="form-control" placeholder="Quantity" v-model.trim="quantity" />
      <div class="ml-auto">
        <button
          @click="buyStocks({id: stock.id, quantity})"
          v-if="!isPortfolio"
          class="btn btn-outline-info"
        >Buy</button>
        <button
          @click="sellStocks({id: stock.id, quantity})"
          v-else
          class="btn btn-outline-danger"
        >Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock", "isPortfolio"],
  data() {
    return {
      quantity: null
    };
  },
  methods: {
    buyStocks(payload) {
      this.$store.dispatch("buyStocks", payload);
      this.quantity = "";
    },
    sellStocks(payload) {
      this.$store.dispatch("sellStocks", payload);
      this.quantity = "";
    }
  }
};
</script>

<style scoped>
.card {
  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.25);
}

.card-header {
  font-size: 1.5em;
  color: #00b894;
  font-weight: 600;
}

.stock-price {
  font-size: 0.5em;
  font-weight: 200;
  color: #636e72;
}

button {
  padding-left: 1.8em;
  padding-right: 1.8em;
}

@media (max-width: 576px) {
  button {
    margin-top: 0.8em;
  }
}
</style>