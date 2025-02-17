Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('ATM Locator Test Scenarios', () => {

  beforeEach(() => {
    //Open https://www.hsbc.co.in/
    cy.visit('https://www.hsbc.co.in/')
  })

  it('ATM Search Test', () => {
    //Click on Find your nearest branch or ATM link in footer section
    cy.contains('Find your nearest HSBC branch or ATM').click({ force: true })

    //Validate in new page the URL has String = ‘/ways-to-bank/branches/’
    cy.url().should('include', '/ways-to-bank/branches/')

    //Validate Header as Branches & ATM
    cy.get('h1').contains('Branches & ATMs')

    //Click on Branch & ATM Locator button
    cy.contains('Branch & ATM Locator').click({ force: true })
    cy.wait(10000)

    //Type country name as India and  In drop-down option click option India. Also Validate ATM Header name is showing as Rajbhavan Road
    cy.get('input#searchInput').type('India').type('{enter}')
    cy.contains('Rajbhavan Road, Somajiguda , Hyderabad, India, 500082').should('be.visible')

    //Click on add Show more results button
    cy.contains('Show more results').click()

    //Check second ATM branch name as Bund Garden Road
    cy.contains('Amar Avinash Corporate City, Bund Garden Road, Pune, India, 411001').should('be.visible')

    //Check Instagram in social media option in footer section
    cy.get('a.social-icon-instagram').should('be.visible')

    //Check Facebook in social media option in footer section
    cy.get('a.social-icon-facebook').should('be.visible')

    //Check Twitter in social media option in footer section
    cy.get('a.social-icon-twitter').should('be.visible')
    
    //Check Youtube in social media option in footer section
    cy.get('a.social-icon-youtube').should('be.visible')

    //Click on HSBC Logo
    cy.get('div.header-logo>a>img').click()

    //Validate page is navigating to home page by its title
    cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit')

    //Check and Click on Privacy link
    cy.contains('Privacy Statement').click({ force: true })

    //Validate Privacy Statement as Header
    cy.get('h1').contains('Privacy Statement')
  })
})


