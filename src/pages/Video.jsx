import React from "react";
import ReactPlayer from "react-player";

const Video = ({ results }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {results?.map((video, index) => (
        <div key={index} className="p-2">
          <ReactPlayer
            url={video.additional_links?.[0].href}
            controls
            width="300px"
            height="200px"
          />
        </div>
      ))}
    </div>
  );
};

export default Video;
