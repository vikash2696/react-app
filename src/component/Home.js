import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  Col,
  CardBody,
  CardTitle,
  Row,
  Button,
  CardText
} from "reactstrap";
import AboutUs from "../component/pages/AboutUs";

const Home = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    document.title = "Home";
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3003/classes");
    setClasses(res.data);
    console.log("res", res.data);
  };

  return (
    <div>
      <Row>
        <Col md={6} className="">
          <AboutUs />
        </Col>
        <Col md={6} className="">
          <Row className="no-gutters" style={{position: "absolute"}}>
            {classes.map((user, index) => (
              <Card
                body
                inverse
                color="info"
                style={{ width: "10rem", margin: 2, marginTop: 5 }}
              >
                <CardBody>
                  <Button color="info">
                  <CardTitle tag="h6">{user.className}</CardTitle></Button>
                  {/* <CardText>{user.description}</CardText> */}
                  {/* <Button>Button</Button> */}
                </CardBody>
              </Card>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
