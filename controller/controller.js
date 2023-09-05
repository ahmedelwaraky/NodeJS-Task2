let courses = require("../courses/courses");

const getALlCourse = (req, res) => {
  res.status(201).json(courses);
};

const getCourse = (req, res) => {
  const id = req.params.id;
  const course = courses.find((course) => course.id == id);
  if (!course) {
    return res.status(404).json({ msg: "Course Not Found" });
  }
  res.json(course);
};

const createCourse = (req, res) => {
  //validate title
  if (!req.body.title) {
    return res.status(400).json({ msg: "Title is not  requored" });
  }
  //validate body
  if (!req.body.price) {
    return res.status(400).json({ msg: "body is not  requored" });
  }
  courses.push({ id: courses.length + 1, ...req.body });
  res.status(201).json(courses);
};

const updateCourse = (req, res) => {
  const id = +req.params.id;
  let course = courses.find((course) => course.id == id);
  if (!course) {
    return res.status(404).json({ msg: "Course Not Found" });
  }
  course = { ...course, ...req.body };
  res.status(201).json(course);
};

const deleteCourse = (req, res) => {
  const id = +req.params.id;
  let course = courses.find((course) => course.id == id);
  courses = courses.filter((course) => course.id != id);
  res.status(200).json({ success: true });
};

module.exports = {
  getALlCourse,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
