"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { areaMapAssetVectorLayerStyleFunction } from "./assets-layer-style";
import { bbox } from "ol/loadingstrategy";
import GeoJSON from "ol/format/GeoJSON";
import { useZustand } from "use-zustand";
import { useLayerAssetsLoading } from "@/store/landing-map-slice";
import { useAssetsLayerVisibility } from "@/store/layer-slice";
const AssetsLayer = () => {
  const assetLayerRef = useRef(null);
  const assetSourceRef = useRef(null);
  const [maxResolutionAssets, setmaxResolutionAssets] = useState(300);

  const setAssetsLayerLoading = useZustand(
    useLayerAssetsLoading,
    (state) => state.setAssetsLayerLoading
  );

  const assetsLayerVisibility = useZustand(
    useAssetsLayerVisibility,
    (state) => state.assetsLayerVisibility
  );

  const assetLoaderFunc = useCallback((extent, resolution, projection) => {
    const url =
      `https://atlas.ceyinfo.cloud/matlas/assets_byextent` +
      `/${extent.join("/")}`;
    setAssetsLayerLoading("loading");
    fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.data) {
          if (json.data[0].json_build_object.features) {
            const features = new GeoJSON().readFeatures(
              json.data[0].json_build_object
            );

            assetSourceRef.current.clear();
            assetSourceRef.current.addFeatures(features);
          }
        }
        setAssetsLayerLoading("loaded");
      })
      .catch((error) => {
        setAssetsLayerLoading("error");
      });
  }, []);

  useEffect(() => {
    if (assetsLayerVisibility) {
      assetLayerRef.current?.setVisible(true);
    } else {
      assetLayerRef.current?.setVisible(false);
    }
  }, [assetsLayerVisibility]);
  return (
    <olLayerVector
      ref={assetLayerRef}
      style={areaMapAssetVectorLayerStyleFunction}
      minResolution={0}
      maxResolution={maxResolutionAssets}
    >
      <olSourceVector
        ref={assetSourceRef}
        loader={assetLoaderFunc}
        strategy={bbox}
      ></olSourceVector>
    </olLayerVector>
  );
};
export default AssetsLayer;
