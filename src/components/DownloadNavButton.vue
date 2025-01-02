<template>
        <router-link
            :to="to"
            class="download__nav__link"
            :class="isActive"
        >
            {{ text }}
        </router-link>
</template>

<script>
export default {
    name: "DownloadNavButton",
    props: ["to", "text"],
    computed: {
        currPage() {
            return this.$route.path
        },
        isActive() {
            return this.currPage === this.to ? 'is-active': ''
        }
    }
}
</script>

<style>
.download__nav__link {
    margin: 0 1rem;
    padding: .25rem 0;
    color: inherit;
    text-decoration: none;

    position: relative;
}

.download__nav__link::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transition: transform .3s ease;
}
.download__nav__link:hover::after {
    transform: scaleX(.5);
}

.download__nav__link.is-active::after {
    transform: scaleX(.9);
}
</style>
