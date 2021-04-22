import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningParagraph,
  CreditCardTable,
  TableData,
  CardNumberSpan,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <StripeCheckoutButton price={total} />

    <WarningParagraph>
      *Please use one of the following test credit cards for payments*
    </WarningParagraph>
    <br />
    <br />
    <CreditCardTable>
      <thead>
        <tr>
          <TableData as="th">Number</TableData>
          <TableData as="th">Brand</TableData>
          <TableData as="th">CVC</TableData>
          <TableData as="th">Date</TableData>
        </tr>
      </thead>

      <tbody>
        <tr>
          <TableData>
            <CardNumberSpan>4242</CardNumberSpan>
            <CardNumberSpan>4242</CardNumberSpan>
            <CardNumberSpan>4242</CardNumberSpan>
            <CardNumberSpan>4242</CardNumberSpan>
          </TableData>
          <TableData>Visa</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>4000</CardNumberSpan>
            <CardNumberSpan>0566</CardNumberSpan>
            <CardNumberSpan>5566</CardNumberSpan>
            <CardNumberSpan>5556</CardNumberSpan>
          </TableData>
          <TableData>Visa (debit)</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>5555</CardNumberSpan>
            <CardNumberSpan>5555</CardNumberSpan>
            <CardNumberSpan>5555</CardNumberSpan>
            <CardNumberSpan>4444</CardNumberSpan>
          </TableData>
          <TableData>Mastercard</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>2223</CardNumberSpan>
            <CardNumberSpan>0031</CardNumberSpan>
            <CardNumberSpan>2200</CardNumberSpan>
            <CardNumberSpan>3222</CardNumberSpan>
          </TableData>
          <TableData>Mastercard (2-series)</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>5200</CardNumberSpan>
            <CardNumberSpan>8282</CardNumberSpan>
            <CardNumberSpan>8282</CardNumberSpan>
            <CardNumberSpan>8210</CardNumberSpan>
          </TableData>
          <TableData>Mastercard (debit)</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>5105</CardNumberSpan>
            <CardNumberSpan>1051</CardNumberSpan>
            <CardNumberSpan>0510</CardNumberSpan>
            <CardNumberSpan>5100</CardNumberSpan>
          </TableData>
          <TableData>Mastercard (prepaid)</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>3782</CardNumberSpan>
            <CardNumberSpan>822463</CardNumberSpan>
            <CardNumberSpan>10005</CardNumberSpan>
          </TableData>
          <TableData>American Express</TableData>
          <TableData>Any 4 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>3714</CardNumberSpan>
            <CardNumberSpan>496353</CardNumberSpan>
            <CardNumberSpan>98431</CardNumberSpan>
          </TableData>
          <TableData>American Express</TableData>
          <TableData>Any 4 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>6011</CardNumberSpan>
            <CardNumberSpan>1111</CardNumberSpan>
            <CardNumberSpan>1111</CardNumberSpan>
            <CardNumberSpan>1117</CardNumberSpan>
          </TableData>
          <TableData>Discover</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>6011</CardNumberSpan>
            <CardNumberSpan>0009</CardNumberSpan>
            <CardNumberSpan>9013</CardNumberSpan>
            <CardNumberSpan>9424</CardNumberSpan>
          </TableData>
          <TableData>Discover</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>3056</CardNumberSpan>
            <CardNumberSpan>9300</CardNumberSpan>
            <CardNumberSpan>0902</CardNumberSpan>
            <CardNumberSpan>0004</CardNumberSpan>
          </TableData>
          <TableData>Diners Club</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>3622</CardNumberSpan>
            <CardNumberSpan>720627</CardNumberSpan>
            <CardNumberSpan>1667</CardNumberSpan>
          </TableData>
          <TableData>Diners Club (14 digit card)</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>3566</CardNumberSpan>
            <CardNumberSpan>0020</CardNumberSpan>
            <CardNumberSpan>2036</CardNumberSpan>
            <CardNumberSpan>0505</CardNumberSpan>
          </TableData>
          <TableData>JCB</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>

        <tr>
          <TableData>
            <CardNumberSpan>6200</CardNumberSpan>
            <CardNumberSpan>0000</CardNumberSpan>
            <CardNumberSpan>0000</CardNumberSpan>
            <CardNumberSpan>0005</CardNumberSpan>
          </TableData>
          <TableData>UnionPay</TableData>
          <TableData>Any 3 digits</TableData>
          <TableData>Any future date</TableData>
        </tr>
      </tbody>
    </CreditCardTable>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
