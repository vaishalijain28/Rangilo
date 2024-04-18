import {LoginPage} from "../pages/login-page"
import { LandingPage } from "../../landing/pages/landing-page"
import { TestTag } from "../../../constants/test-tags-constants"

const loginPage = new LoginPage()
const landingPage = new LandingPage()

describe(
    'Login Suite',
    {
       tags: TestTag.Login,
    },
    function(){
        const customerEmail = Cypress.env('credentials').loginCustomerEmail
        const customerPassword = Cypress.env('credentials').genericCustomerPassword

        // beforeEach(()=>{
        //    // cy.clearAllBrowserData()
        //     landingPage.navigateToLoginPage()
        // })
    

     it(
        'TC:001 (Login) Verify Successful customer login <Positive>',
        {
            tags: [
                TestTag.Login,
                TestTag.Smoke,
                TestTag.Regression,    
                TestTag.AllTpes,
                TestTag.AllModules,
                TestTag.UI,
            ],
        },
        function() {
        loginPage.login({
            username: customerEmail,
            password: customerPassword,
            })
        }

     )
    const wrongEmails = require('../../../../../fixtures/invalid-emails-fixture.json')
    wrongEmails.forEach((email) => {
        it(
            `TC:002 -(Login) Vaildate email field doesnt accept invalid format in the login form : ${email} <negative>`,
            {
                tags: [
                    TestTag.Login,
                    TestTag.Smoke,
                    TestTag.Regression,
                    TestTag.AllTpes,
                    TestTag.AllModules,
                    TestTag.UI,
                ],
            },
            ()=> {
                loginPage.loginButton.click()
                loginPage.usernameInput.type(email)
                loginPage.passwordInput.click()
                loginPage.usernameErrorEmailFormatLabel.hasText(
                    'Invalid Email Format'
                )
            }
        )
    })

    it(
        `TC: 003 -(Login) Validate email and password are required fields in the login form <positive> `,
        {
            tags: [
                TestTag.Login,
                TestTag.Regression,
                TestTag.AllTpes,
                TestTag.AllModules,
                TestTag.UI,
            ],
        },
        () => {
            loginPage.loginButton.click()
            loginPage.loginButton.click()
            loginPage.usernameErrorEmailRequiredLabel.hasText(
                'Email Address Required'
            )
            loginPage.passwordErrorLabel.hasText('Password Required')
        }
    )

    it(
        `TC: 004 -(Login) Validate that the system rejects Login with invalid credentials <negative> `,
        {
            tags: [
                TestTag.Login,
                TestTag.Regression,
                TestTag.AllTpes,
                TestTag.AllModules,
                TestTag.UI,
            ],
        },
        () => {
            loginPage.loginButton.click()
            loginPage.usernameInput.type('tester@gmail.com')
            loginPage.passwordInput.type('test1234')
            loginPage.loginButton.click()
            cy.contains(
                'You have entered invalid username or password. Verify your information and try again later'
            )
        }
    )


    it(
        `TC: 005 -(Login) Validate that the system can logout successfully <positive> `,
        {
            tags: [
                TestTag.Login,
                TestTag.Smoke,
                TestTag.Regression,
                TestTag.AllTpes,
                TestTag.AllModules,
                TestTag.UI,
            ],
        },
        () => {
            loginPage.login({
                username: customerEmail,
                password: customerPassword,
            })
            loginPage.logoutByUI()
            loginPage.verifyIfPageLoaded()
            cy.contains(
                'WE HAVE THE BEST PRICE THE BEST PRODUCT '
            )
             
        }
    )
 }

)
    
