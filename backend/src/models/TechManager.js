const AbstractManager = require("./AbstractManager");

class TechManager extends AbstractManager {
  static table = "tech";

  insert(tech) {
    return this.connection.query(
      `insert into ${TechManager.table} (name) values (?)`,
      [tech.name]
    );
  }

  update(tech) {
    return this.connection.query(
      `update ${TechManager.table} set name = ? where id = ?`,
      [tech.name, tech.id]
    );
  }
}

module.exports = TechManager;
