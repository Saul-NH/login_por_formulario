import path from 'path';
import express from 'express';
import socket from './utils/socket.js'
const __dirname = path.resolve(path.dirname(''));

import messagesRouter from './routes/messages.routes.js'
import productsRouter from './routes/products.routes.js'
import productsTestRouter from './routes/productsTest.routes.js'

const app = express();

app.use(express.json())
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(__dirname + '/public'))



app.get('/', (req, res) => { res.render('index')})
app.use('/api/products-test', productsTestRouter)
app.use('/api/messages', messagesRouter);
app.use('/api/products', productsRouter);


//Socket server
const server = socket(app)



export default server;