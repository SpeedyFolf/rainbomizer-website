<template>
    <router-link
        :to="to"
        :style="{backgroundImage: `url(${img})`}"
        :class="isActive"
    >
        <div class="navbutton__tooltip">
            {{ text }}
        </div>
    </router-link>
</template>

<script>
export default {
    name: "NavButton",
    props: ["img", "to", "text"],
    computed: {
        currPage() {
            return this.$route.path
        },
        isActive() {
            let con = this.to === "/" ? this.currPage === this.to : this.currPage.includes(this.to)

            return con ? 'is-active': ''
        }
    }
}
</script>

<style>
nav a {
    text-decoration: none;
    color: white;
    margin: .5rem .5rem;
    background-color: var(--icon);
    border: 2px solid var(--icon);
    display: inline-block;
    height: 3rem;
    width: 3rem;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    box-sizing: border-box;

    position: relative;

    box-sizing: border-box;
}

nav a::before {
    content: "";
    position: absolute;
    left: -0.5rem;
    top: 0;
    bottom: 0;
    width: 0.1rem;
    background-color: white;
    display: block;
    transform: scaleY(0);
    transition: transform .3s ease;
}

nav .icon {
    height: 1.5em;
    padding: .5em;
}

nav a:hover,
nav .is-active:hover {
    background-color: var(--sec);
}

nav a:hover::before {
    transform: scaleY(.5);
}

nav .is-active {
    background-color: black;
    border: 2px solid black;
}

nav .is-active::before,
nav .is-active:hover::before {
    transform: scaleY(.9);
}

.navbutton__tooltip {
    position: absolute;
    left: calc(100% + 1rem);
    top: 50%;
    transform: translateY(-50%) translateX(-1rem);
    white-space: nowrap;
    padding: .75rem .5rem;
    background-color: rgba(12,12,12,.95);
    font-size: .75rem;
    opacity: 0;
    user-select: none;
    transition:
        opacity .3s ease,
        transform .3s ease;
    pointer-events: none;
}

nav a:hover .navbutton__tooltip {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
}
</style>
