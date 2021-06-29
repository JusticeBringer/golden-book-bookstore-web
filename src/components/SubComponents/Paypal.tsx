import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    paypal: any;
  }
}

export default function Paypal() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'ceva',
                amount: {
                  currency_code: 'CAD',
                  value: 15
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: error => {
          console.log(error);
        }
      })
      .render(paypal.current);
  });

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
