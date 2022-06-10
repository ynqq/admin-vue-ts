import { defineStore } from 'pinia'

export interface BaseInter {
    menuCollapse: boolean
}

const useBaseStore = defineStore('base', {
    state() {
        return ({
            menuCollapse: false
        }) as BaseInter
    },
    actions: {
        toggle_menuCollapse() {
            this.menuCollapse = !this.menuCollapse
        }
    }
})

export default useBaseStore