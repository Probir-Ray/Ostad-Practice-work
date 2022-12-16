exports.hello = (req, res) => {
  res.status(200).json({ status: "Ok", data: "Status Ok" });
};

exports.hi = (req, res) => {
  res.status(200).json({ status: "Ok", data: "Done" });
};
