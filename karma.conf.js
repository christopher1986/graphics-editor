/**
 *
 * @link https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai
 * @link https://github.com/joseluisq/karma-jasmine-typescript
 * @link https://yuriburger.net/2017/12/11/better-together-sonarqube-typescript-and-code-coverage/
 */

module.exports = function(config) {
  config.set({
    frameworks: [ 'jasmine', 'karma-typescript' ],
    files: [ 
      { pattern: 'src/**/*.ts' }, 
      { pattern: 'spec/**/*.[sS]pec.ts' }
    ],
    preprocessors: {
      '**/*.ts': [ 'karma-typescript' ]
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
      reports: {
        'lcovonly': {
          'directory': 'coverage',
          'filename': 'lcov.info',
          'subdirectory': 'lcov'
        }
      }
    },
    reporters: [ 'progress', 'karma-typescript' ],
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [ '--no-sandbox' ]
      }
    },
    colors: true,
    autoWatch: false,
    failOnEmptyTestSuite: false
  })
}
