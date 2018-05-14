<template>
  <div id="app">
    <NavBar />
    <Child />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Child from './Child.vue'
import {mixin1, mixin2, mixin3, mixin4} from './mixins.js'

export default {
  name: 'app',
  mixins: [mixin1, mixin2, mixin3, mixin4],
  components: {
    NavBar,
    Child
  },
  created () {
    // console.log('Component created')
  },
  mounted () {
    // console.log('Component mounted')
  }
}
</script>
