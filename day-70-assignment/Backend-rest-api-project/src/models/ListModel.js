const mongoose = require("mongoose");

const ListSchema = mongoose.Schema(
  {
    UserName: { type: String },
    ListTitle: { type: String },
    ListDescription: { type: String },
    ListStatus: { type: String },
    ListCreatedDate: { type: Date },
    ListUpdatedDate: { type: Date },
  },
  { versionKey: false }
);

const ListModel = mongoose.model("Lists", ListSchema);
module.exports = ListModel;
