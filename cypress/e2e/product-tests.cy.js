describe("Product Testleri", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");

    cy.get("[data-cy=product-link]").first().click();
  });

  it("Ürünler sayfasına navigate et!", () => {});

  it("Ürünleri 'allan' ile filtrele", () => {
    cy.get("[data-cy=filter-input]").type("allan");

    cy.get(".product-card").should("have.length", 1);
  });
});
