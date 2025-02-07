const Transaction = require('../models/Transaction');

exports.DataTable=(req, res) => {
  const { search = "", page = 1, perPage = 10, month } = req.query;

  if (!month) {
      return res.status(400).json({ error: "Month is required." });
  }

  const regex = new RegExp(search, "i");
  const query = {
      $and: [
          {
              $or: [
                  { title: { $regex: regex } },
                  { description: { $regex: regex } },
                  { price: { $regex: regex } },
              ]
          },
          {
              $expr: {
                  $eq: [{ $month: "$dateOfSale" }, Number(month)]
              }
          }
      ]
  };

  Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(Number(perPage))
      .then((transactions) => {
          res.status(200).json(transactions);
      })
      .catch((error) => {
          res.status(500).json({ error: error.message });
      });
};
