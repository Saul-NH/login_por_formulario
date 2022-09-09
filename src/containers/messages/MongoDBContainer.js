export default class MongoDBContainer {
    constructor(model) {
        this.Model = model;
    }

    async getAll() {
        try {
            return await this.Model.find().lean();
        } catch (error) {
            console.error(error);
        }
    }
}
