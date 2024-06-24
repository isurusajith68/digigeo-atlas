import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  useAssetsLayerVisibility,
  useClaimLinkLayerVisibility,
  useClaimVectorLayerVisibility,
  useFeaturedLayerLableVisibility,
  useFeaturedLayerVisibility,
  usetoggeleLegend,
} from "@/store/layer-slice";
import {
  ChevronsDown,
  ChevronsRight,
  Eye,
  EyeOffIcon,
  Layers,
  Layers3,
} from "lucide-react";
import { useEffect, useState } from "react";

const Legend = () => {
  const { toggleLegendOpen, setToggleLegend } = usetoggeleLegend();
  const { featuredLayerVisibility, setFeaturedLayerVisibility } =
    useFeaturedLayerVisibility();

  const { featuredLayerLableVisibility, setFeaturedLayerLableVisibility } =
    useFeaturedLayerLableVisibility();

  const { claimVectorLayerVisibility, setClaimVectorLayerVisibility } =
    useClaimVectorLayerVisibility();

  const { claimLinkLayerVisibility, setClaimLinkLayerVisibility } =
    useClaimLinkLayerVisibility();

  const { assetsLayerVisibility, setAssetsLayerVisibility } =
    useAssetsLayerVisibility();

  const [featuredPropLayerToggle, setFeaturedPropLayerToggle] = useState(false);

  useEffect(() => {
    setFeaturedLayerLableVisibility(featuredLayerVisibility);
  }, [featuredLayerVisibility]);

  return (
    <div>
      <div
        className={cn(
          buttonVariants({
            variant: "primary",
            size: "sm",
          }),

          "justify-start w-full cursor-pointer"
        )}
        onClick={() => setToggleLegend(!toggleLegendOpen)}
      >
        <Layers3 className="h-6 w-6 mr-6" />
        <span>Legend</span>
        {toggleLegendOpen ? (
          <ChevronsDown
            onClick={() => setToggleLegend(!toggleLegendOpen)}
            className="h-6 w-6 ml-6 cursor-pointer "
          />
        ) : (
          <ChevronsRight
            onClick={() => setToggleLegend(!toggleLegendOpen)}
            className="h-6 w-6 ml-6 cursor-pointer"
          />
        )}
      </div>

      {/* 
            Tree view 
      */}

      <div className=" px-5 py-2 gap-2 flex flex-col">
        <div className="flex justify-between items-center  gap-3">
          <div className="flex gap-2 items-center">
            <Layers className="h-4 w-4 " />
            <span className="text-sm"> F Propety Layer</span>
          </div>
          <div className="flex gap-2 items-center">
            {featuredLayerVisibility ? (
              <Eye
                onClick={() =>
                  setFeaturedLayerVisibility(!featuredLayerVisibility)
                }
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <EyeOffIcon
                onClick={() =>
                  setFeaturedLayerVisibility(!featuredLayerVisibility)
                }
                className="h-4 w-4 cursor-pointer text-gray-400"
              />
            )}
            {featuredPropLayerToggle ? (
              <ChevronsDown
                onClick={() =>
                  setFeaturedPropLayerToggle(!featuredPropLayerToggle)
                }
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <ChevronsRight
                onClick={() =>
                  setFeaturedPropLayerToggle(!featuredPropLayerToggle)
                }
                className="h-4 w-4 cursor-pointer"
              />
            )}
          </div>
        </div>

        {featuredPropLayerToggle && (
          <div className="ml-5 py-2">
            <div className="flex flex-col gap-1 ">
              <div className="flex gap-2 justify-between">
                <span className="text-xs  text-white px-2 py-1 rounded">
                  Featured Property Labels
                </span>
                <div className=" text-white  rounded p-1">
                  {featuredLayerLableVisibility ? (
                    <Eye
                      onClick={() =>
                        setFeaturedLayerLableVisibility(
                          !featuredLayerLableVisibility
                        )
                      }
                      className="h-4 w-4 cursor-pointer"
                    />
                  ) : (
                    <EyeOffIcon
                      onClick={() =>
                        setFeaturedLayerLableVisibility(
                          !featuredLayerLableVisibility
                        )
                      }
                      className="h-4 w-4 cursor-pointer text-gray-400"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-between items-center  gap-3">
          <div className="flex gap-2 items-center">
            <Layers className="h-4 w-4 " />
            <span className="text-sm"> Claim Link Layer</span>
          </div>
          <div className="flex gap-2 items-center">
            {claimLinkLayerVisibility ? (
              <Eye
                onClick={() =>
                  setClaimLinkLayerVisibility(!claimLinkLayerVisibility)
                }
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <EyeOffIcon
                onClick={() =>
                  setClaimLinkLayerVisibility(!claimLinkLayerVisibility)
                }
                className="h-4 w-4 cursor-pointer text-gray-400"
              />
            )}

            <ChevronsRight className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between items-center  gap-3">
          <div className="flex gap-2 items-center">
            <Layers className="h-4 w-4 " />
            <span className="text-sm"> Assets Layer</span>
          </div>
          <div className="flex gap-2 items-center">
            {assetsLayerVisibility ? (
              <Eye
                onClick={() => setAssetsLayerVisibility(!assetsLayerVisibility)}
                className="h-4 w-4 cursor-pointer"
              />
            ) : (
              <EyeOffIcon
                onClick={() => setAssetsLayerVisibility(!assetsLayerVisibility)}
                className="h-4 w-4 cursor-pointer text-gray-400"
              />
            )}

            <ChevronsRight className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between items-center  gap-3">
          <div className="flex gap-2 items-center">
            <Layers className="h-4 w-4 " />
            <span className="text-sm">Claim Vector Layer</span>
          </div>
          <div className="flex gap-2 items-center">
            {claimVectorLayerVisibility ? (
              <Eye
                className="h-4 w-4 cursor-pointer"
                onClick={() =>
                  setClaimVectorLayerVisibility(!claimVectorLayerVisibility)
                }
              />
            ) : (
              <EyeOffIcon
                onClick={() =>
                  setClaimVectorLayerVisibility(!claimVectorLayerVisibility)
                }
                className="h-4 w-4 cursor-pointer text-gray-400"
              />
            )}

            <ChevronsRight className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Legend;
