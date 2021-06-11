import React,{ useState } from 'react'
import Paypal from "./Paypal";
function Checkpay() {
     const[checkout,setCheckOut] = useState(false);

    return (
        
    
        <div classname="inner">
            
             { checkout ? (
                  <Paypal/>
        ):
              (
               <button onClick={
                 ()=> {
                   setCheckOut(true);
                 }
               }>Checkout</button>

              )}
         </div>
       
    );
}

export default Checkpay;