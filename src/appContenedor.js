import express from 'express';
import exphbs from 'express-handlebars'
import indexRoutes from './routes/index.routes'
import path from 'path'
import { create } from 'express-handlebars';
import morgan from 'morgan';

const app = express();

app.set('views', path.join(__dirname, 'views'));

var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "mainContenedor",
    extname: ".hbs",
})
app.engine(".hbs",hbs.engine);

app.set("view engine", ".hbs");

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))

// Routes
app.use(indexRoutes);

// Static file
app.use(express.static(path.join(__dirname, "public")))

export default app;


/*
app.engine(
    ".hbs",
    exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    extname: ".hbs",
}));

//app.set("view engine", ".hbs")

*/