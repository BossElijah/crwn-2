import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>

    <StripeCheckoutButton price={total} />

    <div className="test-warning">
      <p>*Please use one of the following test credit cards for payments*</p>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Brand</th>
            <th>CVC</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <span className="CardNumber">
                <span>4242</span>
                <span>4242</span>
                <span>4242</span>
                <span>4242</span>
              </span>
            </td>
            <td>Visa</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>4000</span>
                <span>0566</span>
                <span>5566</span>
                <span>5556</span>
              </span>
            </td>
            <td>Visa (debit)</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>5555</span>
                <span>5555</span>
                <span>5555</span>
                <span>4444</span>
              </span>
            </td>
            <td>Mastercard</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>2223</span>
                <span>0031</span>
                <span>2200</span>
                <span>3222</span>
              </span>
            </td>
            <td>Mastercard (2-series)</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>5200</span>
                <span>8282</span>
                <span>8282</span>
                <span>8210</span>
              </span>
            </td>
            <td>Mastercard (debit)</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>5105</span>
                <span>1051</span>
                <span>0510</span>
                <span>5100</span>
              </span>
            </td>
            <td>Mastercard (prepaid)</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>3782</span>
                <span>822463</span>
                <span>10005</span>
              </span>
            </td>
            <td>American Express</td>
            <td>Any 4 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>3714</span>
                <span>496353</span>
                <span>98431</span>
              </span>
            </td>
            <td>American Express</td>
            <td>Any 4 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>6011</span>
                <span>1111</span>
                <span>1111</span>
                <span>1117</span>
              </span>
            </td>
            <td>Discover</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>6011</span>
                <span>0009</span>
                <span>9013</span>
                <span>9424</span>
              </span>
            </td>
            <td>Discover</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>3056</span>
                <span>9300</span>
                <span>0902</span>
                <span>0004</span>
              </span>
            </td>
            <td>Diners Club</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>3622</span>
                <span>720627</span>
                <span>1667</span>
              </span>
            </td>
            <td>Diners Club (14 digit card)</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>3566</span>
                <span>0020</span>
                <span>2036</span>
                <span>0505</span>
              </span>
            </td>
            <td>JCB</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>

          <tr>
            <td>
              <span className="CardNumber">
                <span>6200</span>
                <span>0000</span>
                <span>0000</span>
                <span>0005</span>
              </span>
            </td>
            <td>UnionPay</td>
            <td>Any 3 digits</td>
            <td>Any future date</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
