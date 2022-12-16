const mongoose = require("mongoose");

const TodoListSchema = mongoose.Schema(
  {
    UserName: { type: String },
    TodoSubject: { type: String },
    TodoDescription: { type: String },
    TodoStatus: { type: String },
    TodoCreateDate: { type: Date },
    TodoUpdateDate: { type: Date },
  },
  { versionKey: false }
);

const TodoListModel = mongoose.model("TodoLists", TodoListSchema);
module.exports = TodoListModel;
