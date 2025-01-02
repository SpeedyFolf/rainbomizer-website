<template>
    <div class="download__nav">
        <DownloadNavButton
            :to="installPath"
            text="Installation"
        />
        <DownloadNavButton
            :to="ConfigurationPath"
            text="Configuration"
        />
    </div>
</template>

<script>
import DownloadNavButton from './DownloadNavButton'

export default {
    name: "DownloadNav",
    components: {
        DownloadNavButton
    },
    props: ["base"],
    data() {
        return {
            installPath: this.base + "Install",
            ConfigurationPath: this.base + "Configuration"
        }
    },
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
.download__nav {
    text-align: center;
    padding: 1rem;
}
</style>
