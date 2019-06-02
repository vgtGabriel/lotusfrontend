/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="javascript:void(0)">Lotus inc.</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="javascript:void(0)">About Us</NavLink>
            </NavItem>
          </Nav>
          <div className="copyright">
            © {new Date().getFullYear()}{" "}
            by{" "}
            <a
              href="javascript:void(0)"
              rel="noopener noreferrer"
              target="_blank"
            >
              LOTUS
            </a>{" "}
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
