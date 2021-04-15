import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
} from "reactstrap";

const Review = ({ review }) => {
  return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardTitle className="text-center font-weight-bold">
            {review.title}
          </CardTitle>
          <CardText>{review.description}</CardText>
          <Container className="text-center">
            <Button color="success">Up Vote</Button>
            <Button color="danger ml-3">Down Vote</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Review;
