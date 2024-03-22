import { ButtonComponent } from "./button-component"

export class IconComponent extends ButtonComponent{
  constructor(locator) {
    super(locator)
    this.locator = locator
  }
}