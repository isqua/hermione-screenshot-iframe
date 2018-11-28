const GRID_URL = process.env.GRID_URL;
const BASE_URL = process.env.BASE_URL || 'https://isqua.github.io/hermione-screenshot-iframe/test/nooffset/';
const REPORT_PATH = process.env.REPORT_PATH;

module.exports = {
    retry: 0,

    gridUrl: GRID_URL,
    baseUrl: BASE_URL,

    sets: {
        desktop: {
            files: [
                'tests/*.hermione.js'
            ],
            browsers: [
                'chrome'
            ]
        }
    },

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                version: 67
            },

            windowSize: {
                width: 1280,
                height: 1024
            }
        }
    },

    plugins: {
        'html-reporter/hermione': {
            enabled: true,
            defaultView: 'all',
            path: REPORT_PATH
        }
    }
};
