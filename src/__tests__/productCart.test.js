import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductCard from "../components/Product/productCard";

test("render productCard", () => {
  const product = {
    Title: "Product a",
    price: 99.99,
    image: "https://via.placeholder.com/150",
    rating: {
      rate: 4.5,
      count: 10,
    },
  };

  render(<ProductCard product={product} />);

  expect(screen.getByText("Product a")).toBeInTheDocument();

  expect(screen.getByText("Price : $99.99")).toBeInTheDocument();

  expect(screen.getByText("Rating : 4.5/5")).toBeInTheDocument();

  expect(screen.getByText("Reviews : 10")).toBeInTheDocument();
});
