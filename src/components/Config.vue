<template>
    <section>
        <h2 class="setup__title">
            {{
                 configHeadlines.random()
            }}
        </h2>
        <div class="step">
            <p v-for="step in steps" :key="step.id" v-html="step.desc" class="config__step">
            </p>
        </div>
    </section>
</template>

<script>
import '../funcs/random'

import configHeadlines from '../data/configHeadlines.json'

export default {
    name: "SetUp",
    props: ["steps"],
    data() {
        return {
            configHeadlines
        }
    }
}
</script>

<style>
.config__step {
    max-width: 1500px;
    margin: 1.5rem auto;
}

.config__step:nth-child(1) {
    margin-top: 0;
}

.config__step:nth-last-child(1) {
    margin-bottom: 0;
}
code {
    background-color: rgba(255,255,255,.1);
    padding: .1rem .3rem;
}
</style>
