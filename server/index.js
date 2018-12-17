const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const exphbs = require('express-handlebars')
const handlebars = require('handlebars')
const path = require('path')

<<<<<<< HEAD

const config = require('./config/config')
const routes = require('./routes')
=======
// const Mongoose = require('./db')
const config = require('./config/config')

// Mongoose.getSingleton()
//   .then(() => {
//     console.log("Database connected successfully.")
//   })

const indexRouter = require('./routes/index')
>>>>>>> eeb358961babcf37acc2a50a7e173951866730b3

const app = express()
app.use('/', indexRouter)

app.use(routes)

app.use(morgan(config.morganLevel))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'views')))
app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main' }))
app.set('view engine', '.hbs')

handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

  switch (operator) {
    case '==':
      return (v1 == v2) ? options.fn(this) : options.inverse(this);
    case '===':
      return (v1 === v2) ? options.fn(this) : options.inverse(this);
    case '!=':
      return (v1 != v2) ? options.fn(this) : options.inverse(this);
    case '!==':
      return (v1 !== v2) ? options.fn(this) : options.inverse(this);
    case '<':
      return (v1 < v2) ? options.fn(this) : options.inverse(this);
    case '<=':
      return (v1 <= v2) ? options.fn(this) : options.inverse(this);
    case '>':
      return (v1 > v2) ? options.fn(this) : options.inverse(this);
    case '>=':
      return (v1 >= v2) ? options.fn(this) : options.inverse(this);
    case '&&':
      return (v1 && v2) ? options.fn(this) : options.inverse(this);
    case '||':
      return (v1 || v2) ? options.fn(this) : options.inverse(this);
    default:
      return options.inverse(this);
  }
})

app.listen(config.port, () => console.log('Listening on ' + config.port))


