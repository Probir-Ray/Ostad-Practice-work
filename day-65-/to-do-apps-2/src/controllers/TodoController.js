const TodoModel = require("../models/TodoModel");

exports.CreateTodo = (req, res) => {
  const UserName = req.headers["UserName"];
  const { Title, Description } = req.body;
  const Status = "New";
  const CreateDate = Date.now();
  const UpdateDate = Date.now();

  const PostBody = {
    UserName,
    Title,
    Description,
    Status,
    CreateDate,
    UpdateDate,
  };

  TodoModel.create(PostBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      res.status(200).json({ status: "Ok", data });
    }
  });
};

exports.SelectTodo = (req, res) => {
  const UserName = req.headers.UserName;
  TodoModel.find(
    { UserName },
    "UserName Title Description Status",
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        res.status(200).json({ status: "Ok", data });
      }
    }
  );
};

exports.UpdateTodo = (req, res) => {
  const UserName = req.headers.UserName;
  const _id = req.body._id;
  const Title = req.body.Title;
  const Description = req.body.Description;
  const UpdateDate = Date.now();

  const PostBody = { Title, Description, UpdateDate };

  TodoModel.updateOne(
    { UserName, _id },
    { $set: PostBody },
    { upsert: true },
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        res.status(200).json({ status: "Ok", data });
      }
    }
  );
};
