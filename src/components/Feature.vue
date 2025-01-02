<template>
  <div
    class="list__feature">
    <div>
        <h3>{{data.title}}</h3>
        <p>{{data.desc}}</p>
    </div>
    <div>
        <img :src="III  " v-if="data.isIII === true" />
        <img :src="VC" v-if="data.isVC === true" />
        <img :src="SA" v-if="data.isSA === true" />
        <img :src="IV" v-if="data.isIV === true" />
        <img :src="V" v-if="data.isV === true" />
    </div>
  </div>
</template>

<script>
import III from '../assets/III.svg'
import VC from '../assets/VC.svg'
import SA from '../assets/SA.svg'
import IV from '../assets/IV.svg'
import V from '../assets/V.svg'

export default {
    name: "Feature",
    props: ["data"],
    data() {
        return {
            SA,
            III,
            VC,
            IV,
            V
        }
    }
}
</script>

<style>
.list__feature {
    font-size: 2rem;
    display: inline-block;
    padding: 1rem;
    padding-bottom: .1rem;
    background-color: #222;
    border-bottom: .5rem solid var(--main);
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

@media (min-width: 400px) {
    .list__feature {
        margin-bottom: 0rem;
    }
}

.list__feature h3 {
    font-weight: 500;
}

.list__feature p {
    font-size: 1rem;
}

.list__feature img {
    height: 1.5rem;
    margin-right: .5rem;
}
</style>
