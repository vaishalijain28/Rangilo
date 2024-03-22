import { BaseComponent } from './base-component'

export class IFrame extends BaseComponent {
  constructor(iframeLocator, itemLocator){
  super(iframeLocator, itemLocator)
  this.iframeLocator = iframeLocator
  this.itemLocator = itemLocator
}

  typeInsideFrame(text) {
    cy.getItemInsideOfIframe(this.iframeLocator, this.itemLocator)
    .click()
    .type(text)
  }
}