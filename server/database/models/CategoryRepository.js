const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async browse() {
    const [result] = await this.database.query(
      `select id, name from ${this.table}`
    );

    return result;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT c.name, a.id, a.title, a.image
         FROM ${this.table} AS c  
         LEFT JOIN audio AS a ON c.id = a.category_id 
         WHERE c.name = ?`,
      [id]
    );

    return rows;
  }

  async delete(id) {
    const [row] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return row.affectedRows;
  }
}

module.exports = CategoryRepository;
