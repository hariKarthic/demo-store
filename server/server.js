const ReactDOMServer = require('react-dom/server');
const template = require('./template');
const React = require('react');
const express = require('express');
const bodyParser = require('body-parser');
const Header = require('../src/components/Header');
const cheerio = require('cheerio');
const PORT = 3000;
const app = express();



//TODO: set up express.static();
/* app.use(express.static(path.join('../public')))*/

app.set('port', process.env.PORT || PORT);

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

    const htmlString = ReactDOMServer.renderToString("Wowza")

    $("[data-component]").html(htmlString);
    res.send($.html());


});



