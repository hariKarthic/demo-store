
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

require('ignore-styles');
// require('babel-register')({
//         "presets": [
//             "env",
//             "react"
//         ],
//         "plugins": [
//             "transform-es2015-template-literals",
//             "transform-es2015-spread",
//             "transform-es2015-destructuring"
//         ]
//     }
// );

require('babel-register')({
    presets:['react-app']
});
require('./server.js');
