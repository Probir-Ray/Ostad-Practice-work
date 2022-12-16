const StudentModel = require("../models/StudentsModel");

// CRUD
// C = Create
exports.InsertStudent = (req, res) => {
  const reqBody = req.body;
  StudentModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Error!", data: err });
    } else {
      res.status(200).json({ status: "Ok", data: data });
    }
  });
};

// R = Read
exports.ReadStudent = (req, res) => {
  const query = {};
  //   const projection = "Name Roll Class";
  const projection = "";
  StudentModel.find(query, projection, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Error!", data: err });
    } else {
      res.status(200).json({ status: "Ok", data: data });
    }
  });
};

// U = Update
exports.UpdateStudent = (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const updateData = req.body;
  StudentModel.updateOne(query, updateData, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Error!", data: err });
    } else {
      res.status(200).json({ status: "Ok", data: data });
    }
  });
};

// D = Delete
exports.DeleteStudent = (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  StudentModel.remove(query, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Error!", data: err });
    } else {
      res.status(200).json({ status: "Success", data: data });
    }
  });
};
