<template>
<router-link :to=href class="button">
    {{ text }}
</router-link>
</template>

<script>
export default {
    name: 'Button',
    props: ['href', 'text']
}
</script>

<style>

.button {
    color: inherit;
    text-decoration: none;
    padding: .75rem 1rem;
    border: 4px solid var(--main);
    display: inline-block;
    margin: 0 .5rem;
    cursor: pointer;
}

.button:nth-child(1) {
    margin-left: 0;
}

.button:nth-child(-1) {
    margin-right: 0;
}

.button:hover {
    background-color: var(--main);
}

</style>
