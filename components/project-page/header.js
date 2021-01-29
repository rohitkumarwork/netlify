import styled from 'styled-components'
import {Wrap, Title, Paragraph} from '../../components/generic/GenericComponents'

import Theatre from '../generic/theatre'

const Accent = styled.span`
  color: #F89E37;
`;

const RebateText = styled.span`
  color: #5a5a5a;
  display: block;
  font-size: 14px;
  font-weight: 500;
`

const PricingText = ({startingPrice, endingPrice, cashbackPercentage}) => {
  if (endingPrice && !startingPrice) return (
    <> 
      PRICED UP TO <Accent>${endingPrice.toLocaleString()}</Accent> 
      {cashbackPercentage &&
        <RebateText>MyTownhome Cashback up to <Accent>${endingPrice * (cashbackPercentage/100)}</Accent> </RebateText>
      }
    </>
  ) 

  if (startingPrice && !endingPrice) return (
    <> PRICED FROM <Accent>${startingPrice.toLocaleString()} </Accent> 
      {cashbackPercentage &&
        <RebateText>MyTownhome Cashback from <Accent>${startingPrice * (cashbackPercentage/100)} </Accent>  </RebateText>
      }
    </>
  )
  if (startingPrice && endingPrice) return (
    <> PRICED FROM <Accent>${startingPrice.toLocaleString()}</Accent> TO <Accent>${endingPrice.toLocaleString()}</Accent> 
      {cashbackPercentage &&
        <RebateText>MyTownhome Cashback from <Accent>${startingPrice * (cashbackPercentage/100)}</Accent> to <Accent>${endingPrice * (cashbackPercentage/100)}</Accent></RebateText>
      }
    </>
  )
}
const FlexWrap = styled(Wrap)`
  display: flex;
  justify-content: space-between;
`;

const Project = styled(Title)`
  width: 300px;
`;
const Box = styled.div`
  width: 500px;
  display: inline-block;
  box-sizing: border-box;
`;
const HighlightImage = styled.img`
  background-color: grey;
  min-width: 100%;
  min-height: 300px;
  margin-top: 20px;
  border-radius: 15px;
  height: 290px;
`;

const BasePriceText = styled.p`
  display: inline-block;
  font-weight: 600;
  color: #b5b5b5;
  font-size: 18px;
  letter-spacing: .5px;
  line-height: 24px;
`;

const Teaser = styled(Paragraph)`
  width: 500px;
  margin: 21px 0px 25px;
`;

const Button = styled.button`
  background-color: #F89E37;
  color: white;
  padding: 15px 30px;
  font-size: 15px;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  letter-spacing: .5px;
  cursor: pointer;
`;


export default ({project}) => (
  <FlexWrap>
    <Box>
      <Project>{project.projectName}</Project>
      <BasePriceText>
        <PricingText startingPrice={project.startingPrice}  endingPrice={project.endingPrice} cashbackPercentage={project.cashbackPercentage}/>
      </BasePriceText>

      <Teaser>{project.teaserText}</Teaser>
      <Button>Get Early Access</Button>
    </Box>
    <Box>
      <HighlightImage src={`https://mthc.s3.us-east-2.amazonaws.com/pre-con-projects/${project.slug}/top.jpg`} />
    </Box>
  </FlexWrap>    
)


