import http from 'http';
import axios from 'axios';
import { Server } from 'socket.io';

export default function socket(app) {
    const server = http.createServer(app);
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('Desde server');

        socket.on('saveMessage', (message) => {
            axios({
                method: 'post',
                url: '/api/messages',
                baseURL: 'http://localhost:8080',
                data: message,
            })
                .then((response) => {
                    if (response.status === 200) {
                        io.sockets.emit('refreshChat', response.data);
                    } else {
                        console.log('Fail');
                    }
                })
                .catch((e) => console.error(e));
        });

        socket.on('createProduct', (product) => {
            axios({
                method: 'post',
                url: '/api/products',
                baseURL: 'http://localhost:8080',
                data: product,
            })
                .then((response) => {
                    if (response.status === 200) {
                        io.sockets.emit('refreshProductList', [
                            response.data.product,
                        ]);
                    } else {
                        console.log('Fail');
                    }
                })
                .catch((e) => console.error(e));
        });
    });

    return server;
}
