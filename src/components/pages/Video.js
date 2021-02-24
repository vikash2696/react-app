import React from "react";
import YouTube from 'react-youtube';
const Video = () => {
    const opts = {
        height: '390',
        width: '700',
        action : 'syndicate' ,
        permission : 'allowed',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      // return <YouTube videoId="lzKLyLJKFXk" opts={opts}  />;
    
      return <YouTube videoId="p7378GSN7EQ" opts={opts}  />;
}

export default Video;