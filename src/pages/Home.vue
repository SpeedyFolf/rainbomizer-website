<template>
    <main>
        <Header />
        <Info />
        <GetIt />
        <Footer />
    </main>
</template>

<script>
import Header from '../components/Header'
import Info from  '../components/Info'
import GetIt from '../components/GetIt'
import Footer from '../components/Footer'

export default {
    name: "Home",
    components: {
        Header,
        Info,
        GetIt,
        Footer
    }
}
</script>

<style>

</style>
