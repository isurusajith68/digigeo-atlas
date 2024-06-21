import { useMediaQuery } from "@/hooks/use-media-query";
import { useSelectedMap } from "@/store/urlParam-slice";
import { useEffect, useState } from "react";
function MapLayerControlPanel() {
  const { setSelectedMap, selectedMap } = useSelectedMap();

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
    <>
      {isDesktop ? (
        <div className="absolute flex bottom-2 left-2 z-10 bg-background text-foreground  rounded-lg p-2 divide-x  cursor-pointer">
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
      ) : null}
    </>
  );
}
export default MapLayerControlPanel;
