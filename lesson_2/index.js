const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const {PORT} = require('./config/variables');
const users = require("./database/users");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.engine('.hbs', expressHbs({defaultLayout: false}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

app.listen(PORT, () => {
    console.log('App listen', PORT);
});
//////////BASIC GETS//////////////////////
app.get('/', (req, res) => {
    res.render('error');
})
app.get('/ping', ((req, res) => {
    res.json('Pong');
}))
/////////LOGIN/////////////////////////
app.get('/login', ((req, res) => {
    res.render('loginPage', {users});
}))
app.post('/login', ((req, res) => {
    const {email, password} = req.body;
    //console.log(users);

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        res.redirect('/register');
        return;
    }
    res.redirect(`/users/${user}`);
}))
////////////REGISTRATION//////////////////
app.get('/register', (req, res) => {
    res.render('register', {users});
});
app.post('/users', ((req, res) => {
    const {email} = req.body;
    const userFind = users.find(user => user.email === email);

    if (!userFind) {
        users.push(req.body);
        fs.writeFile(path.join(__dirname, 'database', 'users.js'), JSON.stringify(users), (err) => {
            if (err) {
                console.log(err);
                return;
            }

        })
        res.redirect('/users');
        return;
    }
    res.redirect('/error');
}))
////////////////ALL USERS////////////////
app.get('/users', (req, res) => {
    res.render('users', {users});
});
////////////////ONE USER////////////////
app.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params;
    const currentUser = users[user_id];
    if (!currentUser) {
        res.status(404).end('USER NOT FOUND');
        return;
    }
    res.render('currentUser', {currentUser});
});

