const models = require("../models");

class ProjectTechController {
  static browse = (req, res) => {
    models.projectTech
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.projectTech
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
    const projectTech = req.body;

    // TODO validations (length, format...)

    projectTech.id = parseInt(req.params.id, 10);

    models.projectTech
      .update(projectTech)
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

  static add = (req, res) => {
    const techs = req.body.tech.reduce((acc, tech) => {
      acc.push(req.body.id);
      acc.push(tech.id);
      return acc;
    }, []);
    req.body.techs = techs;
    const projectTech = req.body;

    models.projectTech
      .insert(projectTech)
      .then(() => {
        res.status(201).send({ ...projectTech });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.projectTech
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

module.exports = ProjectTechController;
