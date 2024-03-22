import {InputComponent} from './input-component'

export class DatepickerComponent extends InputComponent{
  constructor(locator) {
    super(locator)
    this.locator = locator
  }
}