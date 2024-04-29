//import { ImageComponent } from "../../../components/image-component"
import { LabelComponent } from "../../../components/label-component"
import { ShopLocatorMap } from "./shop-locator"

export class ShopPage {
    constructor() {
        this.saltAndSpices = LabelComponent(ShopLocatorMap.SALT_SPICES_BUTTON)
        this.IndianHerbs = LabelComponent(ShopLocatorMap.INDIAN_HERBS_BUTTON)
        this.DryFruit = LabelComponent(ShopLocatorMap.DRY_FRUITS_BUTTON)
        this.ReadyToEat = LabelComponent(ShopLocatorMap.READY_TO_EAT_BUTTON)
        this.ReadyToCook = LabelComponent(ShopLocatorMap.READY_TO_COOK_BUTTON)
        this.PohaAndBesan = LabelComponent(ShopLocatorMap.POHA_BESAN_BUTTON)
    }

    verifyIfPageLoaded(){
        this.saltAndSpices.isDisplayed()
        this.DryFruit.isDisplayed()
        this.IndianHerbs.isDisplayed()
        this.ReadyToCook.isDisplayed()
        this.ReadyToEat.isDisplayed()
        this.PohaAndBesan.isDisplayed()
    }
}