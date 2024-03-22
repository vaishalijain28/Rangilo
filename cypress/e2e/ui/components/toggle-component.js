import { BaseComponent } from './base-component'

export class ToggleComponent extends BaseComponent {
    constructor(locator) {
      super(locator)
      this.locator = locator
    }

    /**
     * apply this method on elements of this type 
     * @param {Boolean} newStatus 
     */

    switch(newStatus){
      cy.get(this.locator)
      invoke('attr', 'aria-checked')
      .then((Attribute) => {
        if(Attribute !== newStatus) cy.get(this.locator).click()
      })
    }
}