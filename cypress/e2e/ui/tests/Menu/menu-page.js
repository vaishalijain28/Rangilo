import { ButtonComponent } from '../../components/button-component'
import { MenuLocatorMap } from './menu-locators'

const {Click} = require('../../utilities/ui-actions')

export class MenuPage {
    constructor() {
        this.homeButton = new ButtonComponent(
            MenuLocatorMap.HOME_BUTTON
        )
    }
}