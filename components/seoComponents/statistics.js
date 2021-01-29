import styled from 'styled-components'
import {Title} from '../generic/GenericComponents'

import StructuralWrap from '../generic/structural/wrap'

export default ({para1, para2, yearPercent, threeYearPercent}) => (
  <StructuralWrap>
    <Title>Market Stats</Title>
    <TextBox>
      <Text>{para1}</Text>
      <Text>{para2}</Text>
    </TextBox>
    <MarketBox>
      <h4>Townhomes Price Increases</h4>
      <StatBox>
        <span className="percentage">{yearPercent}%</span>
        <span className="timeFrame">Last Year</span>
      </StatBox>
      <StatBox>
        <span className="percentage">{threeYearPercent}%</span>
        <span className="timeFrame">Last 3 Years</span>
      </StatBox>

    </MarketBox>
  </StructuralWrap>
)


const Text = styled.p`
  font-size: 14px;
  line-height: 23px;
  font-weight: 300;
  margin-bottom: 15px;
`;

const ContentBox = styled.div`
  width: 50%;
  box-sizing: border-box;
  display: inline-block;
`;

const TextBox = styled(ContentBox)`
  width: 60%;
  height: 175px;
  padding-right: 50px;
`;

const MarketBox = styled(ContentBox)`
  width: 40%;
  height: 175px;
  background-color: #0A2463;
  vertical-align: top;
  padding: 20px 20px;
  position: relative;
  text-align: center;
  h4 {
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 10px;
    color: white;
  }
`;
const StatBox = styled(ContentBox)`
  span {
    display: block;
    color: white;
  }
  .percentage {
    font-size: 60px;
  }

  .timeFrame {
    font-weight: 300;
  }

`;
