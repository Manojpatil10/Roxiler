const Transaction = require('../models/Transaction');

exports.Piechart=(req, res) => {
  const { month } = req.query;

  if (!month) {
      return res.status(400).json({ error: "Month is required." });
  }

  Transaction.find({
      $expr: {
          $eq: [{ $month: "$dateOfSale" }, Number(month)]
      }
  })
      .then((transactions) => {
          const categories = {};
          transactions.forEach((item) => {
              if (!categories[item.category]) categories[item.category] = 0;
              categories[item.category]++;
          });

          res.status(200).json(categories);
      })
      .catch((error) => {
          res.status(500).json({ error: error.message });
      });
};
