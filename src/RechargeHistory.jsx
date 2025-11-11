import { useState } from "react";
import axios from "axios";

function RechargeHistory() {

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  function loadHistory() {
    setLoading(true);

    setTimeout(() => {
      axios.get("https://dummyjson.com/products?limit=10")
        .then(res => {

          const finalList = res.data.products.map(p => {
            return {
              date: new Date().toLocaleDateString("en-GB"),   // DD/MM/YYYY
              description: p.title,
              amount: "₹" + p.price,
              status: Math.random() > 0.5 ? "Success" : "Failed"
            };
          });

          setTransactions(finalList);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }, 2000);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>

      <button onClick={loadHistory}>Load Transaction History</button>

      {loading && <h3>Loading...</h3>}

      <h3>Total Transactions: {transactions.length}</h3>

      <table style={{ margin: "20px auto", borderCollapse: "collapse", width: "80%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>Date</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Description</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Amount</th>
            <th style={{ border: "1px solid black", padding: "10px" }}>Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t, i) => (
            <tr key={i}>
              <td style={{ border: "1px solid black", padding: "10px" }}>{t.date}</td>

              <td style={{ border: "1px solid black", padding: "10px" }}>{t.description}</td>

              <td style={{ border: "1px solid black", padding: "10px" }}>{t.amount}</td>

              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  color: t.status === "Success" ? "green" : "red"
                }}
              >
                {t.status}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default RechargeHistory;
