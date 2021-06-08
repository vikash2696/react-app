import React, { useEffect } from "react";
import YouTube from 'react-youtube';

const YoutubeVideo = () => {
  useEffect(() => {
    document.title = "Play YouTube Videos";
  }, []);

  const opts = {
    height: '390',
    width: '900',
    playerVars: {
      autoplay: 0,
    },
  };
  
  // return <YouTube videoId="lzKLyLJKFXk" opts={opts}  />;
  
  return  <div className="video-responsive">
    {/* <YouTube  videoId="43IbFDSVdB0" opts={opts}  /> */}
    <YouTube videoId="Yu0VahFLbBU" opts={opts}  />
    </div>
  // return <YouTube videoId="uRkS5Dqf8ic" opts={opts}  />;
};

export default YoutubeVideo;
