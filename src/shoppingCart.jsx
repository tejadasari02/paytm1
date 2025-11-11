import axios from "axios";
import { useState } from "react";
function Shoping() {
    const [products, setproducts] = useState([])
    const [cart, setcart] = useState([]);
    const [cartTotal, setcartTotal] = useState(0);
   function shopping() {
    axios
      .get("https://dummyjson.com/products?limit=8")
      .then((response) => {
        setproducts(response.data.products);
      });
  }

  
  function addToCart(product) {
    const newCart = [...cart, product];
    setcart(newCart);

    const total = newCart.reduce((sum, item) => sum + item.price, 0);
    setcartTotal(total);
  }

 
  function removeFromCart(index) {
    const newCart = cart.filter((item, i) => i !== index);
    setcart(newCart);

    const total = newCart.reduce((sum, item) => sum + item.price, 0);
    setcartTotal(total);
  }


    
    return (
        <>
            <h6>
                Paytm Shopping Cart ({cart.length} items) | Total: ₹{cartTotal}
            </h6>

            <button onClick={shopping}>Load Products</button>

            <h3>Products</h3>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                {products.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "10px",
                        }}
                    >
                        <img
                            src={item.thumbnail}
                            style={{
                                width: "100%",
                                height: "120px",
                                objectFit: "cover",
                                borderRadius: "8px",
                            }}
                        />

                        <h4>{item.title}</h4>
                        <p>₹ {item.price}</p>

                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <h3>Cart Items</h3>

            {cart.length === 0 && <p>No items in cart</p>}

            <ul>
                {cart.map((item, index) => (
                    <li key={index} style={{ marginBottom: "5px" }}>
                        {index + 1}. {item.title} - ₹{item.price}{" "}
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>

    )
}
export default Shoping;