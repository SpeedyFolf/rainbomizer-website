<template>
  <section class="download">
      <div class="download__content">
          <h2>{{ headlines.random()}}  <span id="rainbow" @click="setHue">🌈</span></h2>
          <a class="button" :href="download.link"> {{ download.buttonText }}</a>
        <p>
            {{ download.file.size !== "" ? download.file.size + ", " + download.file.type: "" }}
        </p>
      </div>
  </section>
</template>

<script>
import headlines from "../data/downloadHeadlines.json"

import "../funcs/random"
import setHue from '../funcs/setHue'

export default {
    name: "Download",
    props: ["download"],
    data() {
        return {
            headlines,
            setHue
        }
    }
}
</script>

<style>
.download {
    text-align: center;
    background-image: linear-gradient(to top, transparent 50%, var(--main) 50%);
    background-size: 100% 200%;
    background-position: bottom;
    animation: bgSlide .5s .3s ease-in-out forwards;
    padding: 4rem 0rem;
}

@media (min-width: 400px) {
    .download {
    padding: 4rem 2rem;
    }
}

@keyframes bgSlide {
    from {
        background-position: bottom;
    }
    to {
        background-position: top;
    }
}

.download .button {
    border-color: var(--bacc);
}

.download .button:hover {
    background-color: var(--bacc);
}
h2 {
    padding: 2rem 0;
}
.download p {
    color: rgba(255,255,255,.6);
}
</style>
