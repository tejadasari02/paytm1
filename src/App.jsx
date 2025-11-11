import { useState } from 'react'
import './App.css'
import WalletCounter from "./walletcounter";
import Togglepassword from './togglepassword';
import Billreminder from './billreminder';
import Paytmoffers from './Paytmoffers';
import RechargeHistory from './RechargeHistory';
import Products from './ProductSearch';
import Shoping from './shoppingCart';

function App() {
  const [walletBalance, setWalletBalance] = useState(10000);
  

  return (
    <>
    {/* <WalletCounter/>
    <Togglepassword/>

   <Billreminder/> */}
   {/* <Paytmoffers/> */}
   {/* <RechargeHistory/> */}
   <Products/>
   <Shoping/>
    </>
  )
}

export default App
