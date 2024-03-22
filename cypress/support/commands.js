// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginHandler } from './login-handler'
// import ApiCall
// import jwt_decode

//const apiCall = new ApiCall()

Cypress.Commands.add('getItemInsideOfIframe', (iframeLocator, itemLocator) =>{
    cy.get(iframeLocator).then(function(iFrame) {
        const iFrameContent = iFrame.contents().find('body')
        return cy.wrap(iFrameContent).find(itemLocator)
    })
})

Cypress.Commands.add('verifyShouldNotIncludeText', (locator, text) => {
    cy.get(element, {
        timeout: forcedTimeOut,
    })
    .scrollIntoView({
        force: true,
    })
    .should('be.visible')
    .should('not.include.text', text, {
        force: true,
    })
})

Cypress.Commands.add('isEnable', (locator, expected) => {
    const condition = expected ? 'be.enabled' : 'be.disabled'
    cy.get(locator)
        .scrollIntoView({
            force: true,
        })
        .should(condition)
})

Cypress.Commands.add('hover', (locator) => {
    cy.get(locator).trigger('mouseover')
})

Cypress.Commands.add('clearAllBrowserData', (endpoint, apiAuthToken , body) => {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.window().then((win) => {
        win.sessionStorage.clear()
    })
})

Cypress.Commands.add('uiLogin', (credentials) => {
    loginHandler(credentials, true)
})

Cypress.Commands.add('apiLogin', (credentials) => {
    loginHandler(credentials, false)
})

Cypress.Commands.add(
    'postRequest', (endpoint, body, apiAuthToken, formValue = false) => {
        return apiCall.post(endpoint, body, apiAuthToken, formValue)
    })

Cypress.Commands.add('getRequest', (endpoint, apiAuthToken) => {
    return apiCall.get(endpoint, apiAuthToken)
})

Cypress.Commands.add('deleteRequest', (endpoint, apiAuthToken) => {
    return apiCall.delete(endpoint, apiAuthToken)
})

Cypress.Commands.add(
    'putRequest', 
    (endpoint, body, apiAuthToken, formValue = false) => {
        return apiCall.put(endpoint, body, apiAuthToken, formValue)
    }
)

Cypress.Commands.add(
    'patchRequest', 
    (endpoint, body, apiAuthToken, formValue = false) => {
        return apiCall.patch(endpoint, body, apiAuthToken, formValue)
    }
)

Cypress.Commands.add('getApiAuthToken', () =>{
    cy.get('@apiAuthToken').then((apiAuthToken) => {
        return{
            token: apiAuthToken,
            decodedToken: jwt_decode(apiAuthToken),
        }
    })
})

Cypress.Commands.add('setApiAuthToken', (token) => {
    cy.wrap(token).as('apiAuthToken')
})

Cypress.Commands.add('interceptWithFixture', (method, urlPath, fixtureFile) => {
    cy.intercept(
        {
            method: method,
            url: `${Cypress.env('api_server')}${urlPath}`   
        },
        {fixture: fixtureFile}
    )
})

Cypress.Commands.add('ignoreRefreshTokenRequest', () => {
    cy. intercept(
        'POST', 
        `${Cypress.env('api_server')}/api/Account/refresh`,
        (req) => req.destroy()
    ).as('ignoreRefreshTokenRequest')
    
})



