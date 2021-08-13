import { browser, Config } from "protractor";
import * as jasmineReporters from "jasmine-reporters";

export const config: Config = {

    directConnect: true,
    restartBrowserBetweenTests: false,
    framework: 'jasmine2',

    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: 'http://jacekokrojek.github.io/jak-to-zrobic-w-js',
    params: { username: 'admin', password: 'admin' },

    capabilities: {
        browserName: "chrome",
        /* uncomment to set additional browser parameters 
        chromeOptions: {
            args: ['--no-sandbox'],
            prefs: {
                'plugins.always_open_pdf_externally': true,
                'download': {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': process.cwd() + "/data/downloads"
                },
            },
        }, */
    },

    specs: [
        "minimal.spec.ts",
        "admin.spec.ts"
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();

        /* Uncomment to enable junit reporting
        var junitReporter = new jasmineReporters.JUnitXmlReporter({
            savePath: 'output/',
            consolidateAll: false
        });
        jasmine.getEnv().addReporter(junitReporter); */
    },

    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },

};
