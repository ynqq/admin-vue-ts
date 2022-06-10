import { useDark, useToggle } from "@vueuse/core"

export const useTheme = (toggleStorage?: boolean): void => {
    const result = useToggle(useDark())()
    if (!toggleStorage) return
    if (result) {
        localStorage.TestTheme = 'dark'
    } else {
        localStorage.TestTheme = ''
    }
}