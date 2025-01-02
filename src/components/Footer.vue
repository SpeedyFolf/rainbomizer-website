<template>
    <a href="https://discord.gg/BYVBQw7" target="_blank" class="footer">Join our Discord! <img src="../assets/Discord.svg"></a>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main);
    color: inherit;
    text-decoration: none;
    padding: 1rem;
}

.footer:hover {
    background-color: var(--sec);
}

.footer img {
    height: 1.5rem;
    margin-left: .5rem;
}
</style>
