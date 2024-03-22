import { BaseComponent } from "./base-component"

export class ImageComponent extends BaseComponent{
  constructor(locator) {
    super(locator)
    this.locator = locator
  }
}