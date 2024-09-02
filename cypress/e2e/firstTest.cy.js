describe("Product Listing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the products list", () => {
    cy.get(".product-card").should("have.length.at.least", 1);
  });
});

describe("Product Details", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should navigate to product details and display correct information", () => {
    cy.get(".product-card").first().click();
    cy.url().should("match", /\/products\/\d+$/);
    cy.get(".product-title").should("be.visible");
    cy.get(".product-price").should("be.visible");
  });
});

describe("Add Product to Cart", () => {
  it("should add the product to the cart", () => {
    cy.visit("http://localhost:3000/products/1");
    cy.get(".add-to-cart-button").click();
    cy.get(".MuiBadge-badge").should("contain", "1");
  });
});

describe("E2E", () => {
  it("test all the app funcs", () => {
    cy.visit("http://localhost:3000");
    cy.get(".product-card").first().click();
    cy.get(".add-to-cart-button").click();
    cy.get(".cart-icon").click();
    cy.get(".cart-item").should("exist");
    cy.get(".inc-qty").click();
    cy.get(".item-qty").should("contain.text", 2);
    cy.get(".dec-qty").click();
    cy.get(".item-qty").should("contain.text", 1);
    cy.get(".remove").click();
    cy.get("cart-item").should("not.exist");
    cy.get(".cart-empty").should("exist");
  });
});
