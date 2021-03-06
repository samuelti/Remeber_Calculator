const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sequelize = require('./config/config');
//const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

var myStore = new SequelizeStore({
  db: sequelize,
});

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: myStore,
};

app.use(session(sess));

myStore.sync();

//const hbs = exphbs.create({ helpers });
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var publicPath = path.join(__dirname, 'public');
console.log('\nPublic Path', publicPath);

app.use(require('./routes'));


  app.listen(PORT, () => {
    console.log('Now listening')
    sequelize.sync({force:false})
  });