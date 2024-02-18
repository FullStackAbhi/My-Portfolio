import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="black"
      data-bs-theme="dark"
    >
      <Container
        fluid
        className="d-flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <img
          src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
          alt="logo"
          className="github_logo"
        />
        <h1 style={{ color: "white" }}>Github Users</h1>
      </Container>
    </Navbar>
  );
};

export default Nav;
