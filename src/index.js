const express = require('express');
const morgan = require('morgan');
const app = express();



// SETTINGS
app.set('App name', 'Express Tutorial');

app.set('port', 8500);
app.set('views', './src/views')
app.set('view engine', 'ejs');

// MIDDLEWARES
// Son funciones que manejan peticiones antes de que lleguen a su ruta original
// Todos los middlewares son ejecutados con app.use()
app.use(express.json());
app.use(morgan('dev'));


// ROUTES
// app.all('/user', (req, res, next) => {
//       console.log('Por aquí paso');
//       // res.send("finish")
//       next();
// })

app.get('/', (req, res) => {
      const data = [
            { name: 'Carlos', age: 20 },
            { name: 'Johan', age: 21 },
            { name: 'Arianna', age: 21 }
      ];

      res.render('index.ejs', { data });
});

app.get('/about', (req, res) => {
      res.send("<h2>About</h2>");
});

app.get('/contact', (req, res) => {
      res.send("<h2>Contact</h2>");
});

app.get('/users', (req, res) => {
      res.json([
            {
                  firstname: "Cameron",
                  lastname: "Howe"
            },
            {
                  firstname: "Carlos",
                  lastname: "Quesada"
            }
      ]);
});

app.get('/user', (req, res) => {
      res.json({
            firstname: "Cameron",
            lastname: "Howe"
      });
});



app.use(express.static('src/public'));

app.listen(app.get('port'), (req, res) => {
      console.log(app.get('App name'));
      console.log(`Listen on port: ${app.get('port')}`);
});

