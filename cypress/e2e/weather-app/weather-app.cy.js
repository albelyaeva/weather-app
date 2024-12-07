describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:3000/')
    })
})

describe('weather app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('displays four li items', () => {
        cy.get('.weather-info li').should('have.length', 4)
        cy.get('.weather-info li span').first().should('have.text', 'Feels Like')
        cy.get('.weather-info li').last().find('span').first().should('have.text', 'Wind')
    })

    it('.focus() - focus on a DOM element', () => {
        cy.get('.weather-header input').focus()
           .should('have.css', 'border-color', 'rgb(105, 105, 105)')
    })

    it('put text into input', () => {
        const newItem = 'Boston'
        cy.get('.weather-header input')
            .type(`${newItem}`).type('{enter}')

        cy.get('.weather-container__name').should('have.text', 'Boston')
    })
})