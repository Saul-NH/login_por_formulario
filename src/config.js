export const PORT = 8080;

// export const PERSISTENCE_TYPE = 'MEMORY';
// export const PERSISTENCE_TYPE = 'FILE';
export const PERSISTENCE_TYPE = 'MONGO';

export const MONGO_DB = {
    URL: 'mongodb+srv://tester:1234@cluster0.owruzid.mongodb.net/?retryWrites=true&w=majority',
    config: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};