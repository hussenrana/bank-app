import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Transactions from "./components/transactions/Transactions";
import { useState, useEffect } from "react";
import axios from "axios";
import Operations from "./components/operations/Operations";
import Breakdown from "./components/breakdown/Breakdown";

function App() {
  const [balance, setBalance] = useState([])

  const getBalance = async() => {
    let response = await axios.get('http://localhost:4200')
    let newBalance = 0
    response.data.forEach(element => {
      newBalance += element.amount
    });
    setBalance(newBalance)
  }
  
  useEffect(() => {
    getBalance()
}, [])

  return (
    <Router>
      <div className="App">
        <Navbar balance={balance} />
        <Routes>
          <Route path="/" element={<Transactions getBalance={getBalance} />} />
          <Route path="/operations" element={<Operations getBalance={getBalance} />} />
          <Route path="/breakdown" element={<Breakdown/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
