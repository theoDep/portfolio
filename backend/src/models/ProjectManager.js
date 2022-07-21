const AbstractManager = require("./AbstractManager");
const ProjectTechManager = require("./ProjectTechManager");
const TechManager = require("./TechManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  findAll() {
    return this.connection.query(`
    SELECT DISTINCT project.id, project.title, project.description, project.image, project.link, project.repo FROM ${ProjectManager.table} INNER JOIN ${ProjectTechManager.table} ON project.id = projectTech.project_id INNER JOIN ${TechManager.table} ON projectTech.tech_id = tech.id`);
  }

  findTechs(projectId) {
    return this.connection.query(
      `SELECT DISTINCT ${TechManager.table}.name from ${ProjectTechManager.table} INNER JOIN ${TechManager.table} ON tech.id = projectTech.tech_id where project_id = ?`,
      [projectId]
    );
  }

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
