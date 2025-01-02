<template>
  <header>
    <div class="header__block"></div>
    <div class="header__content">
      <h1>Rainbomizer <span id="rainbow" @click="setHue">🌈</span></h1>
      <h3>{{ headerHeadlines.random() }}</h3>
      <span class="button" @click="scrollToGetIt">
        {{ headerButton.random() }}
      </span>
    </div>
  </header>
</template>
<script>
import setHue from '../funcs/setHue'
import '../funcs/random'
import headerHeadlines from '../data/headerHeadlines.json'
import headerButton from '../data/headerButton.json'
export default {
  name: 'Header',
  props: ['defineHue'],
  mounted() {
    document.querySelector(".header__block").classList.add("loaded")
  },
  data() {
      return {
      headerHeadlines,
      headerButton,
      setHue
    }
  },
  methods: {
    scrollToGetIt: () => document.querySelector('.getit').scrollIntoView()
  }
}
</script>
<style>
header {
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
}
@media (min-width: 1000px){
  header {
    padding: 0 2rem;
  }
  header h1 {
    text-indent: -6rem;
  }
}
.header__block {
  background-color: var(--main);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
}
.header__block.loaded {
  animation: slideTop .5s .3s ease-in-out forwards;
}
@keyframes slideTop {
  from {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}
.header__content {
  align-self: center;
  padding: 1rem;
  z-index: 1;
}
/*
.header__content h1 {
} */
.header__content h3 {
  margin-block-end: 3rem;
}
#rainbow {
  cursor: pointer;
}
</style>
