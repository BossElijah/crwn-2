import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningParagraph = styled.div`
  text-align: center;
  font-size: 24px;
  color: red;
  margin: 0;
  margin-top: 40px;
`;

export const CreditCardTable = styled.table`
  text-align: left;
  border-collapse: collapse;
  font-size: 18px;
`;

export const TableData = styled.td`
  border: 1px solid black;
  padding: 20px;
`;

export const CardNumberSpan = styled.span`
  padding: 3px;
`;
