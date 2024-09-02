import cartReducer, { addToCart } from "../features/cart/cartSlice";

test("add to the cart", () => {
  const initialState = { cart: [] };
  const product = { productId: 1, quantity: 1 };

  const newState = cartReducer(initialState, addToCart(product));

  expect(newState.cart).toContainEqual(product);
});
