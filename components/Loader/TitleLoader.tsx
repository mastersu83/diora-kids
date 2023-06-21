import React from "react";
import ContentLoader from "react-content-loader";

export const TitleLoader = () => (
  <ContentLoader
    speed={2}
    width={1240}
    height={45}
    viewBox="0 0 1240 45"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    uniqueKey="titleLoader"
  >
    <rect x="0" y="0" rx="0" ry="0" width="1240" height="45" />
  </ContentLoader>
);
