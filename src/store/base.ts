import { defineStore } from 'pinia'

export interface BaseInter {
    menuCollapse: boolean
}

const useBaseStore = defineStore('base', {
    state(): BaseInter {
        return {
            menuCollapse: false
        }
    },
    actions: {
        toggle_menuCollapse() {
            this.menuCollapse = !this.menuCollapse
        }
    }
})

export default useBaseStore