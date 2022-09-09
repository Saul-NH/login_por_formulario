export default class Container {
    constructor() {
        this.content = [];
    }

    getAll() {
        return this.content;
    }

    buildId(content) {
        try {
            if (content.length === 0) {
                return 1;
            } else {
                content.sort((a, b) => (a._id > b._id ? 1 : -1));
                return content[content.length - 1]._id + 1;
            }
        } catch (error) {
            console.error(error);
        }
    }
}
