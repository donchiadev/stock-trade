<template>
  <div>
    <app-header></app-header>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col">
          <transition
            enter-class="animated fadeInLeft"
            enter-to-class="animated fadeInLeft"
            mode="out-in"
          >
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <vue-particles class="vp" color="#dedede"></vue-particles>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    appHeader: Header
  }
};
</script>

<style scoped>
.vp {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #00b894;
}
</style>