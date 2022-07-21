const AbstractManager = require("./AbstractManager");

class ProjectTechManager extends AbstractManager {
  static table = "projectTech";

  insert(projectTech) {
    let questionMarks = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < projectTech.tech.length; i++) {
      questionMarks.push("(?, ?)");
    }
    questionMarks = questionMarks.join(", ");
    return this.connection.query(
      `insert into ${ProjectTechManager.table} (project_id, tech_id) values ${questionMarks}`,
      [...projectTech.techs]
    );
  }

  update(projectTech) {
    return this.connection.query(
      `update ${ProjectTechManager.table} set name = ? where id = ?`,
      [projectTech.name, projectTech.id]
    );
  }
}

module.exports = ProjectTechManager;
