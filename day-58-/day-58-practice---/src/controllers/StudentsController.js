const StudentsModel = require("../models/StudentsModel");

exports.InsertStudent = (req, res) => {
  const reqBody = req.body;
  StudentsModel.create(reqBody, (err, data) => {
    if (err) res.status(400).send({ status: "Error", data: err });
    else res.status(201).send({ status: "Insert Successfully", data: data });
  });
};

exports.ReadStudents = (req, res) => {
  StudentsModel.find({}, "Name Roll Mobile", (err, data) => {
    if (err) res.status(400).send({ status: "Error", data: err });
    else res.status(201).send({ status: "Select Students", data: data });
  });
};

exports.UpdateStudents = (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const updateData = req.body;
  StudentsModel.updateOne(query, updateData, (err, data) => {
    if (err) res.status(400).send({ status: "Error", data: err });
    else res.status(201).send({ status: "Update Students", data: data });
  });
};

exports.DeleteStudnt = (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  StudentsModel.remove(query, (err, data) => {
    if (err) res.status(404).send({ status: "Not found", data: err });
    else res.status(202).send({ status: "Delete Students", data: data });
  });
};
