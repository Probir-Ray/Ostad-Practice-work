
const TodoListModel = require("../models/TodoListModel");

exports.CreateTodo = (req, res) => {
  const UserName = req.headers.UserName;
  const TodoSubject = req.body.TodoSubject;
  const TodoDescription = req.body.TodoDescription;
  const TodoStatus = "New";
  const TodoCreateDate = Date.now();
  const TodoUpdateDate = Date.now();

  const PostBody = {
    UserName,
    TodoSubject,
    TodoDescription,
    TodoStatus,
    TodoCreateDate,
    TodoUpdateDate,
  };

  TodoListModel.create(PostBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      res.status(200).json({ status: "Success", data: data });
    }
  });
};

exports.SelectTodo = (req, res) => {
  const UserName = req.headers["UserName"];
  TodoListModel.find({ UserName: UserName }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      res.status(200).json({ status: "Success", data: data });
    }
  });
};

exports.UpdateTodo = (req, res) => {
  const UserName = req.headers.UserName;
  const TodoSubject = req.body.TodoSubject;
  const TodoDescription = req.body.TodoDescription;
  const _id = req.body._id;
  const TodoUpdateDate = Date.now();

  const PostBody = { TodoSubject, TodoDescription, TodoUpdateDate };
  TodoListModel.updateOne(
    { UserName: UserName, _id: _id }, { $set: PostBody }, { upsert: true }, (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        res.status(200).json({ status: "Success", data: data });
      }
    }
  );
};

exports.UpdateStatusTodo = (req, res) => {
  const UserName = req.headers.UserName;
  const TodoStatus = req.body.TodoStatus;
  const _id = req.body._id;
  const TodoUpdateDate = Date.now();

  const PostBody = { TodoStatus, TodoUpdateDate };
  TodoListModel.updateOne(
    { UserName: UserName, _id: _id },
    { $set: PostBody },
    { upsert: true },
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        res.status(200).json({ status: "Success", data: data });
      }
    }
  );
};

exports.DeleteTodo = (req, res) => {
  const UserName = req.headers.UserName;
  const _id = req.body._id;

  TodoListModel.deleteOne({ UserName: UserName, _id: _id }, (err, data) => {
    // deleteOne or remove
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      res.status(200).json({ status: "Success", data: data });
    }
  });
};

exports.SelectTodoByStatus = (req, res) => {
  const UserName = req.headers.UserName;
  const TodoStatus = req.body.TodoStatus;

  TodoListModel.find(
    { UserName: UserName, TodoStatus: TodoStatus },
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        res.status(200).json({ status: "Success", data: data });
      }
    }
  );
};

exports.SelectTodoByDate = (req, res) => {
  const UserName = req.headers.UserName;
  const FromDate = req.body.FromDate;
  const ToDate = req.body.ToDate;

  TodoListModel.find(
    {
      UserName: UserName,
      TodoCreateDate: { $gte: new Date(FromDate), $lte: new Date(ToDate) },
    },
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        res.status(200).json({ status: "Success", data: data });
      }
    }
  );
};
