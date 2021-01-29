import styled from 'styled-components'
import { monthlyMortgage, mortgageInsurance, landTransferTax } from '../search-townhomes/mortgageCalculations';

// Structural
const Wrap = styled.div`
  width: 100%;
  padding: 13px 8px;
  box-sizing: border-box;
  height: 92px;
  position: relative;
`;

const TopText = styled.p`
  color: black;
  font-size: 19px;
  font-weight: 600;
`;
const BottomText = styled.p`
  color: darkgray;
  font-size: 15px;
  letter-spacing: 1px;
`;

const TextWrap = styled.div`
    width: fit-content;
    display: inline-block;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    height: fit-content;
`;
const Cashback = styled.p`
  margin-top: 2px;
  color: #00ad0e;
  font-weight: 500;
`
const TextBox = ({topText, bottomText, price, soldSearch}) => (
  <TextWrap>
    <TopText>{topText}</TopText>
    <BottomText>{bottomText}</BottomText>
    <Cashback>Rebate: ${Math.round(price * 0.015).toLocaleString()}</Cashback>
  </TextWrap>
)

// Main elements
const LeftBox = styled(TextBox)`
  float: left;

`;
const RightData = styled.div`
  text-align: right;
  float: right;
`;


const Price = styled.p`
  font-size: 21px;
  font-weight: 600;
`;

const Mortgage = styled.p`


`


const TopHeader = ({listing, soldSearch}) => {
  let price = listing.price || listing.soldPrice

  const downpaid = price * (price > 1000000 ? 0.8 : 0.9)
  const amortizationPeriod = 25
  const interestRate = 3.19
  const mortgageInsuranceRequired = mortgageInsurance((price > 1000000 ? 10 : 20), price);
  const totalPrice = downpaid + mortgageInsuranceRequired;
  const monthlyMort = monthlyMortgage(interestRate, totalPrice, amortizationPeriod)

  return (
    <Wrap>
      <LeftBox soldSearch={soldSearch} topText={listing.address} bottomText={listing.subdivision} price={price} />
  
      <RightData>
        <Price>{`$${price.toLocaleString()}`}</Price>
        <Mortgage>Deposit: ${Math.round(price > 1000000 ? price * 0.1 : price * 0.2).toLocaleString()}</Mortgage>
        <Mortgage>Mortgage: ${Math.round(monthlyMort).toLocaleString()}</Mortgage>
  
      </RightData>
  
    </Wrap>
  
  )
}




export default TopHeader;