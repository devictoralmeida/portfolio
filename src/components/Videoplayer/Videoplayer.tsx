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

    const currentRef = playerRef.current

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="player-wrapper" ref={playerRef} style={{height: "350px", width: "300px" }}>
      {isInView && (
        <ReactPlayer
          className="react-player"
          url="video.MP4"
          width="100%"
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
