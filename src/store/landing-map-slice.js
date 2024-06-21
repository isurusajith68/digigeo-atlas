import { create } from "zustand";

export const useFPropertyFeatures = create((set) => ({
  fPropertyFeatures: [],
  setFPropertyFeatures: (fPropertyFeatures) => set({ fPropertyFeatures }),
}));

export const useFPropertyLoadingPromise = create((set) => ({
  fPropertyLoadingPromise: null,
  setFPropertyLoadingPromise: (fPropertyLoadingPromise) =>
    set({ fPropertyLoadingPromise }),
}));
