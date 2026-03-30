// import { create } from 'zustand'
// // import { PortalContent } from '@/shared/types/portal'

// interface PortalState {
//   portals: PortalContent[]
//   present: (id: string, Component: React.FC<any>, data?: any, disableCloseByBackdrop?: boolean) => void
//   dismiss: (id: string) => void
//   remove: (id: string) => void
//   closeAll: () => void
// }

// export const usePortalStore = create<PortalState>((set, get) => ({
//   portals: [],

//   present: (id, Component, data, disableCloseByBackdrop = false) => {
//     const portals = get().portals
//     if (portals.some((p) => p.id === id)) return

//     const newPortal: PortalContent = {
//       id,
//       Component,
//       data,
//       disableCloseByBackdrop,
//       isOpen: true,
//     }

//     set({ portals: [...portals, newPortal] })
//   },

//   dismiss: (id) => {
//     set((state) => ({
//       portals: state.portals.map((p) =>
//         p.id === id ? { ...p, isOpen: false } : p
//       ),
//     }))
//   },

//   remove: (id) => {
//     set((state) => ({
//       portals: state.portals.filter((p) => p.id !== id),
//     }))
//   },

//   closeAll: () => {
//     set((state) => ({
//       portals: state.portals.map((p) => ({ ...p, isOpen: false })),
//     }))
//   },
// }))
