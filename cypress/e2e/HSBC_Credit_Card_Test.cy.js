Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe("Credit card test ", () => {
    beforeEach(() => {
        //load the page
        cy.visit('https://www.hsbc.co.in/')
    })

    it("HSBS credit cars test", () => {
        //Click on Banking menu navigation
        cy.get('span[class="header-main-navigation-title"]').contains('Banking').click({ force: true })

        //Click on Credit Cards link
        cy.get('h2[class="doormat-heading"]').contains('Credit Cards').click({ force: true })

        //Validate Credit Card as a header text
        cy.get('h1').contains('Credit cards')
        cy.screenshot()

        //Validate the Card HSBC Taj Credit Card is displayed with image,link and description
        cy.get('img#chp_main_image_3').should('be.visible')
        cy.get('span[class="link text"]').contains('HSBC Taj Credit Card')
        cy.get('div[class="item-content-text"]').contains('The Rarest Key. Experience the ultimate in luxury, from tailored stays at Taj Hotels to unrivalled privileges that match your lifestyle.')
        cy.screenshot()
        
        //Click on HSBC Taj Credit Card link
        cy.get('span[class="link text"]').contains('HSBC Taj Credit Card').click({ force: true })

        // Validate in new page the URL has String = ‘https://www.hsbc.co.in/credit-cards/products/taj/
        cy.url().should('include', 'https://www.hsbc.co.in/credit-cards/products/taj/')

        //Validated the header is HSBC Taj Credit Card
        cy.get('h1').contains('HSBC Taj Credit Card')

        //Click on HSBC Logo
        cy.get('div.header-logo>a>img').click()
        //Validate page is navigating to home page by its title
        cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit')

    })
})