<template>
<main>
  <Download
    :download="download"
  />
  <DownloadNav
    base="/SA/"
  />
  <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
      >
      <router-view></router-view>
  </transition>
  <Footer />
</main>
</template>

<script>
import Download from '../components/Download'
import DownloadNav from '../components/DownloadNav'
import Footer from '../components/Footer'

export default {
    name: "Install",
    components: {
        Download,
        Footer,
        DownloadNav
    },
    data() {
      return {
        download: {
          link: '',
          file: {
            size: '',
            type: '',
          },
          buttonText: "Loading..."
        },
        prevHeight: 0,
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      beforeLeave(element) {
        this.prevHeight = getComputedStyle(element).height
      },
      enter(element) {
        const { height } = getComputedStyle(element)

        element.style.height = this.prevHeight

        setTimeout(() => {
          element.style.height = height
        })
      },
      afterEnter(element) {
        element.style.height = 'auto'
      },
      fetchData() {
        fetch("https://api.github.com/repos/Parik27/SA.Rainbomizer/releases/latest")
          .then(data => data.json())
          .then(data => {
            this.download = {
              link: data.assets[0].browser_download_url,
              file: {
                size: `${Math.floor( +data.assets[0].size / 1024)} KB`,
                type: "ZIP file"
              },
              buttonText: `Download GTA: San Andreas Rainbomizer ${data.tag_name}`
            }
            }).catch(e => {
          this.download.buttonText = "Can't find download link, try again soon"

          console.error("Unable to fetch data!")
          console.log(e)
        })
      }
    },
}
</script>
