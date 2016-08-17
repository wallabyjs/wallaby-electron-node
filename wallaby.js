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
      // to allow `require`-ing local node modules
      // https://github.com/electron/electron/issues/11
      require('module').globalPaths.push(require('path').join(process.cwd(), 'node_modules'));
      
      window.expect = chai.expect;
    },

    debug: true

  };
};
