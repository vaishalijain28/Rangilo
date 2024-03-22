import { BaseComponent } from './base-component'

export class DropdownlistComponent extends BaseComponent {
    constructor(locator) {
      super(locator)
      this.locator = locator
    }

    select(text){
      cy.get(this.locator).should('exist').should('be.visible').click({
        force: true,
        invoke: true,
      })
      cy.get('[id="menu-item-5795"]')
      .should('exist')
      .should('be.visible')
      .contains(text)
      .click({
        force: true,
      })
    }

    selectAutoComplete(text){
      cy.wait(500)
      cy.get(this.locator)
      .should('exist')
      .invoke('show')
      .should('be.visible')
      .type('{selectall}{backspace}')
      .click({
        force: true, 
      })
      .type(text)

      cy.get('/css selector/').contains(text).click()
    }

    filter(text){
      cy.get(this.locator)
      .click()
      .type(text)
      .type('{downarrow}')
      .type('{enter}')
    }

    sendKey(key){
      cy.get(this.locator).type(key)
    }
}