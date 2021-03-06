const { argv } = require('yargs');
const { config } = require('./wdio.sauce.shared');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    deviceName: 'Samsung Galaxy S([78]|(10|20)).*',
    automationName: 'UiAutomator2',
    app: 'storage:filename=Android.SauceLabs.Mobile.Sample.app.2.4.0.apk',
    appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    platformName: 'Android',
    idleTimeout: 180,
    cacheId: new Date().getTime(),
    noReset: true,
    autoGrantPermissions: true,
    orientation: 'PORTRAIT',
    newCommandTimeout: 180,
    language: argv.language || 'en',
    locale: argv.language || 'en',
    build: 'sample-app-mobile',
    name: 'Sample App Test Name',
  },
];

// =============================================
// Max instances of the same device in the cloud
// =============================================
config.maxInstances = 5;

exports.config = config;
