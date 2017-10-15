const express = require('express');
const path = require('path');
var exphbs  = require('express-handlebars');

const index = require('./routes/index');

const app = express();

app.engine('.hbs', exphbs({
  extname: '.hbs',
  layoutsDir: 'src/views/layouts/',
  partialsDir: 'src/views/partials/',
  defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'))

app.use('/', index);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
