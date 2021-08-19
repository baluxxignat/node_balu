const  express = require('express');
const expressHbs = require('express-handlebars');
const  path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.set ('view engine', '.hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}));
app.set ('view', path.join(__dirname, 'static'));

app.listen(5000, () => {
    console.log('App listen 5000');
});

app.get('/ping', ((req, res) => {
    res.json ('Pong');
}))