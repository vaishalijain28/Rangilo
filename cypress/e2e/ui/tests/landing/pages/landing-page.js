import { ButtonComponent } from "../../../components/button-component"
import { LabelComponent } from "../../../components/label-component"
import { ImageComponent } from "../../../components/image-component"
import { LandingLocatorsMap } from "./landing-locator"

export class LandingPage{
    constructor(){
    //    this.startFreeTrailButton = new ButtonComponent(
    //     LandingLocatorsMap.START_FREE_TRIAL_BUTTON
    //    )
       this.loginbutton = new ButtonComponent(LandingLocatorsMap.LOGIN_BUTTON)
       this.loginRightsLabel = new LabelComponent(
        LandingLocatorsMap.LOGIN_RIGHTS
       )

       this.contactLabel = new LabelComponent(LandingLocatorsMap.CONTACT_LABEL)
       this.questionLabel = new LabelComponent(LandingLocatorsMap.QUESTIONS_LABEL)

       this.logoImage = new ImageComponent(LandingLocatorsMap.LOGO_IMAGE)
    }

    navigateToLoginPage()
    {
        cy.visit('/entry')
        this.#verifyIfThePageLoaded()
        this.loginbutton.click()
    }

    #verifyIfThePageLoaded(){
        cy.contains('')
    }
}