/// <reference types="cypress" />

describe('Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve buscar por um filme com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
    })

    it('Deve buscar por um filme com sucesso de uma lista', () => {
        cy.fixture('filmes.json').then((filmes) => {
            filmes.forEach((filme) => {
                cy.get('#search-input').type(filme.titulo)
                cy.get('#search-button').click()
                cy.get('#results-section').should('contain', filme.titulo)
                cy.get('#search-input').clear()
            })
        })
    })
})