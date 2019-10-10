import Vue from 'vue'
import Router from 'vue-router'
import ScriptTable from "@/components/ScriptTable"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'ScriptTable',
            component: ScriptTable
        }
    ]
})