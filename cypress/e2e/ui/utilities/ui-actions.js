import { ToasterComponent } from '../components/toaster-component'

const toasterComponent = new ToasterComponent()
/**
 * Click even when the element is not visible
 * @param {*} element
 */
function Click(element) {
    cy.get(element,{
        timeout: forcedTimeout,
    })
        .scrollIntoView({
            multiple: true ,
        })
        .invoke('show')
        .should('exist', "Element doesn't exists")
        .click(
            {
                multiple:true
            },
            {
                delay: 10,
            },
            {
                log: true,
            },
            {
                retrices: 2,
            }
        )
}

exports.Click = Click

/**
 *  Clicks when the element is visible
 * @param {*} element
 */
function ClickWhenVisible(element){
    cy.get(element,{
        timeout: forcedTimeout,
    })
    .invoke('show')
    should('be visible', 'Element is not visible')
    .and('exist', "Element doesn't exists")
    .click(
        {
            force: true,
        },
        {
            delay: 10,
        },
        {
            log: true,
        },
        {
            retrices:2,
        }
    )
}
exports.ClickWhenVisible = ClickWhenVisible

/**
 * Click by text
 * @param {String} text
 */

function ClickByText(text){
    cy.contains(
        text,
        {
            timeout:forcedTimeout,
        },
        {
            log:true,
        }
    )
    .scrollIntoView({
        force: true,
    })
    .invoke('show', {
        timeout: forcedTimeout,
    })
    .should('be visible', 'Element is not visible')
    .and('exist', "Element doesn't exists")
    .then(($element) =>{
        expect($element, "Not logged in-can't locate navigation tree").to
        .be.visible
        cy.wrap($element, {
            message: 'custom error message 1',
        }).click ({
            force:true,
        })
    })
}

exports.ClickByText = ClickByText

function Type(element, text){
    cy.get(element).click({force:true})
    cy.get(element, {
        timeout: forcedTimeout,
    })
        .invoke('show')
        .should('be visible', 'Element is not visible')
        .should('exist', "Element doesn't exist")
        .clear()
        .should('be.empty')
        .type(
            text,
            {
                force: true,
            },
            {
                delay: 10,
            },
            {
                log: true,
            },
            {
                retrices:2 ,
            }
        )
        .should('have.value', text)
}
exports.Type = Type

function ValidationsType(field, data, message) {
    let value
    switch (data){
        case 'invalidEmail':
            value = faker.internet.email()
            break
         case 'emailFormat':
            value = faker.internet.domainName()
            break
        case 'invalidDate':
            value =  faker.internet.domainName()
            break
        case 'invalidDate':
            value = '21' + ' '+ 'Mar' + ' ' + '0000'
            break
        case 'invalidFormat':
            value = '0000' + ' ' + 'Mar' + ' '+ '23'
            break
        case 'datepast':
            value = '21' + ' '+ 'Mar' + ' ' + '2001'
            break
        case 'datefuture':
            value = '21' + ' '+ 'Mar' + ' ' + '2045'
            break
        


    } 
}