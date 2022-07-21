const express = require("express");

const { TechController } = require("./controllers");

const router = express.Router();

router.get("/techs", TechController.browse);
router.get("/techs/:id", TechController.read);
router.put("/techs/:id", TechController.edit);
router.post("/techs", TechController.add);
router.delete("/techs/:id", TechController.delete);

module.exports = router;
