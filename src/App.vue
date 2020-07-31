<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class";

@Component({
  components: {},
})
export default class App extends Vue {
  @Action("setUser") setUser: any;

  created() {
    this.setUser(localStorage.tsToken);
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
