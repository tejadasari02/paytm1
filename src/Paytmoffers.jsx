import axios from 'axios';
import React, { useState } from 'react'
function Paytmoffers(){
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(false);

    function loadOffers(){
        setLoading(true);
        setTimeout(() => {
            axios.get("https://dummyjson.com/products?limit=5")
            .then(response => {
                setOffers(response.data.products);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error:", error);
                setLoading(false);
            });
        }, 2000);
    }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>

      <button onClick={loadOffers}>Load Offers</button>

      {loading && <h3>Loading...</h3>}

      {/* FLEX CONTAINER */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "20px"
        }}
      >
        {offers.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              width: "240px",
              padding: "10px",
              borderRadius: "8px"
            }}
          >
            <h3>{item.title}</h3>
            <p>Price: ₹{item.price}</p>
            <button>Apply Offer</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Paytmoffers;
