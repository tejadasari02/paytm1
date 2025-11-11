import { useState } from "react";

function Walletcounter(){
    const[walletbalance,setWalletBalance]=useState(1000);
    function addmoney(){
        setWalletBalance(walletbalance+500);
    }
    function spendmoney(){
        setWalletBalance(walletbalance-200);
    }
    return(
        <>
         <h3 >Current Wallet Balance: ₹{walletbalance}</h3>
        <button onClick={addmoney} className="button" >add $500</button>
        <button onClick={addmoney}>add $1000</button>
        <button onClick={spendmoney}>spend $200</button>
        </>
    )
}
export default Walletcounter;