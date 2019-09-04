<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4">Trade or View your Portfolio</h1>
      <p class="lead">You may Save & Load Data</p>
      <p class="lead">Click on "End Day" to begin a new Day!</p>
      <hr class="my-4" />
      <p class="funds-avaiable">Your Funds: ${{ this.$store.state.user.funds | currency }}</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.lead {
  margin: 0;
  padding: 0;
}

.funds-avaiable {
  font-size: 3em;
  font-weight: 100;
  color: #636e72;
}
</style>