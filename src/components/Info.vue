<template>
  <section class="info" id="info">
      <div class="info__content">
        <h2 class="info__headtext" v-html="infoHeadlines.random()"></h2>
        <div class="info__list">
            <Feature v-for="feature in features" :key="feature.title" :data=feature />
        </div>
      </div>
  </section>
</template>

<script>
import Feature from './Feature.vue'

import features from '../data/features.json'
import infoHeadlines from '../data/infoHeadlines.json'

import '../funcs/random'

export default {
  name: 'Header',
  components: {
    Feature
  },
  data() {
    return {
          features,
          infoHeadlines
      }
  }
}
</script>

<style>

.info__headtext {
    text-align: right;
}

.info__list {
    padding: 2rem 0;
}

@media (min-width: 400px) {
  .info__list {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 1rem;

    margin-bottom: 0rem;
  }
}
</style>
