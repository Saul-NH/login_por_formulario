import path from 'path';
import { SESSION_CONFIG } from './config.js';
const __dirname = path.resolve(path.dirname(''));


import express from 'express';
import socket from './utils/socket.js';
import session from 'express-session';


//Routers
import messagesRouter from './routes/messages.routes.js';
import productsRouter from './routes/products.routes.js';
import productsTestRouter from './routes/productsTest.routes.js';
import loginRouter from './routes/login.routes.js';
import logoutRouter from './routes/logout.routes.js';


//Middlewares
import { checkSession } from './middlewares/checkSession.js';


const app = express();


//Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use('/public', express.static( path.join( __dirname, '/public') ) );

app.use(session(SESSION_CONFIG));




//Routes
app.use('/logout',              logoutRouter);
app.use('/login',               loginRouter);
app.use('/api/messages',        messagesRouter);
app.use('/api/products',        productsRouter);
app.use('/api/products-test',   productsTestRouter);

app.get('/', checkSession, (req, res) => {
    const username = req.session.username;
    res.render('index', { username });
});



//Socket server
const server = socket(app);

export default server;
