import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IizNNApoDw9qRHWvXaEG2Uye1kOKdiFqXrSMd4lbR8QaMMtFgJyw72wuBIzBMEuJEfvOKQ4ZgqF1xlqx1i3hF0U00ebHW7NBf';

  const onToken = token => {
    console.log(token);
    alert(`You successfully paid $${price}`);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      descripton={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay "
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
