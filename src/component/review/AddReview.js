import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

const AddReview = () => {
  useEffect(() => {
    document.title = "Add Review";
  }, []);

  const [review, setReview] = useState({});
  //form handler function Enter YouTube video ID: For ex: XCElIIYx_8s
  const formHandler = (e) => {
    console.log("data", review);
    e.preventDefault();
  };

  return (
    <Form onSubmit={formHandler}>
      <FormGroup>
        <Label for="name">Title</Label>
        <Input
          type="text"
          placeholder="Enter your name"
          name="title"
          id="title"
          onChange={(e) => {
            setReview({ ...review, title: e.target.value });
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Description</Label>
        <Input
          type="textarea"
          placeholder="Enter some description"
          name="description"
          id="description"
          onChange={(e) => {
            setReview({ ...review, description: e.target.value });
          }}
          // style={{ height: 100 }}
        />
      </FormGroup>

      <Container className="text-center">
        {/* <Button type="submit" color="success">
          Add Review
        </Button>
        <Button color="warning  ml-3">Cancel</Button> */}
      </Container>
    </Form>
  );
};
export default AddReview;
