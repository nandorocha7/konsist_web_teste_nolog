<template>
  <v-layout
    view="lHh Lpr lFf"
    class="img-background"
    style="height: 0px; opacity: 0.9; z-index: -1"
  >
    <router-view />
  </v-layout>
</template>

<script>
export default {};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.img-background {
  background: #fff url("../../assets/img/login.jpg");
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: solid 1px black;
  z-index: -10000;
  opacity: 0.9;
}

.v-application--wrap {
  z-index: -1;
}
</style>
