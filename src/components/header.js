import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state.cart.cart);

  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/" className="text-decoration-none text-light">
            Products
          </NavLink>
        </Nav>

        <NavLink to={"/cart"} className="text-decoration-none text-light">
          <Badge badgeContent={totalQuantity} color="primary">
            <i
              className="fa-solid fa-cart-shopping text-light cart-icon"
              style={{
                fontSize: 25,
                cursor: "pointer",
              }}
            ></i>
          </Badge>
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default Header;
