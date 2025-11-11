import React, { useState } from 'react'

function Togglepassword() {
    const [showpassword, setpassword] = useState('false')
    function togglepassword() {
        setpassword(!showpassword)

    }
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
           <input
        type={showpassword ? "text" : "password"}
        placeholder="Enter Password"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={togglepassword}>
        {showpassword ? "Hide Password" : "Show Password"}
      </button>
            </div>
        </>
    )
};
export default Togglepassword;