const models = require("../models");

class ProjectController {
  static browse = async (req, res) => {
    try {
      const [response] = await models.project.findAll();
      const rows = [];
      await Promise.all(
        response.map(async (project) => {
          const [techsObjects] = await models.project.findTechs(project.id);
          const techsAsArray = techsObjects.reduce((acc, tech) => {
            acc.push(tech.name);
            return acc;
          }, []);
          // eslint-disable-next-line no-param-reassign
          project.techs = techsAsArray;
          rows.push(project);
        })
      );
      await res.send(rows);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static read = (req, res) => {
    models.project
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const project = req.body;

    // TODO validations (length, format...)

    project.id = parseInt(req.params.id, 10);

    models.project
      .update(project)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res, next) => {
    const project = req.body;

    // TODO validations (length, format...)

    models.project
      .insert(project)
      .then(([result]) => {
        req.body.id = result.insertId;
        next();
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.project
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProjectController;
