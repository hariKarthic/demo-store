const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

//TODO: set up express.static();
/* app.use(express.static(path.join('../public')))*/

app.set('port', process.env.PORT || PORT);

const logger = (req,res,next) => {
    let ts = Date.now();
    console.log("Requested "+req.path+" at "+ts.toDateString());
    next();
};

app.use(logger);

app.listen(app.get('port'), () => {
    console.log("Dev server started on PORT", app.get('port'));
});


app.get('*', (req, res) => {
    res.send("Hello there... Mindy!!!");
})



