Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe("HSBC Login Test Scenario", () => {

    beforeEach(() => {
        //loading the page
        cy.visit('https://www.hsbc.co.in/')
    })

    it("Load the HSBC page for login test", () => {
        //for testing window size has been increased to 1600x1000
        cy.viewport(1600, 1000)

        //Validate HSBC Bank Logo
        cy.get('div[class="header-logo lg-2"]').should('be.visible')

        //Validate Home Page Title
        cy.get('title').contains('HSBC India - Credit Cards, NRI Services, Saving and Deposit')

        //Click on Login On
        cy.get('a[class="selected-item login-button only-one-link"]').click({ multiple: true, force: true })

        //Validate Log On header in Login page
        cy.get('h2[class="pull-left heading t28l"]>span').should('be.visible')

        //Check Continue button is available
        cy.get('button#username_submit_btn').should('be.visible')

        // Type any random email in the username field
        cy.get('input#username').type('testingofpage@gmail.com')

        //Click on remember me
        cy.get('input#rememberMe').check()

        //Validate there is a question mark tooltip present on the page
        cy.get('span[class="icon icon-circle-help-solid help-icon"]').should('be.visible')

        //Click on the tooltip
        cy.get('span[class="icon icon-circle-help-solid help-icon"]').click({ force: true })

        //Now validate the username header in the new pop-up screen
        cy.get('h3').contains('Username')

        //wait till 15sec before pop is opened and closed
        cy.wait(1500)

        // Validate there is a Close button in the new pop-up screen
        cy.get('span[class="icon icon-delete"]').should('be.visible')

        //Click on the close button present in the new pop-up screen
        cy.get('span[class="icon icon-delete"]').click({ force: true })


    })
})