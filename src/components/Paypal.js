import React, { useRef, useEffect } from 'react';

export default function Paypal() {
    const paypal = useRef();

    useEffect(() => {
        window.paypal 
        .Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({ 
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Pharmacy order",
                            amount: {
                                currency_code:"USD",
                                value: 700.00,

                            },
                        },
                    ],

                });
            },

        OnApprove: async( data,actions ) => {
            const order = await actions.order.capture();
            console.log(order);
        },
        onError: (err) => {
            console.log(err)
        }
    })
    .render(paypal.current);
}, []);

    return (
        <div>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
            <div ref={paypal}>
            
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        
    );
}
