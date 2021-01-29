import styled from 'styled-components'
import StructuralWrap from '../generic/structural/wrap'
import {Title} from '../generic/GenericComponents'
import { faRetweet, faHome, faCity} from "@fortawesome/free-solid-svg-icons";
import HighlightBox from '../generic/highlightBox'

const FlatTitle = styled(Title)`
  margin-bottom: 5px;
`;


const BorderedFlexWrap = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
`;


const TripleStat = ({city}) => {

  const formatMoney = (value) => {
    return `$${value.toLocaleString()}`
  }

  return (
    <StructuralWrap>
      <FlatTitle>{city.city} Pre-Construction Stats</FlatTitle>
      <BorderedFlexWrap>
        <HighlightBox icon={faCity} text={'Average Sale Price'}  subText={city.averageSalePrice ? formatMoney(city.averageSalePrice) : '-'}/>
        <HighlightBox icon={faHome} text={'3-Year Appreciation Rate'} subText={city.threeYearAppreciationRate ? `${city.threeYearAppreciationRate}%` : '-'}  />
        <HighlightBox icon={faRetweet} text={'Average Rental Price'} subText={city.averageRentalPrice ? formatMoney(city.averageRentalPrice) : '-'}  />
      </BorderedFlexWrap>
    </StructuralWrap>
  )
}


export default TripleStat;