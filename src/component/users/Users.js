import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3003/users");
    setUsers(res.data);
    // console.log("res", res.data);
  };
  return (
    <Table striped hover className="shadow border">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr>
            <th scope="row">{index}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button color="primary">View</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Users;
