import { ButtonComponent } from "../../../components/button-component"
import { LabelComponent } from "../../../components/label-component"
import { AllCategoriesLocatorMap } from "./all-categories-locators"

export class AllCategoriesPage { 
    constructor() {
        this.saltAndSpices = LabelComponent(AllCategoriesLocatorMap.SALT_SPICES_BUTTON)
        this.IndianHerbs = LabelComponent(AllCategoriesLocatorMap.INDIAN_HERBS_BUTTON)
        this.DryFruit = LabelComponent(AllCategoriesLocatorMap.DRY_FRUITS_BUTTON)
        this.ReadyToEat = LabelComponent(AllCategoriesLocatorMap.READY_TO_EAT_BUTTON)
        this.ReadyToCook = LabelComponent(AllCategoriesLocatorMap.READY_TO_COOK_BUTTON)
        this.PohaAndBesan = LabelComponent(AllCategoriesLocatorMap.POHA_BESAN_BUTTON)
        this.AddToWishList = ButtonComponent(AllCategoriesLocatorMap.ADD_TO_WISHLIST_BUTTON)
    }

    verifyIfPageLoaded(){
        this.saltAndSpices.isDisplayed()
        this.DryFruit.isDisplayed()
        this.IndianHerbs.isDisplayed()
        this.ReadyToCook.isDisplayed()
        this.ReadyToEat.isDisplayed()
        this.PohaAndBesan.isDisplayed()
        this.AddToWishList.isDisplayed()
    }
}