exports.Hello = (req, res) => {
  res.status(200).json({ status: "Ok", Data: "Success" });
};

exports.Greeting = (req, res) => {
  res.status(200).json({ status: "Ok", Data: "Good Afternoon" });
};
