const express = require('express');
const config = require('./config/application.config.js');

const app = express();

app.use(express.static('public'));
app.set('views', `${__dirname}/server/views`);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

require(`${__dirname}/server/routes`)(app, config);

app.listen(config.APP_SERVER_PORT_NO, () => console.log('App listening on port:', config.APP_SERVER_PORT_NO));

module.exports = app;
