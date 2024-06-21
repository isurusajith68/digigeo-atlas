import { useMediaQuery } from "@/hooks/use-media-query";
import {
  useMapScale,
  useSelectedMap,
  useSideBarStore,
} from "@/store/urlParam-slice";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Layers2,
  Minus,
  Plus,
} from "lucide-react";
import { METERS_PER_UNIT } from "ol/proj/Units";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const MapControlPanel = ({ mapRef, mapViewRef }) => {
  const { setIsCollapsed, isCollapsed } = useSideBarStore();
  const { setScale } = useMapScale();
  const { setSelectedMap, selectedMap } = useSelectedMap();
  const DOTS_PER_INCH = 72;
  const INCHES_PER_METRE = 39.37;

  function inchesPreUnit(unit) {
    return METERS_PER_UNIT[unit] * INCHES_PER_METRE;
  }

  function mapRatioScale({ map, toRound = true }) {
    const resolution = map.getView().getResolution();
    const unit = map.getView().getProjection().getUnits();

    let scale = resolution * inchesPreUnit(unit) * DOTS_PER_INCH;
    return toRound ? Math.round(scale) : scale;
  }

  const onClickZoomIN = () => {
    const curZoom = mapViewRef.current.getZoom();
    mapViewRef.current.setZoom(curZoom + 1);

    const scale = mapRatioScale({ map: mapRef.current });
    setScale(scale);
  };

  const onClickZoomOut = () => {
    const curZoom = mapViewRef.current.getZoom();
    mapViewRef.current.setZoom(curZoom - 1);

    const scale = mapRatioScale({ map: mapRef.current });
    setScale(scale);
  };

  const onClickInitialCenter = () => {
    mapViewRef.current.setCenter([0, 0]);
    mapViewRef.current.setZoom(2);

    const scale = mapRatioScale({ map: mapRef.current });
    setScale(scale);
  };

  const [isDesktop, setIsDesktop] = useState(false);

  const isDes = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDes) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [isDes]);

  return (
    <div className="absolute top-2 left-2 z-10 flex flex-col gap-3 bg-background text-foreground  p-2 rounded-lg">
      {isCollapsed ? (
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="bg-zinc-950 dark:bg-white text p-2 inline-block rounded-full cursor-pointer"
              >
                <ChevronRight
                  className="dark:text-zinc-950 text-white"
                  size={16}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="flex items-center gap-4 text-sm ml-4 bg-background text-foreground p-2 rounded-lg"
            >
              Expand
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="bg-zinc-950 dark:bg-white text p-2 inline-block rounded-full cursor-pointer"
              >
                <ChevronLeft
                  className="dark:text-zinc-950 text-white"
                  size={16}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="flex items-center gap-4 text-sm ml-4 bg-background text-foreground p-2 rounded-lg"
            >
              Collapse
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <div
              onClick={onClickZoomIN}
              className="bg-zinc-950 dark:bg-white text p-2 inline-block rounded-full cursor-pointer"
            >
              <Plus className="dark:text-zinc-950 text-white" size={16} />
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className="flex items-center gap-4 text-sm ml-4 bg-background text-foreground p-2 rounded-lg"
          >
            Zoom In
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <div
              onClick={onClickZoomOut}
              className="bg-zinc-950 dark:bg-white text p-2 inline-block rounded-full cursor-pointer"
            >
              <Minus className="dark:text-zinc-950 text-white" size={16} />
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className="flex items-center gap-4 text-sm ml-4 bg-background text-foreground p-2 rounded-lg"
          >
            Zoom Out
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <div
              onClick={onClickInitialCenter}
              className="bg-zinc-950 dark:bg-white text p-2 inline-block rounded-full cursor-pointer"
            >
              <Globe className="dark:text-zinc-950 text-white" size={16} />
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className="flex items-center gap-4 text-sm ml-4 bg-background text-foreground p-2 rounded-lg"
          >
            Center
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {!isDesktop ? (
        <Popover>
          <PopoverTrigger>
            <div
              className="bg-zinc-950 dark:bg-white text p-2 inline-block rounded-full cursor-pointer"
              onClick={onClickInitialCenter}
            >
              <Layers2 className="dark:text-zinc-950 text-white" size={16} />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className=" flex  z-10 bg-background text-foreground  rounded-lg p-2 divide-x  cursor-pointer">
              <div
                className={
                  selectedMap === "m"
                    ? "w-16 text-center  rounded-lg  p-1 font-semibold dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:text-white bg-primary text-white"
                    : "w-16 text-center p-1"
                }
                onClick={() => {
                  setSelectedMap("m");
                }}
              >
                Map
              </div>
              <div
                className={
                  selectedMap === "s"
                    ? "w-16 text-center  rounded-lg  p-1 font-semibold dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:text-white bg-primary text-white"
                    : "w-16 text-center p-1"
                }
                onClick={() => {
                  setSelectedMap("s");
                }}
              >
                Satellite
              </div>
              <div
                className={
                  selectedMap === "p"
                    ? "w-16 text-center  rounded-lg  p-1 font-semibold dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:text-white bg-primary text-white"
                    : "w-16 text-center p-1"
                }
                onClick={() => {
                  setSelectedMap("p");
                }}
              >
                Terrain
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ) : null}
    </div>
  );
};
export default MapControlPanel;
