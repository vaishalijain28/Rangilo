<refrence types= "cypress" />

   /**
    *  @type {Cypress.PluginConfig}
    */
  
   module.exports = (on, config) => {
    // 'on' is used to hook into various events Cypress emits
    // `congif` is the resolved Cypress config
   }

   // cypress/plugins/index.js
   module.exports = (on, config) => {
    // 'on' is used to hook into various events Cypress emits
    // `congif` is the resolved Cypress config
    require('cypress-grep/src/plugin')(config)
   }

   // index.js inside plugin folder
   const {
    beforeRunHook,
    afterRunHook
   } = require('cypress-mochawesome-reporter/lib')
   const exec = require('child_process').execSync
   module.exports = (on) => {
    on('before:run', async(details) =>{
        console.log('override before:run')
        await beforeRunHook(details)
        // If you are using other than Windows remove below two lines
        // await exec("IF EXIST cypress\\screenshots rmdir /Q /S cypress\\screenshots");
        // await exec("IF EXIST cypress\\reports rmdir /Q /S cypress\\reports");
        
    })



    on('after:run', async() =>{
        console.log('override after:run')
        // If you are using other than Windows remove below line (having await exec)
        /* 
        await exec("npx jrm ./cypress/reports/junitreport.xml ./cypress/reports/junit/*.xml");
         */

        await afterRunHook()
    })
}


 import './commands'
