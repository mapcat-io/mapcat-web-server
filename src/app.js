const express = require('express');
const path = require('path');
var exphbs  = require('express-handlebars');

const dcma = require('./routes/dcma');
const index = require('./routes/index');
const merchants = require('./routes/merchants');
const privacy = require('./routes/privacy');
const terms = require('./routes/terms');

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
app.use('/dcma', dcma);
app.use('/merchants', merchants);
app.use('/privacy', privacy);
app.use('/terms', terms);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
