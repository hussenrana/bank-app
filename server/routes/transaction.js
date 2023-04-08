const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

router.get("/", async function (req, res) {
  let transactions = await Transaction.find({})
  res.send(transactions)
});

router.post("/transaction", async function (req, res) {
  let amount = req.body.amount
  let category = req.body.category
  let vendor = req.body.vendor
  let transaction = new Transaction({amount, category, vendor})
  await transaction.save();
  res.send("Transaction added")
  
})

router.delete("/:id", async function (req, res) {
    let id = req.params.id;
    let deleted = await Transaction.findByIdAndDelete(id)
    res.send(deleted)
  });

router.get('/categories', async function (req, res) {
  let categories = await Transaction.aggregate([
    { $group: { _id: "$category", sum: { $sum: "$amount" } } },
  ]);
  res.send(categories)
})


module.exports = router;
