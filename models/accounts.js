// models/accounts.js
import mongoose from "mongoose";

const accountsSchema = new mongoose.Schema({
  transactionType: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Accounts = mongoose.model("Accounts", accountsSchema);

export default Accounts;
