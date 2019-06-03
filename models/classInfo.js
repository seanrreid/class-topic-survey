const db = require('./conn.js');

class ClassInfo {
    constructor(id, name, rank){
        this.id = id;
        this.name = name;
        this.rank = rank;
    }

    static async getAll() {
        try {
            const response = await db.any(`select * from topics inner join class_status on topics.status_id = class_status.id;`);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    // static async add(name, year) {
    //     const query = `INSERT INTO ceos (name, year) VALUES ('${name}', ${year})`;

    //     try {
    //         let response = await db.result(query);
    //         return response;
    //     } catch(err) {
    //         console.log("ERROR", err.message);
    //         return err;
    //     };
    // }
}

module.exports = ClassInfo;