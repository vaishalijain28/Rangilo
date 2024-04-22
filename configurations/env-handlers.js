const devCredentials = require('./dev-credentials.json')
const stagingCredentials = require('./staging-credentials.json')
const applicationKeys = require('./application-keys.json')

exports.getEnv = function (envSelected){
    var envList = {
        'testBed1' : buildEnvReference('one', true),
        'testBed2' : buildEnvReference('two', true),
        'testBed3' : buildEnvReference('three', true),
        'testBed4' : buildEnvReference('four', true),
        'testBed5' : buildEnvReference('five', true),
        'testBed6' : buildEnvReference('six', true),
        'testBed7' : buildEnvReference('seven', true),
        'testBed8' : buildEnvReference('eight', true),
        'testBed9' : buildEnvReference('nine', true),
        'testBed10': buildEnvReference('ten', true),
        'dev'      : buildEnvReference('dev', false),
        'staging'  : buildEnvReference('staging', false)
    }
    
    //Setting Staging as default in case it doesn't find any match
    return (envList[envSelected] || envList['staging'])
}

function buildEnvReference(envSelected, isATestBed){
   // var TestBedBasedURL     = 'https://ast-azapp-{isWeb}-dynamic-testbed-{testbednumber}.azurewebsites.net'
    var nonTestBedEnvBasedURL = 'https://{nonTestBedEnv}.rrangiloshop.in'
    var apiReference          = '-api'
    var stripeAPIKey          = applicationKeys.stripeAPIKey


 if(isATestBed)
    {   
        return{
   //     baseURL     :  testBedBasedURL.replace('{testbednumber}', envSelected).replace('-{isWeb}-', '-web-' ),
    //    apiServer   :  testBedBasedURL.replace('{testbednumber}', envSelected).replace('-{isWeb}-', '-api-' ),
        credentials :  buildEnvCredentials('dev'),
        stripeKey   :  stripeAPIKey,
        envName     :  `testbed${envSelected}`
        }

    }

    return {
    baseUrl: nonTestBedEnvBasedURL.replace('{nonTestBedEnv}', envSelected),
    apiServer: nonTestBedEnvBasedURL.replace('{nonTestBedEnv}', envSelected+apiReference),
    credentials : buildEnvCredentials(envSelected),
    stripeKey: stripeAPIKey,
    envName : envSelected
    }
}

function buildEnvCredentials(envSelected){
    var envConfig = {
        'dev'    :  devCredentials,
        'staging':  stagingCredentials
    }

    //Setting Staging as default in case it doesn't find any match
    return (envConfig[envSelected] || envConfig['staging'])
}