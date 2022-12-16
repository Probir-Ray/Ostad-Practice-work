exports.helloGet = (req, res) => {
  res.status(200).json({ status: "Ok", data: "Status is ok" });
};

exports.greeting = (req, res) => {
  res.status(200).json({ status: "Greeting", data: "Hi, Good Evening" });
};
