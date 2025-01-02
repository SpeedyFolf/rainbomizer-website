import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'

import SetUp from '../components/SetUp'
import Config from '../components/Config'

import III from '../pages/III'
import VC from '../pages/VC'
import SA from '../pages/SA'
import VCS from '../pages/VCS'
import LCS from '../pages/LCS'
import IV from '../pages/IV'
import V from '../pages/V'

import IIISteps from '../data/III/install.json'
import IIIConfig from '../data/III/config.json'

import VCSteps from '../data/VC/install.json'
import VCConfig from '../data/VC/config.json'

import SASteps from '../data/SA/install.json'
import SAConfig from '../data/SA/config.json'

import VCSSteps from '../data/VCS/install.json'
import VCSConfig from '../data/VCS/config.json'

import LCSSteps from '../data/LCS/install.json'
import LCSConfig from '../data/LCS/config.json'

import IVSteps from '../data/IV/install.json'
import IVConfig from '../data/IV/config.json'

import VSteps from '../data/V/install.json'
import VConfig from '../data/V/config.json'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/III",
        component: III,
        children: [
            {
                path: "",
                redirect: "Install"
            },
            {
                path: "Install",
                component: SetUp,
                props: {steps: IIISteps}
            },
            {
                path: "Configuration",
                component: Config,
                props: {steps: IIIConfig}
            }
        ]
    },
    {
        path: "/VC",
        component: VC,
        children: [
            {
                path: "",
                redirect: "Install"
            },
            {
                path: "Install",
                component: SetUp,
                props: {steps: VCSteps}
            },
            {
                path: "Configuration",
                component: Config,
                props: {steps: VCConfig}
            }
        ]
    },
    {
        path: "/SA",
        component: SA,
        children: [
            {
                path: "",
                redirect: "Install"
            },
            {
                path: "Install",
                component: SetUp,
                props: {steps: SASteps}
            },
            {
                path: "Configuration",
                component: Config,
                props: {steps: SAConfig}
            }
        ]
    },
    {
        path: "/VCS",
        component: VCS,
        children: [
            {
                path: "",
                redirect: "Install"
            },
            {
                path: "Install",
                component: SetUp,
                props: {steps: VCSSteps}
            },
            {
                path: "Configuration",
                component: Config,
                props: {steps: VCSConfig}
            }
        ]
    },
    {
        path: "/LCS",
        component: LCS,
        children: [
            {
                path: "",
                redirect: "Install"
            },
            {
                path: "Install",
                component: SetUp,
                props: {steps: LCSSteps}
            },
            {
                path: "Configuration",
                component: Config,
                props: {steps: LCSConfig}
            }
        ]
    },
    {
        path: "/IV",
        component: IV,
        children: [
            {
                path: "",
                redirect: "Install"
            },
            {
                path: "Install",
                component: SetUp,
                props: {steps: IVSteps}
            },
            {
                path: "Configuration",
                component: Config,
                props: {steps: IVConfig}
            }
        ]
    },
    {
        path: "/V",
        component: V,
        children: [
            {
                path: "",
                redirect: "Install"
            },
            {
                path: "Install",
                component: SetUp,
                props: {steps: VSteps}
            },
            {
                path: "Configuration",
                component: Config,
                props: {steps: VConfig}
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: "/rainbomizer/",
    routes,
    scrollBehavior() {
      document.getElementById('app').scrollIntoView()
    }
})

export default router
