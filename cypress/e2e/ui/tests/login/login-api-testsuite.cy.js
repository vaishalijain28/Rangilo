// import AccountApiHelper

import { TestTag } from "../../constants/test-tags-constants";

const accountApiHelper = new AccountApiHelper()

describe (
    'Login Suite',
    {
        tags: TestTag.Login,
    },
    () => {
        const username = Cypress.env('credentials').loginCustomerEmail
        const password = Cypress.env('credentials').genericCustomerPassword
        const invalidUsername = Cypress.env('credentials').invalidStagingUser
        const invalidPassword = Cypress.env('credentials').invalidStagingPassword


        it(
            'It should be able to login using valid credentials <positive> -(POST) -/Account/Login',
            {
                tags: [
                    TestTag.Login,
                    TestTag.Smoke,
                    TestTag.API,
                    TestTag.Regression,
                    TestTag.AllTypes,
                    TestTag.AllModules,
                ],
            },
            () => {
                accountApiHelper.login(
                    {
                        userName: username,
                        password: password,
                    },
                    false
                )

                cy.get('@postResponse').then((postResponse) => {
                    expect(postResponse.status).to.eq(200)
                    expect(postResponse.isOKStatusCode).to.eq(true)
                    expect(postResponse.statusText).to.eq('OK')
                })
            }
        )

        it(
            'It should not be able to login using invalid credentials <negative> - (POST) -/Account/Login',
            {
                tags:[
                    TestTag.Login,
                    TestTag.Smoke,
                    TestTag.API,
                    TestTag.Regression,
                    TestTag.AllTypes,
                    TestTag.AllModules,
                ],
            },
            () => {
                accountApiHelper.login(
                    {
                        userName: invalidUsername,
                        password: invalidPassword,
                    },
                    false
                )
                cy.get('@postResponse').then((postResponse) => {
                    console.log(postResponse.body)
                    expect(postResponse.status).to.eq(401)
                    expect(postResponse.isOKStatusCode).to.eq(false)
                    expect(postResponse.statusText).to.eq('Unauthorized')

                })
            }
        )
    }
)