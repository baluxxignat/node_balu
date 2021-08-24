const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

// HBS
const app = express();
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({ defaultLayout: false }));
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const { loginRouter, userRouter, welcomeRouter } = require('./routes');

app.get('/ping', (req, res) => res.json('Pong'));

app.use('/', welcomeRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
