import {InputComponent } from './input-component'

export class checkboxComponent extends InputComponent {
  constructor(locator) {
    super(locator)
    this.locator = locator
  }

  type(text){
    this.click(this.locator)
    cy.get(this.locator)
    .should('exist', "Element doesn't exists")
    .invoke('show')
    .should('be.visible', 'Element is not visible')
    .clear()
    .type(
      {
      force: true,
    },
    {
      retrices:2,
    }
      )
    .should('have.value', text)
  }

  clear(){
    cy.get(this.locator).clear()
  }
}