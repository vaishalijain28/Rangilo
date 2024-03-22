import { BaseComponent } from './base-component'

export class MultiSelectComponent extends BaseComponent {
    constructor(locator) {
      super(locator)
      this.locator = locator
    }

    selectSingleElement(text){
      cy.get(this.locator)
      .should('exist')
      .invoke('show')
      .should('be.visible')
      .click({
        force: true,
        invoke: true,
      })

      cy.get('.e-dropdownbase')
      .should('exist')
      .find('.e-list-item')
      .contains(text)
      .click({
        force: true,
      })

    }
}