const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (title, description, image, link, repo) values (?, ?, ?, ?, ?)`,
      [
        project.title,
        project.description,
        project.image,
        project.link,
        project.repo,
      ]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectManager.table} set title = ?, description = ?, image = ?, link = ?, repo = ? where id = ?`,
      [
        project.title,
        project.description,
        project.image,
        project.link,
        project.repo,
        project.id,
      ]
    );
  }
}

module.exports = ProjectManager;
