import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { urls } from "../../shared/urls";

const CreateUser = (props) => {
  const { toggle, modal, fetchAgain } = props;

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);

  const createUserAPI = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(urls.createUser, {
        fist_name: firstName,
        last_name: lastName,
        email: email,
        pwd: password,
        username: username,
      });
      if (response.data) {
        toggle();
        fetchAgain();
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal show={modal} onHide={toggle}>
        <Form onSubmit={createUserAPI}>
          <Modal.Header closeButton>
            <Modal.Title>Create New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label for="exampleEmail">First Name</Form.Label>
              <Form.Control
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label for="exampleEmail">Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label for="exampleEmail">Username</Form.Label>
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your username"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label for="exampleEmail">Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email id"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label for="exampleEmail">Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={toggle}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateUser;
