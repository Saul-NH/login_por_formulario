import { schema, normalize } from 'normalizr';

const authorSchema = new schema.Entity('author', {}, { idAttribute: 'email' });
const messageSchema = new schema.Entity(
    'messages',
    {
        author: authorSchema
    },
    { idAttribute: '_id'}
);
const holdingsSchema = new schema.Entity('posts',{
    messages: [messageSchema]
})

export const normalizer = (data) => {
    return normalize(data, holdingsSchema);
};