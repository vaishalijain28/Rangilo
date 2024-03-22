const { defineConfig } = require('cypress')
const { getEnv } = require('./configurations/env-handlers')
// const {
//   beforeRunHook, 
//   afterRunHook,
// } = require('cypress-mochawesome-reporter/lib')


module.exports = defineConfig({
  waitForAnimations: false,
  video: false,
  chromeWebSecurity: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled:
    'cypress-mochawasome-reporter, mocha-junit-reporter,mochawesome',
    cypressMochawesomeReporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'Test Suite Report',
      embeddedScreenshots: true,
      inlineAssests: true,
    },
    // mochaJunitReporterReporterOptions: {
    //   mochaFile: 
    
    // }
     mochawesomeReporterOption:{
      reporterDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  modifiedObstructiveCode: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  projectId: 'h151vf',
  defaultCommandTimeout: 18000,
  requestTimeout: 15000,
  retrices: 1,
  pageLoadTimeout: 40000,
  scollBehavior: 'center',
 // downloadsFolder: ''
 e2e: {
 // baseUrl:'https://rrangiloshop.in/',
  setupNodeEvents(on, config) {
    const currentEnv = getEnv(`${config.env.envSelected}`)
    config.baseUrl = currentEnv.baseUrl
    config.env.api_server = currentEnv.apiServer
    config.env.credentials = currentEnv.credentials
    config.env.stipe_api_key = currentEnv.stipe_api_key

    on('before:run' , async(details) =>{
      console.log('override before:run')
      await beforeRunHook(details)
    })

    on('after:run' , async() =>{
      console.log('override after:run')
      await afterRunHook()
    })

   // require('@cypress/grep/src/plugin')(config);
    return config;
  },
  excludeSpecPattern: '**/!(*.cy).js',
  specPattern: 'cypress/e2e/**/*.cy.js',
 },

})

