import { AllCategoriesPage } from "../pages/all-categories-pages"
import { TestTag } from "../../../constants/test-tags-constants"

const allCategoriesPage = new AllCategoriesPage()


describe(
    'All Categories Suite',
    {
        tags: TestTag.AllCategories,  
    },
    ()=>{
        beforeEach(()=>{
            cy.visit('/entry')
            cy.clearAllBrowserData()
        })

        it(
            'TC: <All Categories> Validate that credentials on All CAtegories Page are correct <positive>', 
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
            () =>{
                
            }
        )
    }
    
    
) 