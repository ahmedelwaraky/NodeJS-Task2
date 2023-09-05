const express = require("express");
const router = express.Router();
const coursesController = require("../controller/controller");

//get all courses
router.get("/", coursesController.getALlCourse);

//get one course
router.get("/:id", coursesController.getCourse);

//Create New Course
router.post("/", coursesController.createCourse);

//Update Course
router.patch("/:id", coursesController.updateCourse);

//delete Course
router.delete("/:id", coursesController.deleteCourse
);

module.exports = router;
