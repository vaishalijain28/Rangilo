import { ButtonComponent } from '../../components/button-component'
import { MenuLocatorMap } from './menu-locators'

const {Click} = require('../../utilities/ui-actions')

export class MenuPage {
    constructor() {
        this.homeButton = new ButtonComponent(
            MenuLocatorMap.HOME_BUTTON
        )
        this.shopButton = new ButtonComponent(
            MenuLocatorMap.SHOP_BUTTON
        )
        this.contactUsButton = new ButtonComponent(
            MenuLocatorMap.CONTACT_US_BUTTON
        )
        this.allCategoriesButton = new ButtonComponent(
            MenuLocatorMap.ALL_CATEGORIES_BUTTON
        )
        this.saltAndSpicesButton = new ButtonComponent(
            MenuLocatorMap.SALT_SPICES_BUTTON
        )
        this.pulsesButton = new ButtonComponent(
            MenuLocatorMap.PULSES_BUTTON
        )
        this.IndianHerbsButton = new ButtonComponent(
            MenuLocatorMap.INDIAN_HERBS_BUTTON
        )
        this.DryFruitsButton = new ButtonComponent(
            MenuLocatorMap.DRY_FRUITS_BUTTON
        )
        this.ReadyToEatButton = new ButtonComponent(
            MenuLocatorMap.READY_TO_EAT_BUTTON
        )
        this.ReadyToCookButton = new ButtonComponent(
            MenuLocatorMap.READY_TO_COOK_BUTTON
        )
        this.PohaAndBesanButton = new ButtonComponent(
            MenuLocatorMap.POHA_BESAN_BUTTON
        )
    }


    get getHome_menu_option() {
        return '[id="menu-item-5471"]'
    }

    get getshop_menu_option() {
        return '[id="menu-item-406"]'
    }

    get getcontactUs_menu_option() {
        return '[id="menu-item-6043"]'
    }

    get getAllCategories_menu_option() {
        return '[id="menu-item-5795"]'
    }

    get getSaltAndSpices_menu_option(){
        
    }

    get getPulses_menu_option(){

    }
    get getIndianHerbs_menu_option() {

    }
    get getDryFruits_menu_option(){

    }
    get getReadyToEat_menu_option() {

    }
    get getReadyToCook_menu_option() {
        
    }
    get getPohaAndBesan_menu_option() {

    }


    NavigateToShopPage() {
        cy.log('Navigating to Shop Page by UI')
        this.shopButton.click()
    }

    NaviagteToContactUsPage() {
        cy.log('Naviagting to Contact Us Page by UI')
        this.contactUsButton.click()

    }

    NaviagteToAllCategoriesPage() {
        cy.log('Navigating to All Categories Page by UI')
        this.allCategoriesButton.click()

    }

    NaviagteToSaltAndSpicesPage() {
        cy.log('Navigating to Salt & Spices Page by UI')
        this.allCategoriesButton.click()
        this.saltAndSpicesButton.click()
        cy.wait(1000)
    }

    NaviagteToPulsesPage() {
        cy.log('Navigating to Pulses Page by UI')
        this.allCategoriesButton.click()
        this.pulsesButton.click()
        cy.wait(1000)
    }

    NavigateToIndianHerbsPage() {
        cy.log('Navigating to Indian Herbs Page by UI')
        
    }

    NavigateToDryFruitsPage() {
        cy.log('Navigating to Dry Fruits Page by UI')
        
    }

    NavigateToReadyToEatPage() {
        cy.log('Navigating to Ready To Eat Page by UI')
        
        
    }

    NavigateToReadyToCookPage() {
        cy.log('Navigating to Ready To Cook Page by UI')
        
    }

    NavigateToPohaAndBesanPage() {
        cy.log('Navigating to Poha and Besan Page by UI')
        
    }
}