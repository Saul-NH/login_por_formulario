import MongoDBContainer from '../../containers/messages/MongoDBContainer.js';

export default class ProductMongoDBDAO extends MongoDBContainer {
    constructor(model) {
        super(model);
    }

    async add(message) {
        try {
            message.date = new Date().toLocaleTimeString();
            await this.Model.create(message);
            return await this.Model.find().lean();
        } catch (error) {
            console.error(error);
        }
    }
}
