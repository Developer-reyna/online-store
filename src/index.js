const express = require ("express");
const exphbs  = require('express-handlebars');
const path = require('path');

//initializations
const app = express(); 

//Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
	defaultlayout: 'main',
	partialsDir: path.join(app.get('views'), 'partials'),
	layoutsDir: path.join(app.get('views'), 'layouts'),
	extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Milddleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.listen(3000, () => {
	console.log('Server on port', 3000)
});