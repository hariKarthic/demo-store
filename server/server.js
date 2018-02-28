
const template = require('./template');
const React = require('react');
const express = require('express');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const PORT = 3000;
const app = express();
import {renderToString} from 'react-dom/server';
import * as Components from "../src/components";

//TODO: set up express.static();
/* app.use(express.static(path.join('../public')))*/

app.set('port', process.env.PORT || PORT);


const fetchWrappers = ($) => {
    const wrapperNodes = $("[data-component]");
    return wrapperNodes;
};
const renderComponents = (wrapperNodes,$) =>{
    wrapperNodes.map((index,element) =>{
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
    const $ = cheerio.load(template());

    const wrapperNodes = fetchWrappers($);
    if (wrapperNodes) {
        renderComponents(wrapperNodes,$);
    }

    // const reactElement = React.createElement(<Header/>)
    // const htmlString = renderToString(React.createElement(Header));
    //
    // $("[data-component]").html(htmlString);
    res.send($.html());


});



