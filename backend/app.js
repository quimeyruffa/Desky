var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const mongoose = require('mongoose');
let url = "mongodb+srv://Desky:desky@desky.pb0ux.mongodb.net/desky?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {
  console.log("Se pudo conectar a la DB");
}).catch ((e) => {
  console.log(e);
  console.log("No se pudo conectar con la DB");
});

const cowork = require("./models/Cowork.model");

const query1 = async (min, max) => {

  const res = await cowork.find({"tipo": {"$elemMatch" : {"$and" :  [{"precio": {"$gte": min}}, {"precio": {"$lte": max}}]}}});
  return res;


};

// query1(5000, 40000).then(x => {
//   console.log(JSON.stringify(x));
// });

const query2 = async (fechaIni, fechaFin) => {
  
  const res = await cowork.find({"tipo": {"$elemMatch" : {"$and" :  [{"fechaIni": {"$gte": new Date(fechaIni)}}, {"fechaFin": {"$lte": new Date(fechaFin)}}]}}});
  return res;

};

// query2("2021-10-13","2021-10-21").then(x => {
//   console.log("query 2");
//   console.log(JSON.stringify(x));
// });

const query3 = async (order) => { //ASC == 1 DESC == -1
  const res = await cowork.find({}).sort({"promedioPuntos": order});
  return res;
  
}

const filtrarRecomendados = () => {

  query3().then((res) => {
    for (const cowork of res) {
      console.log(cowork.promedioPuntos);
    }
  }).catch( e => {
    console.log(e);
  });
}

filtrarRecomendados();

module.exports = app;
