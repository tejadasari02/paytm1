import axios from "axios";
import {useState} from "react";
function Products(){
    const[allproducts,setallproducts]=useState([]);
    const[filterproducts,setfilterproducts]=useState([]);
    const[searchTerm,setsearchTerm]=useState('')
    function loadallproducts(){
        axios.get("https://dummyjson.com/products?limit=20")
        .then(response=>{
        
      setallproducts(response.data.products);
      setfilterproducts(response.data.products);
    });

    }
    function handleSearch(value) {
  setsearchTerm(value);
  const filtered = allproducts.filter(product => 
    product.title.toLowerCase().includes(value.toLowerCase())
  );
  setfilterproducts(filtered);
}
    return (
        <>
        <h2>products search</h2>
        
      <button onClick={loadallproducts}>Load All Products</button>

      <br /><br />

        <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <h4>Showing: {filterproducts.length} products</h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filterproducts.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <img
              src={item.thumbnail}
              style={{ width: "100%", height: "120px", objectFit: "cover" }}
            />

            <h4>#{item.title}</h4>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    
        </>
    )
}
export default Products;