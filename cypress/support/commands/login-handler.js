import { LoginPage } from "../../e2e/ui/tests/login/pages/login-page"

exports.loginHandler = function(credentials, isUILogin){
    cy.clearAllBrowserData()
    let accountHelper = new accountHelper()
    let isByPassActive = new getByPassValue()
    cy.log(isByPassActive, 'ByPassValue')
    if(isUILogin)
    {
        if(isByPassActive){
            cy.log('ByPassActivated')
            credentials.roleID = setRoleID(
                credentials.currentRole,
                credentials.isThereMoreThanOneRoleAssigned
            )
            accountHelper.login(credentials, true)
            cy.visit('./automation')
        }
        else{
            let loginPage = new LoginPage()
            // let landingPage = new LandingPage()

            landingPage.navigateToLoginPage()
            loginPage.login(credentials)
        }
    }
    else{
        accountHelper.login(credentials, false)
    }
}

// function setRoleID(roleSelected, isThereMoreThanOneRoleAssigned){
//     let roleID = null
//     if(isThereMoreThanOneRoleAssigned !== null && isThereMoreThanOneRoleAssigned
//         && roleSelected !== undefined)
//     roleID = roleSelected.roleID
//     return roleID
// }

function getByPassValue(){
    let currentByPassValue = Cypress.env('isByPassLoginActive')
    if(currentByPassValue == null){
        currentByPassValue = false
    }
     else{
         if(typeof currentByPassValue !='boolean'){
            currentByPassValue = currentByPassValue.toLowerCase === 'true'
         }
     }
    return currentByPassValue

}