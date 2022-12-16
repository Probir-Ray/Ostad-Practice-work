const EmployeeModel = require("../models/EmployeeModel");

// Insert Employee
exports.InsertEmployee = (req, res) => {
  const reqBody = req.body;
  EmployeeModel.create(reqBody, (err, data) => {
    if (err) res.status(400).send({ status: "Error", data: err });
    else res.status(201).send({ status: "Insert Ok", data: data });
  });
};

// Read Employee
exports.ReadEmployee = (req, res) => {
  EmployeeModel.find({}, "", (err, data) => {
    if (err) res.status(400).send({ status: "Error", data: err });
    else res.status(200).send({ status: "Select Ok", data: data });
  });
};

// Read Single Employee
exports.SingleEmployee = (req, res) => {
  const id = req.params.id;
  EmployeeModel.findOne({ _id: id }, "", (err, data) => {
    if (err) res.status(400).send({ status: "Error", data: err });
    else res.status(200).send({ status: "Select Ok", data: data });
  });
};

// Update Employee
exports.UpdateEmployee = (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const updateData = req.body;

  EmployeeModel.updateOne(query, updateData, (err, data) => {
    if (err) res.status(400).send({ status: "Error", data: err });
    else res.status(200).send({ status: "Update Ok", data: data });
  });
};

// Delete Employee
exports.DeleteEmployee = (req, res) => {
  const id = req.params.id;
  const query = { _id: id };

  EmployeeModel.remove(query, (err, data) => {
    if (err) {
      res.status(400).send({ status: "Error", data: err });
    } else {
      res.status(200).send({ status: "Delete ok", data: data });
    }
  });
};
