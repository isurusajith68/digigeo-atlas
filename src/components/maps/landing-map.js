"use client";
import {
  useInitialCenter,
  useLatLong,
  useMapScale,
  useMapZoom,
  useSelectedMap,
  useSideBarStore,
} from "../../store/urlParam-slice";
import { Map } from "@react-ol/fiber";
import { useEffect, useCallback, useRef } from "react";
import { UpdateWindowHistoryMainMap } from "@/lib/window-history-update";
import { METERS_PER_UNIT } from "ol/proj/Units";
import { toLonLat } from "ol/proj";
import MapControlPanel from "../map-controllers/map-view-control-panel";
import MapLayerControlPanel from "../map-controllers/map-layer-control-panel";
import MapCoordinatesDisplay from "../map-controllers/map-coordinates-display";
import FPropLayer from "../map-layers/featured-props/f-prop-layer";
import { useState } from "react";
import { useFPropertyFeatures } from "@/store/landing-map-slice";
import AreaBoundaryLayer from "../map-layers/area-boundary/area-boundary-layer";
import MapLayerLoadingSpiner from "../map-controllers/map-layer-loading-toast";

const LandingMap = () => {
  const DOTS_PER_INCH = 72;
  const INCHES_PER_METRE = 39.37;
  const { isCollapsed } = useSideBarStore();
  const { selectedMap } = useSelectedMap();
  const { setScale } = useMapScale();
  const { initialCenter, setInitialCenter } = useInitialCenter();
  const { setlong, setlat } = useLatLong();
  const { zoom, setZoom } = useMapZoom();
  const { fPropertyFeatures, setFPropertyFeatures } = useFPropertyFeatures();

  console.log("fPropertyFeatures", fPropertyFeatures);

  const [fPropRenderCount, setfPropRenderCount] = useState(0);
  // toast("Event has been created.");
  const mapRef = useRef();
  const mapViewRef = useRef();

  function inchesPreUnit(unit) {
    return METERS_PER_UNIT[unit] * INCHES_PER_METRE;
  }

  function mapRatioScale({ map, toRound = true }) {
    const resolution = map.getView().getResolution();
    const unit = map.getView().getProjection().getUnits();

    let scale = resolution * inchesPreUnit(unit) * DOTS_PER_INCH;
    return toRound ? Math.round(scale) : scale;
  }

  useEffect(() => {
    mouseScrollEvent();
  }, []);

  const onViewChange = useCallback((e) => {
    const scale = mapRatioScale({ map: mapRef.current });
    setScale(scale);

    setfPropRenderCount((p) => p + 1);
  }, []);

  const onPointerMove = useCallback(
    (e) => {
      const coordinate1 = mapRef.current.getCoordinateFromPixel(e.pixel);
      const c = toLonLat(coordinate1);

      setlong(c[0].toFixed(4));
      setlat(c[1].toFixed(4));
    },
    [setlat, setlong]
  );

  const mouseScrollEvent = useCallback((event) => {
    const map = mapRef.current;

    const handleMoveEnd = () => {
      const tmpZoomLevel = map.getView().getZoom();
      const tmpinitialCenter = map.getView().getCenter();

      setZoom(tmpZoomLevel);
      setInitialCenter(tmpinitialCenter);
    };

    map.on("moveend", handleMoveEnd);

    return () => {
      map?.un("moveend", handleMoveEnd);
    };
  }, []);

  useEffect(() => {
    UpdateWindowHistoryMainMap({
      isSidebarCollapsed: isCollapsed,
      selectedMap,
      initialCenter: initialCenter,
      zoom: zoom,
    });
  }, [initialCenter, isCollapsed, selectedMap, zoom]);

  // console.log("fPropertyFeatures", fPropertyFeatures);
  // console.log("fPropRenderCount", fPropRenderCount);

  return (
    <div className="relative">
      <MapControlPanel mapRef={mapRef} mapViewRef={mapViewRef} />
      <MapLayerControlPanel />
      <MapCoordinatesDisplay />
      <MapLayerLoadingSpiner />
      <div>
        <Map
          onPointermove={onPointerMove}
          ref={mapRef}
          style={{ height: "calc(100dvh - 64px)" }}
        >
          <olView
            onchange={onViewChange}
            initialCenter={[0, 0]}
            center={initialCenter}
            initialZoom={2}
            ref={mapViewRef}
            zoom={zoom}
          />
          <olLayerTile preload={Infinity}>
            <olSourceXYZ
              args={{
                url: `https://mt0.google.com/vt/lyrs=${selectedMap}&hl=en&x={x}&y={y}&z={z}`,
              }}
            ></olSourceXYZ>
          </olLayerTile>
          <AreaBoundaryLayer />
          <FPropLayer
            mapRef={mapRef}
            fPropRenderCount={fPropRenderCount}
            setfPropRenderCount={setfPropRenderCount}
          />
        </Map>
      </div>
    </div>
  );
};

export default LandingMap;
