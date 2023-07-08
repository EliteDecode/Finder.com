import React from "react";
import ReactPlayer from "react-player";

const Video = ({ results }) => {
  return (
    <div className="flex flex-wrap justify-center mx-5">
      {results?.map((link, index) => (
        <div key={index} className="p-2 ">
          <ReactPlayer
            url={link}
            controls
            width="300px"
            height="200px"
            className="rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Video;
