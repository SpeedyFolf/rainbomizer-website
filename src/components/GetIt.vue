<template>
    <section class="getit">
        <h2>
            {{ getitHeadlines.random() }}
        </h2>
        <div class="getit__list">
            <GetItElement v-for="data in GetItData" :key="data.id" :data="data"/>
        </div>
    </section>
</template>

<script>
import GetItElement from './getItElement'

import '../funcs/random'

import III from '../assets/III.svg'
import VC from '../assets/VC.svg'
import SA from '../assets/SA.svg'
import VCS from '../assets/gtavcs.png'
import LCS from '../assets/gtalcs.png'
import IV from '../assets/IV.svg'
import V from '../assets/V.svg'

import getitHeadlines from '../data/getitHeadlines.json'

export default {
  name: 'GetIt',
  components: {
    GetItElement
  },
  data() {
      return {
        getitHeadlines,
        GetItData: [
            {
                id: 1,
                headline: "GTA III",
                to: "/III",
                img: III
            },
            {
                id: 2,
                headline: "GTA: Vice City",
                to: "/VC",
                img: VC
            },
            {
                id: 3,
                headline: "GTA: San Andreas",
                to: "/SA",
                img: SA
            },
            {
                id: 4,
                headline: "GTA: Vice City Stories",
                to: "/VCS",
                img: VCS
            },
            {
                id: 5,
                headline: "GTA: Liberty City Stories",
                to: "/LCS",
                img: LCS
            },
            {
                id: 6,
                headline: "GTA IV/Episodes from Liberty City",
                to: "/IV",
                img: IV
            },
            {
                id: 7,
                headline: "GTA V",
                to: "/V",
                img: V
            }
        ]
    }
  }
}
</script>

<style>
.getit {
    text-align: center;
}

.getit h2 {
    padding: 0;
    margin-bottom: 2rem;
}

.getit__list {
    padding: 2rem 0;
}

@media (min-width: 400px) {
  .getit__list {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 1rem;

    margin-bottom: 0rem;
  }
}
</style>
