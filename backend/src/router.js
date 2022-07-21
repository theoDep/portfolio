const express = require("express");

const { TechController, ProjectController } = require("./controllers");

const router = express.Router();

router.get("/techs", TechController.browse);
router.get("/techs/:id", TechController.read);
router.put("/techs/:id", TechController.edit);
router.post("/techs", TechController.add);
router.delete("/techs/:id", TechController.delete);

router.get("/projects", ProjectController.browse);
router.get("/projects/:id", ProjectController.read);
router.put("/projects/:id", ProjectController.edit);
router.post("/projects", ProjectController.add);
router.delete("/projects/:id", ProjectController.delete);

module.exports = router;
