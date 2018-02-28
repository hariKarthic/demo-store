/*Adding this first so that react-app plugin will know the type of environment*/
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
/*ignoring styles on the server side , as emotionjs is causing issues */
require('ignore-styles');

require('babel-register')({
    presets:['react-app']
});
/*Calling our server file*/
require('./server.js');
