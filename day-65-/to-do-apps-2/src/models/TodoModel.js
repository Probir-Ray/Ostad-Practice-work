const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    UserName: { type: String },
    Title: { type: String },
    Description: { type: String },
    Status: { type: String },
    CreateDate: { type: Date },
    UpdateDate: { type: Date },
  },
  { versionKey: false }
);

const TodoModel = mongoose.model("todos", TodoSchema);
module.exports = TodoModel;
