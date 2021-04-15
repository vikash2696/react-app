import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { ListGroup } from 'reactstrap';
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/"action="false">Home</Link>
     </ListGroup>
    </div>
  );
}

export default Header;