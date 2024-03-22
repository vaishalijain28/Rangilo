import { BaseComponent } from "./base-component"

export class ToasterComponent extends BaseComponent{
  constructor(locator) {
    super(locator)
    this.locator = 'e.toast-content > div'
  }
}