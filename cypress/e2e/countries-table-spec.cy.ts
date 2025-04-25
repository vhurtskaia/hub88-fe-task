/// <reference types="cypress" />

describe('Test table', () => {
  it('successfully renders countries', () => {
    cy.visit('/');

    cy.get('tbody').find('tr').should('have.length.at.least', 35);
  });

  it('successfully shows the empty list if nothing founds', () => {
    cy.visit('/');

    cy.get('#countryCode').type('RX');

    cy.contains('Empty list').should('be.visible');
  });

  it('successfully accept only 2 chars in country code input', () => {
    cy.visit('/');

    cy.get('#countryCode').type('MTT');

    cy.get('#countryCode').should('have.value', 'MT');

    cy.get('table > tbody').find('tr').should('have.length', 1);

    cy.wait(1200);

    cy.get('table').contains('td', 'Malta').should('be.visible');
  });

  it('successfully searching a country by code', () => {
    cy.visit('/');

    cy.get('#countryCode').type('US');

    cy.get('table > tbody').find('tr').should('have.length', 1);

    cy.wait(1200);

    cy.get('table').contains('td', 'United States').should('be.visible');
  });
});
