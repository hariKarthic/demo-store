//stuff needed for express server
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;


//stuff needed for rendering
import {renderToString} from 'react-dom/server';

const cheerio = require('cheerio');
const template = require('./template');
import * as Components from "../src/components";

//honestly ... why??
const React = require('react');

//webpack stuff
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackConfig = require('../config/webpack.config.dev');
const webpackCompiler = webpack(webpackConfig);

//TODO: set up express.static();
/* app.use(express.static(path.join('../public')))*/
const app = express();
app.set('port', process.env.PORT || PORT);
app.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath
}));

const fetchWrappers = ($) => {
    const wrapperNodes = $("[data-component]");
    return wrapperNodes;
};
const renderComponents = (wrapperNodes, $) => {
    wrapperNodes.map((index, element) => {
        const compName = $(element).data('component');
        const reactElement = React.createElement(Components[compName]);
        const htmlString = renderToString(reactElement)
        $(element).html(htmlString);
    });
}

const logger = (req, res, next) => {
    let ts = Date.now();
    console.log("Requested " + req.path + " at " + ts);
    next();
};

app.use(logger);

app.listen(app.get('port'), () => {
    console.log("Dev Server has  started on PORT::", app.get('port'));
});


app.get('/', (req, res) => {

    //res.send("Hello there... Mindy!!!");
    //  const headerString = ReactDOMServer.renderToString("Wow");

    //TODO: Make API call  to AEM to fetch template, template is hardcoded now.

    //using cheerio to parse the HTML , as different react apps have to be added to different placeholders
    const $ = cheerio.load(template());

    const wrapperNodes = fetchWrappers($);
    if (wrapperNodes) {
        renderComponents(wrapperNodes, $);
    }
    // const reactElement = React.createElement(<Header/>)
    // const htmlString = renderToString(React.createElement(Header));
    //
    // $("[data-component]").html(htmlString);
    res.send($.html());


});



