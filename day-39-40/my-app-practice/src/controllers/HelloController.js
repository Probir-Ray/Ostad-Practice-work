exports.hello = (req, res) => {
  res.status(200).send("Get response");
};

exports.evening = (req, res) => {
  res.status(201).json({ status: "Ok", data: "Country name UAE" });
};
