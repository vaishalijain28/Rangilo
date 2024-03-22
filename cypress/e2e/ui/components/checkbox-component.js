import {InputComponent } from './input-component'

export class checkboxComponent extends InputComponent{
  constructor(locator) {
    super(locator)
    this.locator = locator
  }
}