import styled from 'styled-components'
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToilet, faBed, faRulerCombined} from "@fortawesome/free-solid-svg-icons";
import { monthlyMortgage, mortgageInsurance, landTransferTax } from './mortgageCalculations';


const Wrap = styled.div`
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

const Listing = styled.div`
  cursor: ${props => props.sold ? 'inherit' : 'pointer'};
  p {
    /* color: black; */
  }
`;

const ListingImage = styled.div`
  height: 230px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    border-radius: 6px;
  }
  p {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;
    padding: 9px 12px;
    border-radius: 6px;
    background-color: #F89E37;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
    color: white;
  }
`;

const TopListingInfo = styled.div`
  padding: 7px 5px;
  position: relative;
  .address {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    margin: 10px 0px 3px;
  }
  .type {
    color: #000000;	
    font-size: 12px;
  }
  .price {
    margin-top: 10px;
    font-size: 18px;
    .cashback {
      color: white;
      background-color: #2AA104;
      border-radius: 10px;
      padding: 3px 5px;
      font-size: 11px;
      font-weight: 300;
      position: relative;
      bottom: 2px;
    }
  }
`;

const BottomListingInfo = styled.div`
  padding: 7px 5px;
`;

const StatPiece = styled.div`
  display: inline-block;
  svg {
    height: 18px !important;
    color: #333333;
  }
  p {
    color: #333333;
    display: inline-block;
    margin: 0px 16px 0px 6px;
    position: relative;
    bottom: 4px;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Rebate = styled.div`
  width: 85px;
  height: fit-content;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0;
  margin: auto;
  text-align: center;
  background-color: #bbbbbb30;
  border-radius: 3px;
  padding: 3px 0px;
`;

const RebateText = styled.p`
  font-weight: 600;
  font-size: 17px;
  color: #00ad0e;
`;

const RebateSubtext = styled.p`
  font-size: 12px;
  `;


const MortgageBox = styled(Rebate)`
  top: 85px;
`
const MortgageText = styled.p`
  font-weight: 600;
  font-size: 13px;
`;
const MortgageSubtext = styled.p`
  font-size: 12px;
`;

export default ({listing, setSelectedListing, sold}) => {

  const downpaid = listing.price * (listing.price > 1000000 ? 0.8 : 0.9)
  const amortizationPeriod = 25
  const interestRate = 3.19
  const mortgageInsuranceRequired = mortgageInsurance((listing.price > 1000000 ? 10 : 20), listing.price);
  const totalPrice = downpaid + mortgageInsuranceRequired;
  const monthlyMort = monthlyMortgage(interestRate, totalPrice, amortizationPeriod)


return (
  // <Link as={`/listings/${listing.subdivision ? listing.subdivision.split(' ').join('-') : 'ontario'}/${listing.address.split(' ').join('-').replace('#', '_')}`}  href={`/listings/${listing.subdivision ? listing.subdivision.split(' ').join('-') : 'ontario'}/${listing.address.split(' ').join('-').replace('#', '_')}`}>
    <Wrap   onClick={() => {setSelectedListing(listing)}} key={listing.id}>
      <Listing sold>
        <ListingImage>
          <p>${ sold ? listing.soldPrice.toLocaleString() : listing.price.toLocaleString()}</p>
          <img src={listing.thumbnail} />
        </ListingImage>

        <TopListingInfo>
          <p className="address">{listing.address}</p>
          <p className="type">{listing.prop_type}</p>
          {
            sold ?
            <MortgageBox>
              <MortgageSubtext>Sold Listing</MortgageSubtext>
            </MortgageBox>

            :
            <>
              <Rebate>
                <RebateText>${Math.round(listing.price * 0.015).toLocaleString()}</RebateText>
                <RebateSubtext>Rebate</RebateSubtext>
              </Rebate>
              <MortgageBox>
                <MortgageText>${Math.round(monthlyMort).toLocaleString()}</MortgageText>
                <MortgageSubtext>Est. Mortgage</MortgageSubtext>
              </MortgageBox>
            </>
          }
        </TopListingInfo>

        <BottomListingInfo>
          <StatPiece>
            <FontAwesomeIcon icon={faBed} />
            <p>{listing.bedrooms} Beds</p>
          </StatPiece>

          <StatPiece>
            <FontAwesomeIcon icon={faToilet} />
            <p>{listing.bathrooms} Baths</p>
          </StatPiece>
          {listing.square_footage &&
            <StatPiece>
              <FontAwesomeIcon icon={faRulerCombined} />
              <p>{listing.square_footage} Sq.Ft.</p>
            </StatPiece>
          }

        </BottomListingInfo>

      </Listing>
    </Wrap>
  // </Link>
)

}