import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export const useSideBarStore = create((set) => ({
  isCollapsed: false,
  setIsCollapsed: (isCollapsed) => set({ isCollapsed }),
}));

export const useSelectedMap = create((set) => ({
  selectedMap: "m",
  setSelectedMap: (selectedMap) => set({ selectedMap }),
}));

export const useMapScale = create((set) => ({
  scale: 6892138,
  setScale: (scale) => set({ scale }),
}));

export const useInitialCenter = create((set) => ({
  initialCenter: [0, 0],
  setInitialCenter: (initialCenter) =>
    set({
      initialCenter,
    }),
}));

export const useMapZoom = create((set) => ({
  zoom: 2,
  setZoom: (zoom) => set({ zoom }),
}));

export const useLatLong = create((set) => ({
  long: 0,
  lat: 0,
  setlong: (long) => set({ long }),
  setlat: (lat) => set({ lat }),
}));


