const express = require("express");
const router = express.Router();
const Joi = require("joi");
router.use(express.json());

const courses = [
  { id: 1, name: "HTML" },
  { id: 2, name: "Mastering CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "Mastering React" },
];

router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id == parseInt(req.params.id));
  if (!course) return res.status(404).send("The course with id was not found!");
  res.send(course);
});

router.post("/", (req, res) => {
  const { error } = validateError(req.body.name);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  const course = courses.find((c) => c.id == parseInt(req.params.id));
  if (!course) return res.status(404).send("The course with id was not found!");

  const { error } = validateError(req.body.name);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find((c) => c.id == parseInt(req.params.id));
  if (!course) return res.status(400).send("The course with id was not found!");

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});

function validateError(courseName) {
  const schema = Joi.object({ name: Joi.string().min(5).max(25).required() });
  return schema.validate({ name: courseName });
}

module.exports = router;
