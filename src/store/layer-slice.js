import { create } from "zustand";

export const usetoggeleLegend = create((set) => ({
  toggleLegendOpen: false,
  setToggleLegend: (toggleLegendOpen) => set({ toggleLegendOpen }),
}));

export const useFeaturedLayerVisibility = create((set) => ({
  featuredLayerVisibility: false,
  setFeaturedLayerVisibility: (featuredLayerVisibility) =>
    set({ featuredLayerVisibility }),
}));

export const useFeaturedLayerLableVisibility = create((set) => ({
  featuredLayerLableVisibility: false,
  setFeaturedLayerLableVisibility: (featuredLayerLableVisibility) =>
    set({ featuredLayerLableVisibility }),
}));

export const useSyncLayerVisibility = create((set) => ({
  syncLayerVisibility: false,
  setSyncLayerVisibility: (syncLayerVisibility) => set({ syncLayerVisibility }),
}));

export const useClaimLinkLayerVisibility = create((set) => ({
  claimLinkLayerVisibility: false,
  setClaimLinkLayerVisibility: (claimLinkLayerVisibility) =>
    set({ claimLinkLayerVisibility }),
}));

export const useAssetsLayerVisibility = create((set) => ({
  assetsLayerVisibility: false,
  setAssetsLayerVisibility: (assetsLayerVisibility) =>
    set({ assetsLayerVisibility }),
}));

export const useClaimVectorLayerVisibility = create((set) => ({
  claimVectorLayerVisibility: false,
  setClaimVectorLayerVisibility: (claimVectorLayerVisibility) =>
    set({ claimVectorLayerVisibility }),
}));
