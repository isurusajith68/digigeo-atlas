export const UpdateWindowHistoryMainMap = ({
  isSidebarCollapsed,
  selectedMap,
  initialCenter,
  zoom,
}) => {
  const newUrl = `${
    window.location.pathname
  }?lyrs=${selectedMap}&snc=${isSidebarCollapsed}&c=${
    initialCenter && initialCenter[0]
  },${initialCenter && initialCenter[1]}&z=${zoom}`;

  window.history.replaceState({}, "", newUrl);
};
