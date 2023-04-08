import "./Transactions.css";
import Transaction from "../transaction/Transaction";
import { useEffect, useState } from "react";
import axios from "axios";

function Transactions({getBalance}) {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const getAllTransactions = async () => {
      let trans = await axios.get("http://localhost:4200/");
      setTransactions(trans.data);
    };
    getAllTransactions();
  }, [transactions]);

  return (
    <div className="transactions">
      {transactions.map((trans) => (
        <Transaction transaction={trans} key={trans._id} getBalance={getBalance} />
      ))}
    </div>
  );
}

export default Transactions;
