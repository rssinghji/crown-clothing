import React from "react";
import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // Stripe uses cents as costs
    const publishableKey = process.env.REACT_APP_STRIPE_PK;

    const onToken = token => {
        console.log("token: ", token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/143w.svg'
            description={`Your total is $${price}.`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
