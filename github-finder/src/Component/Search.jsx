import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const [username, setUserName] = useState(null);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="primary"
      data-bs-theme="dark"
    >
      <Container
        fluid
        className="d-flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            type="search"
            placeholder="Search"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="me-2"
            aria-label="Search"
          />
          <Link to={`/${username}`}>
            <Button>Search</Button>
          </Link>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Search;
