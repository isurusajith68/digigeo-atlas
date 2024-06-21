const MapLayerLoadingSpiner = () => {
  return (
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
      <div className="flex items-center ml-3">
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
  );
};

export default MapLayerLoadingSpiner;
