const Transaction = require('../models/Transaction');

exports.Insights=(req, res) => {
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
          const totalSale = transactions.reduce((sum, item) => sum + Number(item.price), 0);
          const soldItems = transactions.filter((item) => item.sold).length;
          const unsoldItems = transactions.length - soldItems;
          res.status(200).json({
              totalSale,
              soldItems,
              unsoldItems
          });
      })
      .catch((error) => {
          res.status(500).json({ error: error.message });
      });
};
