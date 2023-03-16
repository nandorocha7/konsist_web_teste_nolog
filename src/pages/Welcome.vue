<template>
  <div class="v-image__image v-image__image--cover img-bkg" style="">
    <section class="container fill-height" id="login-view">
      <div class="row justify-center">
        <div class="col col-12">
          <materialcardlogin
            icon="mdi-clipboard-text"
            title="Produtos"
            class="px-5 py-3"
            color="primary"
            style="
              max-width: 100%;
              width: 400px;
              transform-origin: center top 0px;
            "
          >
          </materialcardlogin>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
//import InicialBar from './components/core/InicialBar.vue'
import materialcardlogin from "../components/Cards/MaterialCardLogin.vue";
export default {
  components: { materialcardlogin },
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
  },
};
</script>

<style scoped>
.img-bkg {
  /* background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/img/login.jpg');  */
  background-position: center center;
}

.container.fill-height {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}
.fill-height {
  height: 100%;
}
.container.fill-height > .row {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 100%;
  flex: 1 1 100%;
  max-width: calc(100% + 24px);
}
.col,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-auto {
  width: 100%;
  padding: 12px;
}
.col-12 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}
.v-card .v-card--material__heading {
  top: -30px;
}
.v-card .v-card--material__heading {
  top: -30px;
}
.v-card .v-card--material__heading {
  top: -30px;
}
.v-application .mt-n9 {
  margin-top: -36px !important;
}
.v-application .elevation-6 {
  -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
}
.v-application .accent {
  background-color: #e91e63 !important;
  border-color: #e91e63 !important;
}
.v-application .success {
  background-color: #4caf50 !important;
  border-color: #4caf50 !important;
}
.v-card .v-card--material__heading {
  top: -30px;
}
.v-card .v-card--material__heading {
  top: -30px;
}

.v-card .v-card--material__heading {
  top: -30px;
}
.v-card .v-card--material__heading {
  top: -30px;
}

.v-application .text-start {
  text-align: start !important;
}

.v-application .pa-7 {
  padding: 28px !important;
}

.v-application .mb-n6 {
  margin-bottom: -24px !important;
}

.v-application .elevation-6 {
  -webkit-box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;
}

.v-card .v-card--material__heading {
  top: -30px;
}

.theme--dark.v-sheet {
  background-color: #1e1e1e;
  border-color: #1e1e1e;
  color: #fff;
}
.v-card--material__heading {
  position: relative;
  top: -40px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  z-index: 1;
}

.v-sheet {
  border-radius: 4px;
}

* {
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}

*,
:after,
:before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
user agent stylesheet div {
  display: block;
}
.justify-center {
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
}
.row {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 100%;
  flex: 1 1 100%;
  max-width: calc(100% + 24px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin-right: -12px;
  margin-left: -12px;
}
div {
  display: block;
}

.v-application--wrap {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
}

.theme--dark.v-application {
  background: #121212;
  color: #fff;
}

.v-application {
  font-family: Roboto, sans-serif;
  line-height: 1.5;
}

html {
  font-size: 14px;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow-y: scroll;
  -webkit-text-size-adjust: 100%;
}

.v-image__image--cover {
  background-size: cover;
}
.v-image__image {
  background-repeat: no-repeat;
}
.v-image__image,
.v-image__placeholder {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
* {
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}
*,
:after,
:before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
user agent stylesheet div {
  display: block;
}
.v-application--wrap {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
}
.v-application--wrap {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
}
.theme--dark.v-application {
  background: #121212;
  color: #fff;
}
.theme--dark.v-application {
  background: #121212;
  color: #fff;
}
.v-application {
  font-family: Roboto, sans-serif;
  line-height: 1.5;
}
html {
  font-size: 14px;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow-y: scroll;
  -webkit-text-size-adjust: 100%;
}
:after,
:before {
  text-decoration: inherit;
  vertical-align: inherit;
}
*,
:after,
:before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
:after,
:before {
  text-decoration: inherit;
  vertical-align: inherit;
}
*,
:after,
:before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
::selection {
  background-color: #b3d4fc;
  color: #000;
  text-shadow: none;
}

.bg-gray-100 {
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
}

.border-gray-200 {
  border-color: #edf2f7;
  border-color: rgba(237, 242, 247, var(--tw-border-opacity));
}

.text-gray-400 {
  color: #cbd5e0;
  color: rgba(203, 213, 224, var(--tw-text-opacity));
}

.text-gray-500 {
  color: #a0aec0;
  color: rgba(160, 174, 192, var(--tw-text-opacity));
}

.text-gray-600 {
  color: #718096;
  color: rgba(113, 128, 150, var(--tw-text-opacity));
}

.text-gray-700 {
  color: #4a5568;
  color: rgba(74, 85, 104, var(--tw-text-opacity));
}

.text-gray-900 {
  color: #1a202c;
  color: rgba(26, 32, 44, var(--tw-text-opacity));
}

@media (prefers-color-scheme: dark) {
  .dark\:bg-gray-800 {
    background-color: #2d3748;
    background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
  }

  .dark\:bg-gray-900 {
    background-color: #1a202c;
    background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
  }

  .dark\:border-gray-700 {
    border-color: #4a5568;
    border-color: rgba(74, 85, 104, var(--tw-border-opacity));
  }

  .dark\:text-white {
    color: #fff;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
  }

  .dark\:text-gray-400 {
    color: #cbd5e0;
    color: rgba(203, 213, 224, var(--tw-text-opacity));
  }
}
</style>
