/// <reference types="cypress" />
describe('funcionalidade: cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.screenshot()
})

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `LLima${Date.now()}@gmail.com`;
    cy.preencherCadastro('Lucas', 'Lima', email, '11999999999', 'Teste@123')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso')
  })

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Lucas333', 'Lima', 'email@gmail.com', '11999999999', 'Teste@123')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })
})