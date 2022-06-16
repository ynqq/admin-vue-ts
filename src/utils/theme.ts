import { useDark, useToggle, usePreferredDark } from "@vueuse/core"
import { WritableComputedRef } from "vue";

export interface UseThemeInter {
    isDark: WritableComputedRef<boolean>,
    toggleDark: () => void
}


export const useTheme = (): UseThemeInter => {

    const isDark = useDark({
        storageKey: 'TestTheme'
    })

    const toggleDark = useToggle(isDark)

    return {
        isDark,
        toggleDark
    }
}