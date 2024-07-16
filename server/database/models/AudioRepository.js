const AbstractRepository = require("./AbstractRepository");

class AudioRepository extends AbstractRepository {
  constructor() {
    super({ table: "audio" });
  }

  // Browse - Read All
  async readAll() {
    const [rows] = await this.database.query(
      `SELECT a.title, a.url, a.image, a.description FROM ${this.table}`
    );
    return rows;
  }

  // Read
  async read(id) {
    const [row] = await this.database.query(
      `SELECT a.title, a.url, a.image, a.description FROM ${this.table} where id = ?`,
      [id]
    );
    return row[0];
  }

  // Add - Create
  async create(title, url, image, description) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, url, image, description) VALUES (?, ?, ?, ?)`,
      [title, url, image, description]
    );

    return result.insertId;
  }
}

module.exports = AudioRepository;
