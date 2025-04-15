import { create } from 'zustand'

type MobileResponsive = {
    IsDesktop: boolean
    setIsDesktop: (param: boolean) => void
}

const useStore = create<MobileResponsive>((set) => ({
    IsDesktop: true,
    setIsDesktop: (newValue: boolean) => set({ IsDesktop: newValue }),
}))

export default useStore
