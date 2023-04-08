import "./Transaction.css";
import axios from "axios";

function Transaction({transaction, getBalance}) {

  const deleteTransaction = async () => {
      let deleted = await axios.delete(`http://localhost:4200/${transaction._id}`)
      getBalance()
  }

  return (
    <div className="grid">
      <div className="nameCategory">
        <label>{transaction.vendor}</label>
        <h4>{transaction.category}</h4>
      </div>
      <div className="amount">
        <label className={transaction.amount < 0 ? 'withdraw' : 'deposit'}>{transaction.amount}</label>
        <button onClick={deleteTransaction}>Delete</button>
      </div>
    </div>
  );
}

export default Transaction;
