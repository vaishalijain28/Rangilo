export class BaseComponent{
  constructor(locator){
    this.locator = locator
  }
  getFileInput(){
    return cy.get('locator')
  }
  locator(){
    return this.locator
  }
  object(){
    return cy.get(this.locator)
  }

  hasText(text){
    cy.get(this.locator) 
    .should('exist')
    .invoke('show')
    .scrollIntoView()
    .should('be visible')
    .should('have.text', text)
  }
  
  verifyRegexMatch(regexExpression){
    cy.get(this.locator).contains(regedxExpression)
  }

  doesNotHaveText(text){
    cy.get(this.locator)
    .should('exist')
    .invoke('show')
    .scrollIntoView()
    .should('be.visible')
    .should('not.have.text', text)
  }

  containsText(text){
    cy.get(this.locator)
    .should('exist')
    .invoke('show')
    .should('be.visible')
    .should('contain.text', text)
  }

  click(){
    cy.get(this.locator)
    .should('exist')
    .invoke('show')
    .should('be.visible')
    .click(
      {
        force: true,
      },
      {
        retrices: 2, 
      }
    )
  }

  clickIfNotVisible(conditionLocator){
    cy.get(conditionLocator.locator).then(($btn) =>{
        if(!$btn.is('.visible')){
          this.click()
        }
    })
  }

  scroll(){
    cy.get(this.locator),should('have.length',1).scrollIntoView({
      force:true,
    })
    return this
  }

  doubleClick(){
    cy.get(this.locator).dbclick({
      force: true,
    })
    //cy.get(this.locator).rightclick()
  }

  rightclick() {
    cy.get(this.locator).rightclick()
  }

  isDisplayed(){
    cy.get(this.locator)
    .scrollIntoView({
      force: true,
    })
    .should('be.visible')
  }

  clickIfContainsText(text){
    cy.get(this.locator + `.contains(${text})`)
    .should('exist', "Element doesn't exist")
    .invoke('show')
    .click(
      {
        force: true,
      },
      {
        retrices: 2,
      }
    )
  }

  isDisabled(){
    cy.get(this.locator).should('have.class', 'disabled')
  }

  isEnabled(){
    cy.get(this.locator).should('not.have.class', 'disabled')
  }

  clickWhenVisible(){
    cy.get(this.locator).should('be.visible').click()
  }

  attachFile(filePath){
    cy.get(this.locator)
    .should('be.visible')
    .attachFile('username-fixture.csv',{
      subjectType: 'drag-n-drop'
    })
  }
}