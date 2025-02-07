const axios = require("axios");
const Transaction=require('../models/Transaction');

exports.Initialize=(req, res) => {
    axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json")
        .then((response) => {
            Transaction.deleteMany({}).then((success)=>{
                if(success){
                    Transaction.insertMany(response.data)
                        .then(() => {
                            res.status(200).json({ message: "Database initialized with seed data" });
                        })
                        .catch((error) => {
                            res.status(500).json({ error: error.message });
                        });
                }
            }).catch((err)=>{console.log(err)})
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
};






