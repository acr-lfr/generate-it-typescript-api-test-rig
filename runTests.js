const nodemon = require('nodemon');
const path = require('path');
const jest = require('jest-cli/build/cli');
const delay = require('delay');

/**
 * Set any process variables for the server to run
 */
process.env.API_KEY = 'changeme';

/**
 * Start the server
 */
nodemon({
  script: '../build/server.js'
}).on('start', async () => {
  try{
    /**
     * Run the tests
     */
    delay(3000);
    await jest.run(['--runInBand', '--forceExit', '--detectOpenHandles'], process.cwd());
  } catch (e) {
    console.error(e)
  }
  nodemon.emit('quit');
});
