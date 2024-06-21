import {
  useInitialCenter,
  useLatLong,
  useMapScale,
} from "@/store/urlParam-slice";

function MapCoordinatesDisplay() {
  const { scale } = useMapScale();
  const { long, lat } = useLatLong();
  return (
    <div className="absolute flex bottom-2 right-2 z-10 bg-background text-foreground rounded-lg p-2 divide-x  cursor-pointer">
      <div className=" text-center p-1 text-xs font-semibold text-primary">
        Scale:
        <span className="text-xs  ml-1">{scale}</span>
      </div>
      <div className=" text-center p-1 text-xs font-semibold text-primary">
        Lat:
        <span className="text-xs  ml-1">{lat === 0 ? "0.0000" : lat}</span>
      </div>
      <div className=" text-center p-1 text-xs font-semibold text-primary">
        Long:
        <span className="text-xs  ml-1 text-primary">
          {long === 0 ? "0.0000" : long}
        </span>
      </div>
    </div>
  );
}
export default MapCoordinatesDisplay;
