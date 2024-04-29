import { LoginPage } from "../../login/pages/login-page" 
import { TestTag } from "../../../constants/test-tags-constants"

const loginPage = new LoginPage()

describe (
    'Shop Suite',
    {
        tags: TestTag.Shop,  
    },

    it(
        'TC: <Shop Page> Validate all credentials on Shop Page are correct <Positive>',
        {
            tags: [
                TestTag.Login,
                TestTag.Smoke,
                TestTag.Regression,
                TestTag.AllTypes,
                TestTag.AllModules,
                TestTag.UI,
            ],
        },
        () => {

        }
    )
    
) 