exports.Hello = (req, res) => {
  res.status(200).json({ status: "Ok", data: "Response ok" });
};

exports.greeting = (req, res) => {
  res.status(200).json({ status: "Ok", data: "Good Afternoon" });
};
