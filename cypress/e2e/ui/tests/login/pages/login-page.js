import { InputComponent } from "../../../components/input-component"
import { ButtonComponent } from "../../../components/button-component"
import { LabelComponent } from "../../../components/label-component"
import { IconComponent } from "../../../components/icon-component"
import { LoginLocatorsMap } from "./login-locators"

export class LoginPage{
    constructor(){
        this.usernameInput = new InputComponent(LoginLocatorsMap.EMAIL_INPUT)
        this.passwordInput = new InputComponent(LoginLocatorsMap.PASSWORD_INPUT)
        this.loginButton = new ButtonComponent(LoginLocatorsMap.LOGIN_BUTTON)
        this.logoutButton = new ButtonComponent(LoginLocatorsMap.LOGOUT_BUTTON)
   //    this.profileIcon = new IconComponent(LoginLocatorsMap.PROFILE_ICON)
        this.usernameErrorEmailFormatLabel = new LabelComponent(LoginLocatorsMap.EMAIL_FORMAT_ERROR)
        // this.usernameErrorEmailRequiredLabel = new LabelComponent(LoginLocatorsMap.EMAIL_REQUIRED_ERROR)
       // this.passwordErrorLabel = new LabelComponent(LoginLocatorsMap.P)
    }


    verifyIfPageLoaded() {
        this.usernameInput.isDisplayed()
        this.passwordInput.isDisplayed()
        this.loginButton.isDisplayed()
    }

    logoutByUI(){
       // this.profileIcon.click()
        this.logoutButton.click()
    }

    login(credentials){
        this.verifyIfPageLoaded()
        this.usernameInput.type(credentials.usernameInput)
        this.passwordInput.type(credentials.passwordInput)
        this.loginButton.click()

    }
}