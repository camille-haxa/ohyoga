const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  // Browse - Read All
  async readAll() {
    const [rows] = await this.database.query(
      `SELECT u.name, u.email, u.password, r.name AS role FROM ${this.table} AS u JOIN role AS r ON u.role_id=r.id`
    );
    return rows;
  }

  // Read
  async read(id) {
    const [row] = await this.database.query(
      `SELECT u.name, u.email, u.password, r.name AS role FROM ${this.table} AS u JOIN role AS r ON u.role_id=r.id WHERE u.id=?`,
      [id]
    );
    return row[0];
  }

  // Add - Create
  async create(name, email, password) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, email, password) VALUES (?, ?, ?)`,
      [name, email, password]
    );

    return result.insertId;
  }
}

module.exports = UserRepository;
