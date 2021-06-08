import React, { useState, useEffect } from "react";
import YouTube from 'react-youtube';
const Video = () => {
    const [inputValue, setInputValue] = useState ('Current');
    useEffect(() => {
      fetchUrls();
    }, []);
    const fetchUrls = async () => {
      const res = "aaaa";
      setInputValue(res.data);
      console.log("res", res);
    };
    const opts = {
        height: '500',
        width: '1000',
        action : 'syndicate' ,
        permission : 'allowed',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
       return <YouTube videoId="xNWSCsbstKI" opts={opts}  />;
    // 
      //return <YouTube videoId="PO31fcQdWrc" opts={opts}  />;
}

export default Video;
