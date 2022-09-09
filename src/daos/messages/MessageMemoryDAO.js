import MemoryContainer from '../../containers/messages/MemoryContainer.js';

export default class MessageMemoryDao extends MemoryContainer {
    add(message) {
        message._id = this.buildId(this.getAll());
        message.date = new Date().toLocaleTimeString();
        this.content.push(message);
        return this.getAll();
    }
}
