const socket = io();
loadFirstData();

const chatForm = document.getElementById('chat');
const createProductForm = document.getElementById('createProductForm');

//On Product Submit Event
createProductForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const product = Object.fromEntries(form.entries());
    
    socket.emit('createProduct', product);
});

//On Message Submit Event
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputChat = new FormData(e.target);
    const message = Object.fromEntries(inputChat);

    socket.emit('saveMessage', buildMessage(message));
});


//Refresh event
socket.on('refreshProductList', (product) => {
    loadDataToTbody(product);
});

socket.on('refreshChat', (message) => {
    loadMessagesToChat(message);
});

socket.on('reloadPage', () => {
    window.location.href = "http://localhost:8080/login" 
})


//Load first data
function loadFirstData() {

    fetch('/api/products')
        .then((data) => data.json())
        .then((products) => {
            loadDataToTbody(products.products);
        })
        .catch((e) => alert(e));

    fetch('/api/messages')
        .then((data) => data.json())
        .then((messages) => {
            console.log('load first data', messages);
            loadMessagesToChat(messages);
        })
        .catch((e) => alert(e));
}

//Load data to products table
function loadDataToTbody(products) {
    console.log('loadDataToTbody', products);
    const tbody = document.getElementById('tbody');

    products.forEach((product) => {
        tbody.innerHTML += `<tr>
                                <td>${product.title} </td>
                                <td>${product.price} </td>
                                <td> <img src="${product.thumbnail}" class="img-thumbnail" alt="thumbnail" style="heitght: 60px; width:60px;"></td>
                            </tr>
                            `;
    });
}


//Load data to chat
function loadMessagesToChat(messages) {
    console.log('loadMessagesToChat', messages);
    const authorSchema = new normalizr.schema.Entity(
        'author',
        {},
        { idAttribute: 'email' }
    );
    const messageSchema = new normalizr.schema.Entity(
        'messages',
        {
            author: authorSchema,
        },
        { idAttribute: '_id' }
    );
    const holdingsSchema = new normalizr.schema.Entity('posts', {
        messages: [messageSchema],
    });

    const desnormalizedMessages = normalizr.denormalize(
        messages.messages.result,
        holdingsSchema,
        messages.messages.entities
    );
    const chat = document.getElementById('messages');
    chat.innerHTML = '';
    desnormalizedMessages.messages.forEach((message) => {
        console.log(message);
        chat.innerHTML += `<br> <b style="color:blue"> ${message.author.email} </b> [<b style="color:maroon">${message.date}</b>]: <i style="color:green">${message.text}</i>`;
    });
}

function buildMessage(message) {
    return (formatedMessage = {
        author: {
            email: message.email,
            name: message.name,
            lastName: message.lastName,
            age: message.age,
            alias: message.alias,
            avatar: message.avatar,
        },
        text: message.message,
    });
}
