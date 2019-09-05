<template>
  <div id="not-found" class="text-center">
    <p>404</p>
    {{ redirect() }}
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      setTimeout(() => {
        this.$router.push("/");
      }, 5000);
    }
  }
};
</script>

<style scoped>
#not-found {
  height: 100%;
  color: #fff;
  font-size: 20em;
  text-shadow: 5px 5px #636e72;
}

@media (max-width: 768px) {
  #not-found {
    font-size: 10em;
    text-shadow: 3px 3px #636e72;
  }
}
</style>