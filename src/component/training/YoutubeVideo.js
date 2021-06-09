import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import { Container, Row, Col,Button, Form, FormGroup, Label, Input } from "reactstrap";

const YoutubeVideo = () => {
  // const [title, setTitle] = useState('')
  useEffect(() => {
    document.title = "Vikash's YouTube Player";
  }, []);
  let [url, setURL] = useState('XCElIIYx_8s');
  console.log('XCElIIYx_8s',url);
  const opts = {
    height: '390',
    width: '900',
    playerVars: {
      autoplay: 0,
    },
  };
  const styles = {
    border: '1px solid rgba(0, 0, 0, 0.05)', 
    height: '500'
};
const urlWidth = {
  width:'80%'
}
const formHandler = (e) => {
  if(validateYouTubeUrl(url)) {
    url = youtube_parser(url);
  }
  setURL(url);
  e.preventDefault();
};
function validateYouTubeUrl(url)
{
      if (url != undefined || url != '') {
          var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
          var match = url.match(regExp);
          if (match && match[2].length == 11) {
            return true;
            }
          else {
            return false;
          }
      }
}


function youtube_parser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  var vid =  (match&&match[7].length==11)? match[7] : false;
  return vid;
}

  return  <div className="">
    <Container>
          <Row>
          <Col md={12} className="videoUrl">
             <Form onSubmit={formHandler}>
              <FormGroup>
                <Input
                  type="text"
                  style={urlWidth}
                  placeholder="Enter YouTube video ID: For ex: XCElIIYx_8s"
                  name="videoURL"
                  // value={url}
                  id="videoURL"
                  onChange={e => setURL(e.target.value)}
                />
                 <Button type="submit" color="success">
                Play this
              </Button>
              </FormGroup>
             
         </Form>
          </Col>
            <Col md={12} className="video-responsive">
              
                <YouTube videoId={url} opts={opts}  />
            </Col>
     
          </Row>
      </Container>
    </div>
};

export default YoutubeVideo;
