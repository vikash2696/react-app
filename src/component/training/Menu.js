import React from "react";
import { ListGroup } from 'reactstrap';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ListGroup>
      <Link className="list-group-item list-group-item-action" tag="a" to="/"action="false">Home</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/add-review"action="false">Add Review</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/list-review"action="false">Review</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/users"action="false">User List</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/about-us"action="false">About us</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/join-us"action="false">Join us</Link>
    </ListGroup>
  );
};

export default Menu;
