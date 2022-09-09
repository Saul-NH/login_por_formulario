import fs from 'fs'
export default class FileContainer {
    
    constructor(filename) {
        this.filename = filename;
    }
    
    getAll() {
        try {
            return this.readFile();
        } catch (error) {
            console.error(error);
        }
    }

    async readFile() {
        try {
            return JSON.parse(await fs.promises.readFile(this.filename, 'utf-8'));
        } catch (error) {
            console.error(error);
        }
    }
    
    async writeFile(content) {
        try {
            await fs.promises.writeFile(this.filename, JSON.stringify(content));
        } catch (error) {
            console.error(error);
        }
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