const ListModel = require("../models/ListModel");

exports.CreateList = (req, res) => {
  const UserName = req.headers.UserName;
  const ListTitle = req.body.ListTitle;
  const ListDescription = req.body.ListDescription;
  const ListStatus =
    req.body.ListStatus[0].toUpperCase() +
    req.body.ListStatus.slice(1).toLowerCase();
  const ListCreatedDate = Date.now();
  const ListUpdatedDate = Date.now();

  const PostBody = {
    UserName,
    ListTitle,
    ListDescription,
    ListStatus,
    ListCreatedDate,
    ListUpdatedDate,
  };

  ListModel.create(PostBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      res.status(200).json({ status: "Success", data: data });
    }
  });
};

exports.UpdateList = (req, res) => {
  const UserName = req.headers["UserName"];
  const listId = req.body.id;
  const ListTitle = req.body.ListTitle;
  const ListDescription = req.body.ListDescription;
  const ListUpdatedDate = Date.now();

  const PostBody = { ListTitle, ListDescription, ListUpdatedDate };
  ListModel.updateOne(
    { UserName: UserName, _id: listId },
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

exports.UpdateStatusList = (req, res) => {
  const UserName = req.headers["UserName"];
  const ListStatus =
    req.body.ListStatus[0].toUpperCase() +
    req.body.ListStatus.slice(1).toLowerCase();
  const id = req.body.id;
  const ListUpdatedDate = Date.now();

  const PostBody = { ListStatus, ListUpdatedDate };
  ListModel.updateOne(
    { UserName: UserName, _id: id },
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

exports.DeleteList = (req, res) => {
  const UserName = req.headers["UserName"];
  const listId = req.body.id;

  ListModel.deleteOne({ UserName, _id: listId }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      if (data.deletedCount > 0) {
        res.status(200).send("List information delete successfully");
      } else {
        res.status(200).send("No change occurred");
      }
      //   res.status(200).json({ status: "Success", data: data });
    }
  });
};

exports.ReadList = (req, res) => {
  const UserName = req.headers.UserName;

  ListModel.find(
    { UserName },
    "UserName ListTitle ListDescription ListStatus",
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        res.status(200).json({ status: "Success", data: data });
      }
    }
  );
};

exports.SingleList = (req, res) => {
  const UserName = req.headers.UserName;
  const listId = req.body.id;

  ListModel.find(
    { UserName, _id: listId },
    "ListTitle ListDescription ListStatus",
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        if (data.length > 0) {
          res.status(200).json({ status: "Success", data: data[0] });
        } else {
          res.status(200).send("Sorry! No list found");
        }
      }
    }
  );
};

exports.SearchList = (req, res) => {
  const UserName = req.headers.UserName;
  const searchText = req.body.search;

  ListModel.find(
    { UserName, ListTitle: searchText },
    "ListTitle ListDescription ListStatus",
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        if (data[0]) {
          res.status(200).json({ status: "Success", data });
        } else {
          res.status(401).send("No data found");
        }
      }
    }
  );
};

exports.FilterListByStatus = (req, res) => {
  const UserName = req.headers.UserName;
  const status =
    req.body.status[0].toUpperCase() + req.body.status.slice(1).toLowerCase();

  ListModel.find({ UserName, ListStatus: status }, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Fail", data: err });
    } else {
      res.status(200).json({ status: "Success", data: data });
    }
  });
};

exports.FilterListByDate = (req, res) => {
  const UserName = req.headers.UserName;
  const FromDate = req.body.FromDate;
  const ToDate = req.body.ToDate;

  ListModel.find(
    {
      UserName,
      ListCreatedDate: { $gte: new Date(FromDate), $lte: new Date(ToDate) },
    },
    "UserName ListTitle ListDescription ListStatus",
    (err, data) => {
      if (err) {
        res.status(400).json({ status: "Fail", data: err });
      } else {
        res.status(200).json({ status: "Success", data: data });
      }
    }
  );
};
