import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [products, setproducts] = useState([]);
  const [filteredproducts, setfilteredproducts] = useState([]);
  const [search, setsearch] = useState("");
  const [cart, setcart] = useState([]);


  useEffect(() => {
    async function loadproducts() {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setproducts(response.data);
        setfilteredproducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    loadproducts();
  }, []);

  function handleSearch(e) {
    const value = e.target.value;
    setsearch(value);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setfilteredproducts(filtered);
  }

  function addToCart(product) {
    setcart([...cart, product]);
  }
  const totalprice = cart.reduce((sum, item) => sum + item.price, 0);


  return (
    <>
      <h2>Dashboard</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleSearch}
      />

      <h3>Total Products: {filteredproducts.length}</h3>
      <h3>🛒 Cart: {cart.length}</h3>
      <h3>💰 Total Price: ₹{totalprice.toFixed(2)}</h3>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredproducts.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              width: "200px",
            }}
          >
           <img src={item.images[0]} width="90%" alt={item.title} />

            <h4>{item.title}</h4>
            <p>Price: ₹{item.price}</p>

            <button onClick={() => addToCart(item)}>
              Add to Cart 
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
