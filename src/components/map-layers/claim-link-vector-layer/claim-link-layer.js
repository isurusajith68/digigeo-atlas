import { useCallback, useEffect, useRef, useState } from "react";
import { bbox } from "ol/loadingstrategy";
import GeoJSON from "ol/format/GeoJSON";
import { map_tbl_sync_claimlink_VectorLayerStyleFunction } from "./claim-link-style";
import { useLayerVectorClaimLinkLoading } from "@/store/landing-map-slice";
import { useZustand } from "use-zustand";
import { useClaimLinkLayerVisibility } from "@/store/layer-slice";

const ClaimLinkLayer = () => {
  const claimLinkVectorLayerRef = useRef(null);
  const claimLinkSourceRef = useRef(null);
  const [maxResolutionSyncOutlines, setmaxResolutionSyncOutlines] =
    useState(300);

  useEffect(() => {
    claimLinkVectorLayerRef.current?.setOpacity(0.2);
    claimLinkVectorLayerRef.current?.setStyle(
      map_tbl_sync_claimlink_VectorLayerStyleFunction
    );
  }, [claimLinkVectorLayerRef.current]);

  const setVectorClaimLinkLoading = useZustand(
    useLayerVectorClaimLinkLoading,
    (state) => state.setVectorClaimLinkLoading
  );

  const claimLinkLayerVisibility = useZustand(
    useClaimLinkLayerVisibility,
    (state) => state.claimLinkLayerVisibility
  );

  const syncClaimLinkLoaderFunc = useCallback(
    (extent, resolution, projection) => {
      const url =
        `https://atlas.ceyinfo.cloud/matlas/syncclaimlink_byextent` +
        `/${extent.join("/")}`;
      setVectorClaimLinkLoading("loading");
      fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
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
              //console.log("hit claims3")
              claimLinkSourceRef.current.clear();
              claimLinkSourceRef.current.addFeatures(features);

              //console.log("bbsync uni tbl01_claims   features count", features.count);
            }
          }
          setVectorClaimLinkLoading("loaded");
        })
        .catch((error) => {
          console.error("Error:", error);
          setVectorClaimLinkLoading("error");
        });
    },
    []
  );

  //claim link layer visibility
  useEffect(() => {
    if (claimLinkLayerVisibility) {
      claimLinkVectorLayerRef.current.setVisible(true);
    } else {
      claimLinkVectorLayerRef.current.setVisible(false);
    }
  }, [claimLinkLayerVisibility]);

  return (
    <olLayerVector
      ref={claimLinkVectorLayerRef}
      minResolution={0}
      maxResolution={maxResolutionSyncOutlines}
    >
      <olSourceVector
        ref={claimLinkSourceRef}
        strategy={bbox}
        loader={syncClaimLinkLoaderFunc}
        // style={areaMap_tbl_sync_claimlink_VectorLayerStyleFunction}
      ></olSourceVector>
    </olLayerVector>
  );
};
export default ClaimLinkLayer;
