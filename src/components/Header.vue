<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">
      <a class="navbar-brand" href="/">
        <i class="fa fa-landmark fa-2x"></i>
      </a>
    </router-link>
    <button
      class="navbar-toggler ml-auto"
      type="button"
      data-toggle="collapse"
      data-target="#headerNavbar"
      aria-controls="headerNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="headerNavbar">
      <ul class="navbar-nav">
        <router-link tag="li" class="nav-item active" to="/portfolio">
          <a class="nav-link" href="#">Portfolio</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/stocks">
          <a class="nav-link" href="#">Stocks</a>
        </router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a @click="$store.dispatch('endDay')" class="nav-link">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="headerNavbarDropdown"
            role="button"
            data-toggle="dropdown"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="headerNavbarDropdown">
            <a @click="$store.dispatch('saveData')" class="dropdown-item">Save Data</a>
            <a @click="$store.dispatch('loadData')" class="dropdown-item">Load Data</a>
          </div>
        </li>
        <span id="funds" class="navbar-text ml-auto">
          <i class="fas fa-coins"></i>
          <b class="ml-1">${{ this.$store.state.user.funds | currency }}</b>
        </span>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  padding: 0 0.8rem;
}

li {
  padding: 0 0.5rem;
}

i {
  color: #00b894;
}

#funds {
  cursor: default;
}

.nav-link {
  cursor: pointer;
}

.dropdown-item {
  cursor: pointer;
}
</style>