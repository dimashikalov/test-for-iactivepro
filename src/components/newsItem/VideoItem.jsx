import React from "react";

export const VideoItem = ({ url }) => {
  return (
    <video style={{ width: "100%", height: "100%" }} controls>
      <source src={url} type="video/mp4" />
    </video>
  );
};
