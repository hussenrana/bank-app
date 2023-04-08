import "./Operations.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Operations({getBalance}) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [vendor, setVendor] = useState("");
  const navigate = useNavigate()

  const updateAmount = (event) => {
      setAmount(event.target.value)
  }

  const updateVendor = (event) => {
      setVendor(event.target.value)
  }

  const updateCategory = (event) => {
      setCategory(event.target.value)
  }

  const insertTransaction = async function () {
    let transaction = await axios.post("http://localhost:4200/transaction", {
          amount: amount,
          category: category,
          vendor: vendor
        }
    );
    navigate('/')
    getBalance()
  };

  return (
    <div className="inputContainer">
      <label className="insertTransaction">Insert Transactions</label>
      <div className="inputField-row">
        <input type="number" placeholder="Insert Amount" value={amount} onChange={updateAmount} />
      </div>
      <div className="inputField-row">
        <input type="text" placeholder="Insert category" value={category} onChange={updateCategory} />
      </div>
      <div className="inputField-row">
        <input type="text" placeholder="Insert Vendor" value={vendor} onChange={updateVendor} />
      </div>
      <div className="withdraw-deposit">
        <button className="depositBtn" onClick={insertTransaction}>Deposit</button>
        <button className="withdrawBtn" onClick={insertTransaction}>Withdraw</button>
      </div>
    </div>
  );
}

export default Operations;