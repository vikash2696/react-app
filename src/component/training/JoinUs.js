import React, { useEffect } from "react";
import YouTube from 'react-youtube';

const JoinUs = () => {
  useEffect(() => {
    document.title = "Join Us";
  }, []);

  const opts = {
    height: '390',
    width: '700',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  // return <YouTube videoId="lzKLyLJKFXk" opts={opts}  />;
  
  return <YouTube videoId="43IbFDSVdB0" opts={opts}  />
  // return <YouTube videoId="uRkS5Dqf8ic" opts={opts}  />;
};

export default JoinUs;
