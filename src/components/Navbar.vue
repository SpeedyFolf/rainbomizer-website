<template>
  <nav>
      <div class="nav-container">
            <NavButton
                :img="Home"
                to="/"
                text="Home Page"
            />
            <hr />
            <NavButton
                :img="III"
                to="/III"
                text="GTA III"
            />
            <NavButton
                :img="VC"
                to="/VC"
                text="GTA: Vice City"
            />
            <NavButton
                :img="SA"
                to="/SA"
                text="GTA: San Andreas"
            />
            <NavButton
                :img="VCS"
                to="/VCS"
                text="GTA: Vice City Stories"
            />
            <NavButton
                :img="LCS"
                to="/LCS"
                text="GTA: Liberty City Stories"
            />
            <NavButton
                :img="IV"
                to="/IV"
                text="GTA IV/Episodes from Liberty City"
            />
            <NavButton
                :img="V"
                to="/V"
                text="GTA V"
            />
      </div>
  </nav>
</template>

<script>
import NavButton from './NavButton'

import Home from '../assets/Home.svg'

import III from '../assets/III.svg'
import VC from '../assets/VC.svg'
import SA from '../assets/SA.svg'
import VCS from '../assets/gtavcs.png'
import LCS from '../assets/gtalcs.png'
import IV from '../assets/IV.svg'
import V from '../assets/V.svg'

export default {
    name: "Navbar",
    components: {
        NavButton
    },
    created() {
        window.addEventListener("scroll", this.handleScroll)
    },
    data() {
        return {
            III,
            VC,
            SA,
            VCS,
            LCS,
            IV,
            V,
            Home,
        }
    },
    computed: {
        currPage() {
            return this.$route.path
        }
    }
}
</script>

<style>
    nav {
        position: relative;
        background-color: var(--nav);
        z-index: 2;
    }

    .nav-container {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding: .5rem 0;
    }

    hr {
        background-color: white;
        opacity: .5;
        width: 50%;
        margin: .25rem 0;
    }
</style>
