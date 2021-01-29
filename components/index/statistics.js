import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  float: left;
  position: relative;
  box-sizing: border-box;
  padding:50px;
  @media(min-width:320px) and (max-width:480px){
    padding:20px;
    width:100%;

  }
`;

const MainTitle = styled.div`
  width: 100%;
  float: left;
  position: relative;
  margin-bottom: 30px;
  box-sizing: border-box;
`;

const HeadTitle = styled.div`
  font-size: 42px;
  font-weight: 600;
  width: 100%;
  float: left;
  position: relative;
  padding:25px;
  box-sizing: border-box;
  &:before {
    position: absolute;
    content: "";
    width: 10px;
    height: 60px;
    background: #f89e37;
    left: 0;
 }
 @media(min-width:320px) and (max-width:480px){
  font-size:24px;

}
`;

const SubTitle = styled.div`
  width: 100%;
  float: left;
  position: relative;
  max-width: 727px;
  box-sizing: border-box;
`;
const Grid = styled.div`
  width:100%;
  float:left;
  box-sizing: border-box;
`;
const Row = styled.div`
 display:flex;
 box-sizing: border-box;
 @media(min-width:320px) and (max-width:480px){
  flex-direction:column;

}
`;
const StatsAverageBox = styled.div`
width: 100%;
float: left;
position: relative;
padding: 30px;

box-sizing: border-box;
&.bs{
  box-shadow: 0px 0px 15px 0px #d5d5d552;
  background: white;
}
`;
const Heading = styled.div`
width: 100%;
    float: left;
    position: relative;
    font-size: 24px;
    font-weight: 600;
    color: #363636;
    margin-bottom: 20px;
    text-align:center;
    
`;

const AverageBox = styled.div`
width: 100%;
    float: left;
    position: relative;
    box-sizing: border-box;
`;
const AverageTitlebox = styled.div`
width: 100%;
float: left;
position: relative;
padding-right: 100px;
height: 76px;
line-height: 75px;
font-size: 18px;
box-sizing: border-box;
 span{
  font-size: 21px;
  position: absolute;
  right: 0px;
  font-weight: 600;
}
&.bb {
  border-bottom: 1px solid #d5d5d561;
}
@media(min-width:320px) and (max-width:480px){
  min-height: 36px;
  line-height: 32px;
  font-size: 16px;

}
`;
const TimeBlock = styled.div`
width: 100%;
float: left;
position: relative;
box-sizing: border-box;
`;
const TimeHomeratio = styled.div`
    width: 100%;
    float: left;
    position: relative;
    display: flex;
    align-items: center;
    vertical-align: middle;
    flex-direction: column;
    padding-top: 28px;
    padding-bottom: 30px;
    box-sizing: border-box;
    &.br {
      border-right: 1px solid #d5d5d561;
      min-height: 297px;
      vertical-align: middle;
      display: flex;
      align-items: center;
      justify-content: center;
      @media(min-width:320px) and (max-width:480px){
        border-right: none;
        border-bottom: 1px solid #d5d5d561;
      
      }
    }
  &.bb {
    border-bottom: 1px solid #d5d5d561;
}
&.midHight {
  min-height:150px;
  display: flex;
    align-items: center;
    justify-content: center;
}
`;
const BoldText = styled.div`
width: 100%;
float: left;
position: relative;
box-sizing: border-box;
&.orange{
  width: 100%;
    float: left;
    text-align: center;
    font-size: 52px;
    font-weight: 700;
    color: #f89e37;
}
`;
const SmallText = styled.div`
    width: 100%;
    float: left;
    position: relative;
    font-size: 18px;
    box-sizing: border-box;
    text-align:center;
`;
const MediumText = styled.div`
    width: 100%;
    float: left;
    position: relative;
    font-size: 24px;
    font-weight: 700;
    box-sizing: border-box;
    text-align:center;
    &.green{
      color: #06cc3a;
    }
    &.pink{
      color: #ea0ee4;
    }
`;



export default () => {
  return (
    <Wrap>
      <MainTitle>
        <HeadTitle>Townhome Stats</HeadTitle>
        <SubTitle>Townhomes is what we do! We know exactly how to judge the plethora of townhomes and communities around the GTA to find the best home for you!</SubTitle>
      </MainTitle>
      <Grid >
        <Row>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <StatsAverageBox className="bs">
            <Heading>
            Get The Numbers!
            </Heading>
            <AverageBox>
                <AverageTitlebox className="bb">
                    Sale to List Percentage <span>96.8%</span>
                </AverageTitlebox>
                <AverageTitlebox className="bb">
                    Average Days on Market <span>19</span>
                </AverageTitlebox>
                <AverageTitlebox className="bb">
                Average Price Per Sq Ft <span> $786</span>
                </AverageTitlebox>
                <AverageTitlebox>
                    Average Monthly Rental <span>$2450</span>
                </AverageTitlebox>
            </AverageBox>
          </StatsAverageBox>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <StatsAverageBox>
              <Heading>
              Average Sold Price
                </Heading>
                <TimeBlock>
                <Row>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TimeHomeratio className="br">
                        <BoldText className="orange">
                        $750,000
                        </BoldText>
                        <SmallText>
                        Last 30 Days
                        </SmallText>
                    </TimeHomeratio>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TimeHomeratio className="bb midHight">
                        <MediumText className="green">
                        ↑3.92%
                        </MediumText>
                        <SmallText>
                        Since 90 Days
                        </SmallText>
                    </TimeHomeratio>
                    <TimeHomeratio className="midHight">
                        <MediumText className="pink">
                        ↑3.92%
                        </MediumText>
                        <SmallText>
                        Since Last Year
                        </SmallText>
                    </TimeHomeratio>

                      </Grid>
                </Row>
                </TimeBlock>

          </StatsAverageBox>
        </Grid>
        </Row>
      </Grid>
    </Wrap>
    // <div>
    //   <Description>
    //     <h2>Townhome Stats</h2>
    //     <p>Townhomes is what we do! We know exactly how to judge the plethora of townhomes and communities around the GTA to find the best home for you!</p>
    //   </Description>


    //   <Box>
    //     <StatPiece>
    //       <p>Sale to List Percentage</p>
    //       <span>96.8%</span>
    //     </StatPiece>
    //     <StatPiece>
    //       <p>Average Days on Market</p>
    //       <span>19</span>
    //     </StatPiece>
    //     <StatPiece>
    //       <p>Average Sold Price</p>
    //       <span>$750,000</span>
    //     </StatPiece>
    //     <StatPiece>
    //       <p>Average Monthly Rental</p>
    //       <span>$2450</span>
    //     </StatPiece>
    //   </Box>

    //   <Box>
    //     <MainStat>
    //       <h3>Downtown Toronto Townhome PSF for the last 15 days</h3>
    //       <p>$986</p>
    //     </MainStat>

    //     <StatsBox>
    //       <span className="percentage"><span className="arrow">↑</span>3.92%</span>
    //       <span className="timeFrame">Since 60 days ago</span>
    //     </StatsBox>
    //     <StatsBox>
    //       <span className="percentage"><span className="arrow">↑</span>25.92%</span>
    //       <span className="timeFrame">Since 1 year ago</span>
    //     </StatsBox>
    //   </Box>

    // </div>
  )
}

