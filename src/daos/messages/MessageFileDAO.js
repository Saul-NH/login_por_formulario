import FileContainer from '../../containers/messages/FileContainer.js';

export default class ProductMemoryDao extends FileContainer {
    constructor(filename) {
        super(filename);
    }
    async add(message) {
        try {
            let messages = await this.readFile();
            message._id = this.buildId(messages);
            message.date = new Date().toLocaleTimeString();

            messages.push(message);
            await this.writeFile(messages);

            return await this.getAll();
        } catch (error) {
            console.error(error);
        }
    }
}
