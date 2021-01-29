import styled from 'styled-components'
import StructuralWrap from '../generic/structural/wrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave, faGlassCheers, faRoad, faSmile } from "@fortawesome/free-solid-svg-icons";

export default ({city, para1, para2, stat1, stat2, stat3, stat4}) => {
  return (
    <StructuralWrap>
      <SummaryWrap>
        <h2>Step into {city}</h2>
        <p>{para1}</p>
        <p>{para2}</p>
      </SummaryWrap>
      <StatisticsWrap>
        <Statistic>
          <StatisticIcon icon={faMoneyBillWave} />
          <span className="title">Pricing</span>
          <span className="content">{stat1}</span>
        </Statistic>
        <Statistic>
          <StatisticIcon icon={faGlassCheers} />
          <span className="title">Lifestyle</span>
          <span className="content">{stat2}</span>
        </Statistic>
        <Statistic>
          <StatisticIcon icon={faRoad} />
          <span className="title">Commute</span>
          <span className="content">{stat3}</span>
        </Statistic>
        <Statistic>
          <StatisticIcon icon={faSmile} />
          <span className="title">Perfect For</span>
          <span className="content">{stat4}</span>
        </Statistic>
      </StatisticsWrap>
    </StructuralWrap>
  )
}

const SummaryWrap = styled.div`
  width: 50%;
  padding-right: 50px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  h2 {
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    line-height: 23px;
    margin-bottom: 15px;
    font-weight: 300;
  }
`;

const StatisticsWrap = styled.div`
  width: 50%;
  display: inline-block;
`;

const Statistic = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    margin-bottom: 15px;
  span {
    color: black;
    display: block;
    padding-left: 65px;
  }
  .title {
    font-size: 17px;
    font-weight: 600;
    color: #363636;
  }
  .content {
    color: #4A4A4A;
    font-weight: 300;
    margin: 4px 0px;
    font-size: 14px;
  }

`;

const StatisticIcon = styled(FontAwesomeIcon)`
  color: #F89E37;
  height: 40px !important;
  width: 40px !important;
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
`;
