<template>
    <section>
        <h2 class="setup__title">
            {{
                 installationHeadlines.random()
            }}
        </h2>

            <div v-for="step in steps" :key="step.id" class="step">
                <h3>
                    {{ step.title }}
                </h3>
                <p v-html="step.desc">
                </p>
            </div>
    </section>
</template>

<script>
import '../funcs/random'

import installationHeadlines from '../data/installationHeadlines.json'

export default {
    name: "SetUp",
    props: ["steps"],
    data() {
        return {
            installationHeadlines
        }
    }
}
</script>

<style>
section {
    padding: 2rem .5rem;
}

@media (min-width: 400px) {
    section {
        padding: 2rem;
    }
}

.step {
    background-color: #222;
    border-bottom: .5rem solid var(--main);
    padding: 2rem;
    max-width: 1500px;
    margin: 0 auto;
    margin-bottom: 1rem;
}

.step h3 {
    font-weight: 500;
    margin-bottom: 2rem;
}

.setup__title {
    font-size: 3rem;
    text-align: center;
    padding-top: 0;
}

.link {
    color: inherit;
    text-decoration-color: var(--main);
    font-style: italic;
}
</style>
