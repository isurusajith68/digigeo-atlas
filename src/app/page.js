"use client";

import LandingMap from "@/components/maps/landing-map";
import {
  useFPropertyFeatures,
  useInitialCenter,
  useMapZoom,
  useSelectedMap,
  useSideBarStore,
} from "@/store/urlParam-slice";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function Home() {
  const { setIsCollapsed, isCollapsed } = useSideBarStore();
  const { setSelectedMap } = useSelectedMap();
  const { setZoom } = useMapZoom();
  const { setInitialCenter } = useInitialCenter();
  const searchParams = useSearchParams();

  const mapType = searchParams.get("lyrs");
  const isSidebarCollapsed = searchParams.get("snc");
  const initialCenter = searchParams.get("c");
  const zoom = searchParams.get("z");

  useEffect(() => {
    if (mapType) {
      setSelectedMap(mapType);
    }
    if (isSidebarCollapsed === true || isSidebarCollapsed === "true") {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
    if (initialCenter) {
      const [long, lat] = initialCenter.split(",");
      setInitialCenter([Number(long), Number(lat)]);
    }
    if (zoom) {
      setZoom(zoom);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "calc(100dvh - 64px)",
        minWidth: isCollapsed ? "99.9vw" : "calc(100vw - 260px)",
      }}
    >
      <LandingMap />
    </div>
  );
}
