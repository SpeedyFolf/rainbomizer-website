<template>
  <div class="getit__element">
      <img :src="data.img" alt=" " class="getit__logo">
      <h3>{{ data.headline }}</h3>
      <Button
        :href="data.to"
        text="Download it!"
      />
      <p class="smoll">

      </p>
  </div>
</template>

<script>
import Button from './Button'

export default {
    name: "GetItElement",
    components: {
        Button
    },
    props: ["data"]
}
</script>

<style>
    .getit__element {
        background-color: #222;
        padding: 2rem;
        margin-bottom: 1rem;
    }

    .getit__logo {
        height: 3rem;
    }

    .getit__element h3 {
        margin: 1rem 0 2rem 0;
    }

    @media (min-width: 400px) {
        .getit__element {
            margin-bottom: 0;
        }
    }
</style>
