"use client";
import { bbox, bbox as bboxStrategy } from "ol/loadingstrategy";
import GeoJSON from "ol/format/GeoJSON";

import { useCallback, useEffect, useRef, useState } from "react";
import { useZustand } from "use-zustand";
import {
  useFPropertyFeatures,
  useFPropertyLoadingPromise,
} from "@/store/landing-map-slice";
import {
  Circle as CircleStyle,
  Fill,
  Stroke,
  Style,
  Icon,
  Circle,
  Text,
} from "ol/style";

import {
  fPropertyVectorRendererFunc,
  fPropertyVectorRendererFunc_labels,
} from "./fprop-styles";
import { toast } from "sonner";

const FPropLayer = ({ mapRef, setfPropRenderCount, fPropRenderCount }) => {
  const fPropVectorLayerRef = useRef(null);
  const fPropSourceRef = useRef(null);
  const fPropSourceLabelRef = useRef(null);
  const fPropVectorLayerLabelRef = useRef(null);
  const [maxResolutionFProp, setmaxResolutionFProp] = useState(300);

  // const { fPropertyFeatures, setFPropertyFeatures } = useFPropertyFeatures();

  const setFPropertyFeatures = useZustand(
    useFPropertyFeatures,
    (state) => state.setFPropertyFeatures
  );

  useEffect(() => {
    const style = new Style({});
    style.setRenderer(fPropertyVectorRendererFunc);

    fPropVectorLayerRef.current?.setStyle(style);

    // fPropVectorLayerRef?.current
    //   ?.getSource()

    fPropSourceRef.current.on("addfeature", function (event) {
      const feature = event.feature;
      const svgtext2 = feature.get("hatch");
      const img = new Image();

      img.onload = function () {
        feature.set("hatchimg", img);
      };

      img.src = "data:image/svg+xml;utf8," + encodeURIComponent(svgtext2);
    });
  }, [fPropVectorLayerRef.current]);

  useEffect(() => {
    const style = new Style({});
    style.setRenderer(fPropertyVectorRendererFunc_labels);

    fPropVectorLayerLabelRef.current?.setStyle(style);
  }, [fPropVectorLayerRef.current]);

  const fPropLoaderFunc = useCallback((extent, resolution, projection) => {
    console.log("fprop-loading");
    setFPropertyFeatures();
    const url =
      `https://atlas.ceyinfo.cloud/matlas/fprops_byextent` +
      `/${extent.join("/")}`;
    const loadingToastId = toast.loading("Loading properties...");
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

            fPropSourceRef?.current?.clear();
            fPropSourceLabelRef?.current?.clear();
            fPropSourceRef?.current?.addFeatures(features);
            fPropSourceLabelRef?.current?.addFeatures(features);
            //setfPropRenderCount((p) => p + 1);

            toast.message("Properties loaded", "success", loadingToastId);
            setFPropertyFeatures();
          }
        }
      });
  }, []);

  useEffect(() => {
    if (fPropVectorLayerRef?.current?.isVisible()) {
      const vf = fPropSourceRef.current.getFeaturesInExtent(
        mapRef.current.getView().calculateExtent()
      );
      const vfObjs = vf?.map((f) => {
        return {
          id: f.get("id"),
          companyid: f.get("companyid"),
          colour: f.get("colour"),
          company2: f.get("company2"),
          map_area: f.get("map_area"),
        };
      });

      setFPropertyFeatures(vfObjs);

      // if (vfObjs?.length > 0 && !isTabletOrMobile) {
      //   dispatch(setIsLandingMapSideNavOpen(true));
      // } else {
      //   dispatch(setIsLandingMapSideNavOpen(false));
      // }
    }
    // else {
    //   dispatch(setIsLandingMapSideNavOpen(false));
    // }
  }, [fPropRenderCount]);

  return (
    <>
      <olLayerVector
        ref={fPropVectorLayerRef}
        minResolution={0}
        maxResolution={maxResolutionFProp}
      >
        <olSourceVector
          ref={fPropSourceRef}
          strategy={bbox}
          loader={fPropLoaderFunc}
        ></olSourceVector>
      </olLayerVector>
      <olLayerVector ref={fPropVectorLayerLabelRef}>
        <olSourceVector ref={fPropSourceLabelRef}></olSourceVector>
      </olLayerVector>
    </>
  );
};
export default FPropLayer;
