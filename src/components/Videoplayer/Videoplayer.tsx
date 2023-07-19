import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    });

    if (playerRef.current) {
      observer.observe(playerRef.current);
    }

    return () => {
      if (playerRef.current) {
        observer.unobserve(playerRef.current);
      }
    };
  }, []);

  return (
    <div className="player-wrapper" ref={playerRef} style={{height: "350px", width: "350px" }}>
      {isInView && (
        <ReactPlayer
          className="react-player"
          url="video.MP4"
          width="100%"
          height="100%"
          muted={true}
          playing={true}
          loop={true}
          controls={true}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
