import MongoStore from 'connect-mongo';

export const PORT = 8080;

export const PERSISTENCE_TYPE = 'MEMORY';
// export const PERSISTENCE_TYPE = 'FILE';
// export const PERSISTENCE_TYPE = 'MONGO';

export const MONGO_DB = {
    URL: 'mongodb+srv://tester:<password></password>@cluster0.owruzid.mongodb.net/?retryWrites=true&w=majority',
    config: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};


export const SESSION_CONFIG = {
    store: MongoStore.create({
        mongoUrl: MONGO_DB.URL,
        advancedOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        ttl: 1000 * 60,
        autoRemove: 'native',
        
    }),
    cookie: { maxAge: 1000 * 60, httpOnly: false },
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    rolling: true,
    
}