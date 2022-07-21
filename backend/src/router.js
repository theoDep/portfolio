const express = require("express");

const {
  TechController,
  ProjectController,
  ProjectTechController,
} = require("./controllers");

const router = express.Router();

router.get("/techs", TechController.browse);
router.get("/techs/:id", TechController.read);
router.put("/techs/:id", TechController.edit);
router.post("/techs", TechController.add);
router.delete("/techs/:id", TechController.delete);

router.get("/projects", ProjectController.browse);
router.get("/projects/:id", ProjectController.read);
router.put("/projects/:id", ProjectController.edit);
router.post("/projects", ProjectController.add, ProjectTechController.add);
router.delete("/projects/:id", ProjectController.delete);

router.get("/projectsTechs", ProjectTechController.browse);
router.get("/projectsTechs/:id", ProjectTechController.read);
router.put("/projectsTechs/:id", ProjectTechController.edit);
router.post("/projectsTechs", ProjectController.add, ProjectTechController.add);
router.delete("/projectsTechs/:id", ProjectTechController.delete);

module.exports = router;
