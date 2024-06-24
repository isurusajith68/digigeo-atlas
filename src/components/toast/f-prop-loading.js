import { useFPropertyLoadingPromise } from "@/store/landing-map-slice";

const FPropLoading = () => {
  const { fPropertyLoadingPromise, setFPropertyLoadingPromise } =
    useFPropertyLoadingPromise();

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
  return (
    <>
      {" "}
      {fPropertyLoadingPromise === "loaded" && (
        <div className="absolute flex top-2 right-2 z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2 divide-x divide-gray-300 dark:divide-gray-600 cursor-pointer">
          <div className="flex items-center ml-1">
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
            <div>Properties loaded</div>
          </div>
        </div>
      )}
      {fPropertyLoadingPromise === "loading" && (
        <div className="absolute flex top-2 right-2 z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2 divide-x divide-gray-300 dark:divide-gray-600 cursor-pointer">
          <div className="flex items-center">
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
        </div>
      )}
      {fPropertyLoadingPromise === "error" && (
        <div className="absolute flex top-2 right-2 z-10 bg-background text-foreground dark:text-white rounded-lg px-4 py-2 divide-x divide-gray-300 dark:divide-gray-600 cursor-pointer">
          <div className="flex items-center">
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
        </div>
      )}
    </>
  );
};
export default FPropLoading;
