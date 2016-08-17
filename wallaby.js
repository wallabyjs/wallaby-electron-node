module.exports = wallaby => {
  return {
    files: [
      {pattern: 'node_modules/chai/chai.js', instrument: false},
      'src/**/*.js'
    ],

    tests: [
      'test/**/*Spec.js'
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    env: {
      kind: 'electron',
      options: {
        webPreferences: {
          nodeIntegration: true
        }
      }
    },

    testFramework: 'mocha',

    setup: () => {
      window.expect = chai.expect;
    },

    debug: true

  };
};
