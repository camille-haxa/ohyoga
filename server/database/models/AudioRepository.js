/* eslint-disable camelcase */
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
      `SELECT a.title, a.url, a.image, a.description, c.name AS category FROM ${this.table} AS a JOIN category AS c ON a.category_id=c.id where a.id = ?`,
      [id]
    );
    return row[0];
  }

  // Add - Create
  async create(audio) {
    const { title, url, image, description, category_id } = audio;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, url, image, description, category_id) VALUES (?, ?, ?, ?, ?)`,
      [title, url, image, description, category_id]
    );

    return result.insertId;
  }

  // Destroy -Delete
  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = AudioRepository;
