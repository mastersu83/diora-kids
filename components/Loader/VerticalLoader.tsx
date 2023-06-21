import React from "react";
import ContentLoader from "react-content-loader";

export const VerticalLoader = () => (
  <ContentLoader
    speed={2}
    width={295}
    height={444}
    viewBox="0 0 295 444"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    uniqueKey="horizontalLoader"
  >
    <rect x="0" y="0" rx="0" ry="0" width="295" height="444" />
  </ContentLoader>
);
