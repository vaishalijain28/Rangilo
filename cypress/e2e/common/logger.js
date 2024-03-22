export default class Logger {
    static Log(text){
        if(Cypress.env('isLoggingActive')) {
            cy.log(text)
        }
    }
}