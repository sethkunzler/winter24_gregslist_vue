<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light">
    Made with 💖 by Seth Kunzler @ Boise CodeWorks
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

.greg-green {
  color: rgba(5, 255, 5, 0.668);
  text-shadow: 1px 1px 1px black;
}

.bold {
  font-weight: bold;
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
