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
        case 'maxNumber' :
            value = '900000000000000000'
            break
        case 'minNumber' :
            value = '1'
            break
        case 'empty' :
            value = ' '
            break
        case 'characters' :
            value = faker.datatype.uuid()
            break
        case 'maxText' :
            value = faker.lorem.sentence()
            break
        case 'invalidText':
            value = faker.name.jobArea()
            break
        case 'invalidNumberFormat' :
            value = '3.1,2'
            break
        case 'negativeNumber' :
            value = '-1'
            break
    } 
    cy.log(value)
    cy.get(field, {
        timeout: forcedTimeout,
    })

    .scrollIntoView({
        force: true,
    })
    .invoke('show')
    .should('be.visible', 'Element is not visible')
    .should('exist', "Element doesn't exists")
    .clear()
    .type(
        value,
        {
            force: true,
        },
        {
            delay: 100, 
        },
        {
            log: true,
        },
        {
            retrices: 2,
        }
    )
    .type('Cypress.io{enter}')
    .should('have.value', value)

    cy.contains(message).should('be.visible', "Element doesn't exist")
}

exports.ValidationsType = ValidationsType

function TypeDropDownlist(element, text){
    Click(element)
    cy.contains(text, {
        timeout: forcedTimeout,
    })
    cy.get(element, {
        timeout: forcedTimeout,
    })
        .scrollIntoView({
            force: true,
        })
        .should('be.visible')
        .type(text, {
            force: true,
        })
    cy.get(element).type('{enter}', {
            force: true,
    })
}

exports.TypeDropDownlist = TypeDropDownlist

exports.TypeInsideFrame = TypeInsideFrame

function TypeInsideFrame(element, text) {
    cy.get(element).then(function ($iFrame) {
        const iFrameContent = $iFrame.contents().find('body')
        cy.wrap(iFrameContent).click().type(text)
    })
}

function VerifyShouldIncludeText(element, text) {
    cy.get(element, {
        timeout:forcedTimeout,
    })
    .click()
    .scrollIntoView({
        force: true,
    })
    .should('be.visible')
    .should('have.text', text, {
        force: true,
    })
}

exports.VerifyShouldIncludeText = VerifyShouldIncludeText

function VerifyShouldHaveText(element, text) {
    cy.get(element, {
        timeout: forcedTimeout,
    })
        .click()
        .scrollIntoView({
            force: true,
        })
        .should('be.visible')
        .should('have.text', text, {
            force: true,
        })
}

exports.VerifyShouldHaveText = VerifyShouldHaveText

function VerifyShouldNotHaveText(element, text){
    cy.get(element, {
        timeout: forcedTimeout,
    })
        .click()
        .scrollIntoView({
            force: true,
        })
        .should('be.visible')
        .should('not.have.text', text, {
            force: true,
        })
}

exports.VerifyShouldNotHaveText = VerifyShouldNotHaveText

function VerifyIsDisplayed(element){
    cy.get(element, {
        timeout: forcedTimeout,
    })
        .scrollIntoView({
            force: true,
        })
        .should('be.visible')
}

exports.VerifyIsDisplayed = VerifyIsDisplayed

function VerifyIsNotDisplayed(element) {
    cy.get(element, {
        timeout: forcedTimeout,
    })
        .scrollIntoView({
            force: true,
        })
        .should('not.be.visible')
}
exports.VerifyIsNotDisplayed = VerifyIsNotDisplayed

function VerifyShouldHaveLenght(element, lenght){
    cy.get(element, {
        timeout: forcedTimeout,
    })
    .should('be.visible')
    .should('have.length', lenght)
}
exports.VerifyShouldHaveLenght = VerifyShouldHaveLenght

exports.VerifyShouldHaveLenghtAbove = VerifyShouldHaveLenghtAbove

function VerifyShouldHaveLenghtAbove(element, elementValue){
    cy.get(element, {
        timeout: forcedTimeout,
    })
        .invoke('text')
        .then((value) => (value= value.replace(',', '')))
        .then(parseFloat)
        .should((value) => {
            expect(elementValue).to.eq(value)
        })
}

exports.VerifyFloatValue = VerifyFloatValue

function VerifyFloatValue(element, lenght){
    cy.get(element, {
        timeout: forcedTimeout,
    })
        .should('be.visible')
        .should('have.length.of.at.above', lenght)
}

function VerifyToasterDisplayed(type, message) {
    cy.log(`Check Toaster ${type} Message`)
    cy.wait(2000)
    toasterComponent.hasText(type)
    toasterComponent.hasText(message)
}
exports.VerifyToasterDisplayed = VerifyToasterDisplayed

// function LogoutFunction( {
//     Click
// })

exports.SelectAutoComplete = SelectAutoComplete
function SelectAutoComplete(element, text){
    cy.wait(500)
    cy.get(element)
    .invoke('show')
    .type('{selectall}{backspace}')
    .click({
        force: true,
    })
    .type(text)
    .type('{downarrow}')
    .type('{downarrow}')
    .type('{downarrow}')
    // Css Selector for auto Complete
  //  cy.get().contains(text).click()
}

exports.getDateFuture = getDateFuture
function getDateFuture() {
    const date = faker.date.between('2024-01-01', '2024-12-01')
    const myArr = date.toString().split(' ')

    const datePast = myArr[2] + ' '+ 'Aug'+ ' '+myArr[3]

    return datePast
}

exports.getDatePast = getDatePast
function getDatePast() {
    const date = faker.date.between('2024-01-01', '2024-12-01')
    const myArr = date.toString().split(' ')
    const datePast = myArr[2] + ' '+ faker.date.month()+ ' ' + myArr[3]
    return datePast
}

function SelectEjsDropdownList(element, option){
    Click(element)
    cy.get('[]', {
        timeout: forcedTimeout,
    })
    .should('contain.text', option)
    .contains(option)
    .click({
        force: true,
    })
}
exports.SelectEjsDropdownList = SelectEjsDropdownList

function SelectFromEjsAutoComplete(element, option){
    cy.get(element).invoke('val', option).type('{downarrow}')
    cy.wait(1000)
    cy.get('.e-dropdownbase')
    .should('exist')
    .should('show')
    .should('be.visible')
    .find('.e-list-item', option)
    .click({force: true})
}
exports.SelectFromEjsAutoComplete = SelectFromEjsAutoComplete

function VerifyDoesNotExist(element){
    cy.get(element).should('not.exist')
}
exports.VerifyDoesNotExist = VerifyDoesNotExist

function TypeNotVisible(element, text) {
    cy.get(element, {
        timeout: forcedTimeout,
    })
        .wait(500)
        .type(text, {
            force: true,
        })
}
exports.TypeNotVisible = TypeNotVisible

function DropdownSelect(element, text){
    cy.get(element)
    .click({
        force: true,
        invoke: true,
    })
    .should('be.visible')
    cy.wait(1000)
    cy.get('[]').contains(text).dblclick({
        force: true,
    })
}
exports.DropdownSelect = DropdownSelect

function EjsMultiSelect(element, text){
    cy.get(element)
    .click({
        force: true,
        invoke: true,
    })
    .should('be.visible')
    cy.wait(1000)
    cy.get('.e-dropdownbase').find('.e-list-item').click({
        force: true,
    })
}
exports.EjsMultiSelect = EjsMultiSelect

function ClickOnDropdownItemByValue(value){
    cy.get("li[data-value='" + value +"']").click()
}

exports.ClickOnDropdownItemByValue = ClickOnDropdownItemByValue