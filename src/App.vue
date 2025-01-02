<template>
  <div id="app">
    <Navbar />
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
      >
      <router-view
        base="/rainbomizer/"
      ></router-view>
    </transition>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import setHue from './funcs/setHue'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      prevHeight: 0,
    }
  },
  created() {
    setHue()
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter(element) {
      const { height } = getComputedStyle(element)
      element.style.height = this.prevHeight
      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter(element) {
      element.style.height = 'auto'
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter {
  transition-delay: 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
:root {
  --main: hsl(175, 100%, 30%);
  --bacc: #141414;
}
* {
  scroll-behavior: smooth;
}
*::selection {
  background-color: var(--main);
}
html {
  font-size: 12px;
  background-color: var(--bacc);
}
@media screen and (min-width: 320px) {
  html {
    font-size: calc(12px + 8 * ((100vw - 320px) / 680));
  }
}
@media screen and (min-width: 1000px) {
  html {
    font-size: 20px;
  }
}
html {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
}
h1,h2,h3,h4,h5,h6 {
  all: unset;
  display: block;
}
h1 {
  font-size: 3rem;
  font-weight: 500;
}
@media (min-width: 760px) {
  h1 {
    font-size: 5rem;
  }
}
h2 {
  font-size: 2.5rem;
}
@media (min-width: 760px) {
  h2 {
    font-size: 3rem;
  }
}
h3 {
  font-size: 2rem;
  font-weight: 300;
}
#app {
  background-color: var(--bacc);
  color: white;
  min-height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
}
b {
  background-color: var(--main);
  padding: 0 .25rem;
  white-space: nowrap;
}
</style>
