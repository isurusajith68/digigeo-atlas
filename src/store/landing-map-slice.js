import { create } from "zustand";

export const useFPropertyFeatures = create((set) => ({
  fPropertyFeatures: [],
  setFPropertyFeatures: (fPropertyFeatures) => set({ fPropertyFeatures }),
}));

export const useFPropertyLoadingPromise = create((set) => ({
  fPropertyLoadingPromise: "not-loaded",
  setFPropertyLoadingPromise: (fPropertyLoadingPromise) =>
    set({ fPropertyLoadingPromise }),
}));

export const useLayerVectorImageLoading = create((set) => ({
  vectorLayerImageLoading: "pending",
  setVectorLayerImageLoading: (vectorLayerImageLoading) =>
    set({ vectorLayerImageLoading }),
}));

export const useLayerVectorClaimLinkLoading = create((set) => ({
  vectorClaimLinkLoading: "pending",
  setVectorClaimLinkLoading: (vectorClaimLinkLoading) =>
    set({ vectorClaimLinkLoading }),
}));

export const useLayerAssetsLoading = create((set) => ({
  assetsLayerLoading: "pending",
  setAssetsLayerLoading: (assetsLayerLoading) => set({ assetsLayerLoading }),
}));

export const useLayerSyncPropLoading = create((set) => ({
  syncPropLoading: "pending",
  setSyncPropLoading: (syncPropLoading) => set({ syncPropLoading }),
}));
