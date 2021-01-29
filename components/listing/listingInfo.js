import styled from 'styled-components'

const Wrap = styled.div`
  .specWrap:last-of-type {
    border-bottom: 0px !important;
  }
`;
const Title = styled.h3`
  color: black;
  font-size: 20px;
  font-weight: 400;
  margin: 15px 0px 5px;
`;
const BaseText = styled.p`
  font-size: 15px;
  width: 50%;
  display: inline-block;
  margin: 7px 0px;
`;

const LeftText = styled(BaseText)`
  font-weight: 400;
`;

const RightText = styled(BaseText)`
  font-weight: 600;
`;

const SpecWrap = styled.div`
  border-bottom: 1px solid lightgrey;
`;

const ListingSpec = ({leftText, rightText}) => (
  <SpecWrap className="specWrap">
    <LeftText>{leftText}</LeftText>
    <RightText>{rightText}</RightText>
  </SpecWrap>
)

const ListingInfo = ({listing}) => (
  <Wrap>
    <ListingSpec leftText="MLS #" rightText={listing.mls}/>
    <ListingSpec leftText="Style" rightText={listing.style}/>
    <ListingSpec leftText="Property Type" rightText={listing.prop_type}/>
    <ListingSpec leftText="Subdivision" rightText={listing.subdivision}/>
    <ListingSpec leftText="City" rightText={listing.city}/>
    <ListingSpec leftText="Parking Spots" rightText={listing.parking_spots}/>
  </Wrap>
)

export default ListingInfo;