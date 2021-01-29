import styled from 'styled-components'
import StructuralWrap from '../generic/structural/wrap'
import Theatre from '../generic/theatre'

const FlexWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CoreWrap = styled.div`
  width: 500px;
  position: relative;
`;

const SummaryWrap = styled(CoreWrap)`
  h2 {
    font-size: 41px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 14px;
    font-weight: 300;
  }
`;


const CTA = styled.button`
  border: none;
  border-radius: 33px;
  background-color: #F89E37;
  padding: 16px 30px;
  color: white;
  font-size: 13px;
  font-weight: 600;
  margin: 20px auto 15px;
  display: block;
  cursor: pointer;
`;

const HighlightImage = styled.img`
  background-color: grey;
  min-width: 100%;
  min-height: 300px;
  margin-top: 20px;
  border-radius: 15px;
  background-position: center;
  background-size: cover;
  background-image: ${props => props.slug ? `url(https://mthc.s3.us-east-2.amazonaws.com/cities/${props.slug}/square1.jpg)` : `url(${props.url})`};
`;

export default ({city, para1, para2, slug, url}) => {
  return (
    <StructuralWrap>
      <FlexWrap>
        <SummaryWrap>
          <h2>Step into {city}</h2>
          <p>{para1}</p>
          <p>{para2}</p>
          {/* <CTA>FIND YOUR DREAM PRE-CON</CTA> */}
        </SummaryWrap>
        <CoreWrap>
          <HighlightImage slug={slug} url={url}/>
        </CoreWrap>
      </FlexWrap>
    </StructuralWrap>
  )
}
