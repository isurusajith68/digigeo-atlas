import {
  useFPropertyLoadingPromise,
  useLayerAssetsLoading,
  useLayerSyncPropLoading,
  useLayerVectorClaimLinkLoading,
  useLayerVectorImageLoading,
} from "@/store/landing-map-slice";
import { useEffect } from "react";

const MapLayerLoadingSpiner = () => {
  const { fPropertyLoadingPromise, setFPropertyLoadingPromise } =
    useFPropertyLoadingPromise();

  const { vectorLayerImageLoading, setVectorLayerImageLoading } =
    useLayerVectorImageLoading();

  const { vectorClaimLinkLoading, setVectorClaimLinkLoading } =
    useLayerVectorClaimLinkLoading();

  const { assetsLayerLoading, setAssetsLayerLoading } = useLayerAssetsLoading();

  const { syncPropLoading, setSyncPropLoading } = useLayerSyncPropLoading();

  useEffect(() => {
    if (
      fPropertyLoadingPromise === "loaded" ||
      fPropertyLoadingPromise === "error"
    ) {
      const timer = setTimeout(() => {
        setFPropertyLoadingPromise(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [fPropertyLoadingPromise]);

  useEffect(() => {
    if (
      vectorLayerImageLoading === "loaded" ||
      vectorLayerImageLoading === "error"
    ) {
      const timer = setTimeout(() => {
        setVectorLayerImageLoading(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [vectorLayerImageLoading]);

  useEffect(() => {
    if (
      vectorClaimLinkLoading === "loaded" ||
      vectorClaimLinkLoading === "error"
    ) {
      const timer = setTimeout(() => {
        setVectorClaimLinkLoading(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [vectorClaimLinkLoading]);

  useEffect(() => {
    if (assetsLayerLoading === "loaded" || assetsLayerLoading === "error") {
      const timer = setTimeout(() => {
        setAssetsLayerLoading(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [assetsLayerLoading]);

  useEffect(() => {
    if (syncPropLoading === "loaded" || syncPropLoading === "error") {
      const timer = setTimeout(() => {
        setSyncPropLoading(null);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [syncPropLoading]);

  return (
    <div>
      {/* <div className="absolute flex flex-col gap-4 top-2 right-2 ">
        <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
          <svg
            className="animate-spin h-5 w-5 mr-3 text-blue-500 dark:text-blue-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <div>Loading Featured Properties...</div>
        </div>
      </div> */}
      {(fPropertyLoadingPromise ||
        vectorLayerImageLoading ||
        vectorClaimLinkLoading) && (
        <div className="absolute flex flex-col gap-4 top-2 right-2 ">
          {fPropertyLoadingPromise === "loaded" && (
            <div className="flex items-center ml-1 z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="h-5 w-5 mr-3 text-green-500 dark:text-green-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Featured Properties loaded</div>
            </div>
          )}
          {fPropertyLoadingPromise === "loading" && (
            <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-blue-500 dark:text-blue-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <div>Loading Featured Properties...</div>
            </div>
          )}
          {fPropertyLoadingPromise === "error" && (
            <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="h-5 w-5 mr-3 text-red-500 dark:text-red-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 00-2 0v6a1 1 0 102 0V5zm0 8a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Error loading properties</div>
            </div>
          )}

          {vectorLayerImageLoading === "loaded" && (
            <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="h-5 w-5 mr-3 text-green-500 dark:text-green-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Vector layer loaded</div>
            </div>
          )}

          {vectorLayerImageLoading === "loading" && (
            <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-blue-500 dark:text-blue-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <div>Loading Vector Layer...</div>
            </div>
          )}
          {vectorLayerImageLoading === "error" && (
            <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="h-5 w-5 mr-3 text-red-500 dark:text-red-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 00-2 0v6a1 1 0 102 0V5zm0 8a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Error loading vector layer </div>
            </div>
          )}

          {vectorClaimLinkLoading === "loaded" && (
            <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="h-5 w-5 mr-3 text-green-500 dark:text-green-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Claim links loaded</div>
            </div>
          )}

          {vectorClaimLinkLoading === "loading" && (
            <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-blue-500 dark:text-blue-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <div>Loading Claim Links...</div>
            </div>
          )}

          {vectorClaimLinkLoading === "error" && (
            <div className="flex  items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="h-5 w-5 mr-3 text-red-500 dark:text-red-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 00-2 0v6a1 1 0 102 0V5zm0 8a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Error loading claim links</div>
            </div>
          )}

          {assetsLayerLoading === "loaded" && (
            <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="h-5 w-5 mr-3 text-green-500 dark:text-green-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Assets loaded</div>
            </div>
          )}

          {assetsLayerLoading === "loading" && (
            <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-blue-500 dark:text-blue-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <div>Loading Assets...</div>
            </div>
          )}

          {assetsLayerLoading === "error" && (
            <div className="flex  items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="h-5 w-5 mr-3 text-red-500 dark:text-red-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 00-2 0v6a1 1 0 102 0V5zm0 8a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Error loading assets</div>
            </div>
          )}

          {syncPropLoading === "loaded" && (
            <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="h-5 w-5 mr-3 text-green-500 dark:text-green-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Sync Properties loaded</div>
            </div>
          )}

          {syncPropLoading === "loading" && (
            <div className="flex items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-blue-500 dark:text-blue-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <div>Loading Sync Properties...</div>
            </div>
          )}

          {syncPropLoading === "error" && (
            <div className="flex  items-center z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2  divide-gray-300 dark:divide-gray-600 cursor-pointer">
              <svg
                className="h-5 w-5 mr-3 text-red-500 dark:text-red-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 00-2 0v6a1 1 0 102 0V5zm0 8a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Error loading sync properties</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapLayerLoadingSpiner;
