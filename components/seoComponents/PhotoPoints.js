import styled from 'styled-components'
import {Wrap, SubTitle} from '../generic/GenericComponents'

// const Wrap = styled.div`
//   width: 1100px;
//   margin: 0px auto;
//   padding-top: 95px;
//   h2 {
//     color: #363636;
//     font-size: 32px;
//     margin-bottom: 20px;
//   }
// `;
export default ({project}) => (
  <Wrap>
    <SubTitle>{project.projectName} Highlights</SubTitle>
    <Step 
      title={project.summary1Title}
      subheading={project.summary1}
      step={1}
      slug={project.slug}
      points={["Why would you go anywhere else when you can have the specialists? We focus specifically on townhomes in the GTA", "We have the fastest and most cutting-edge search available on the market today! Give it a shot we'll guarantee you'll love it!"]}
      buttonText="Find Your Home"
      />
    <Step 
      title={project.summary2Title}
      subheading={project.summary2}
      points={["Talk to us and we'll custom build you a solution to buy/sell thats perfect for you.", "We take into account everything from demand, to possible upgrades and changes to make to get the best value for your home."]}
      step={2}
      slug={project.slug}
      flipped={true}
      buttonText="Buyers/Sellers"

    />
    <Step 
      title={project.summary3Title}
      subheading={project.summary3}
      step={3}
      slug={project.slug}
      points={["Whether you need better photography, landscaping, moving or even boxes and moving: We'll handle all of it to make everything easy for you!"]}
      buttonText="Contact Us"
    />

  </Wrap>
)



const StepWrap = styled.div`
  width: 100%;
  height: 410px;
  direction: ${props => props.flipped ? 'rtl' : 'ltr'};
  margin-bottom: 70px;
  position: relative;
`;

const Graphic = styled.div`
  height: 100%;    
  width: 550px;
  display: inline-block;
  background-color: grey;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }

`;
const Content = styled.div`
  width: calc(100% - 550px);
  display: inline-block;
  direction: ltr;
  vertical-align: top;
  padding: ${props => props.flipped ? '0px 40px 0px 0px' : '0px 0px 0px 30px'};              
  box-sizing: border-box;
  position: absolute;
  height: fit-content;
  top: 0;
  bottom: 0;
  margin: auto;
  h3 {
    color: #232323;
    font-size: 25px;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
  .summary {
    font-weight: 300;
    font-size: 14px;
    white-space: pre-line;
    line-height: 20px;
    
  }
`;


function Step({icon, title, subheading, points, step, slug, buttonText, buttonLink, flipped}) {
  return (
    <StepWrap flipped={flipped}>
      <Graphic>
        <img src={`https://mthc.s3.us-east-2.amazonaws.com/pre-con-projects/${slug}/lower${step}.jpg`}/>
      </Graphic>
      <Content flipped={flipped}>
        <h3>{title}</h3>
        <p className="summary">{subheading}</p>
      </Content>
    </StepWrap>

  )
}
