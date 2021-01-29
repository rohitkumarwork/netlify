import styled from 'styled-components'
import Link from 'next/link';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCubes, faCaretRight, faCheck} from "@fortawesome/free-solid-svg-icons";
import { faSmile} from "@fortawesome/free-regular-svg-icons";

const Wrap = styled.div`
  width: 1100px;
  margin: 0px auto;
  padding-top: 95px;
  h2 {
    color: #363636;
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

export default () => {

  return (
    <Wrap>
      <h2>How It Works</h2>
      <Step 
        title="Pick Your Home" 
        subheading="Hop into our search and find the townhome of your dreams! We have every townhome and preconstruction townhome in the GTA!"
        points={["Why would you go anywhere else when you can have the specialists? We focus specifically on townhomes in the GTA", "We have the fastest and most cutting-edge search available on the market today! Give it a shot we'll guarantee you'll love it!"]}
        buttonText="Find Your Home"
        buttonLink="/search-townhomes"
        image="https://mthc.s3.us-east-2.amazonaws.com/assets/step-1.jpg"
       />
      <Step 
        title="Craft Your Package" 
        subheading="Whether you're buying or selling your home, we'll figure out how to save you the most money through the process!"
        points={["Talk to us and we'll custom build you a solution to buy/sell thats perfect for you.", "We take into account everything from demand, to possible upgrades and changes to make to get the best value for your home."]}
        flipped={true}
        buttonText="Buyers"
        buttonLink="/buying-a-townhome"
        altButtonText="Sellers"
        altButtonLink="/selling-your-townhome"
        image="https://mthc.s3.us-east-2.amazonaws.com/assets/step-2.jpg"

      />
      <Step 
        title="Let Us Handle The Rest" 
        subheading="Dont worry about it! We'll organize everything and ensure the process is as smooth and easy as possible for you!"
        points={["Whether you need better photography, landscaping, moving or even boxes and moving: We'll handle all of it to make everything easy for you!"]}
        buttonText="Contact Us"
        buttonLink=""
        image="https://mthc.s3.us-east-2.amazonaws.com/assets/step-3.jpg"
      />

    </Wrap>
  )
}


const StepWrap = styled.div`
  width: 100%;
  height: 550px;
  direction: ${props => props.flipped ? 'rtl' : 'ltr'};
  margin-bottom: 70px;
`;

const Graphic = styled.div`
  height: 100%;    
  width: 450px;
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
  width: calc(100% - 450px);
  display: inline-block;
  direction: ltr;
  vertical-align: top;
  padding: ${props => props.flipped ? '0px 0px 0px 0px' : '0px 0px 0px 115px'};              
  box-sizing: border-box;
  h3 {
    color: #232323;
    font-size: 35px;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
  .summary {
    font-weight: 300;
    font-size: 16px;
    width: 480px;
    line-height: 32px;
  }
`;
const BreakLine = styled.div`
  width: 275px;
  border-bottom: 1px solid #D6D6D6;
  margin: 35px 0px;
`;

const CTA = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #F89E37;
  padding: 15px 40px;
  cursor: pointer;
  border-radius: 33.5px;
  letter-spacing: 1px;
  margin-right: 13px;
  transition: background-color 0.25s ease, color 0.25s ease;
`;

const GhostCTA = styled(CTA)`
  background-color: white;
  border: 3px solid #F89E37;
  color: #F89E37;
  padding: 13px 38px;
  :hover {
    color: white;
    background-color: #F89E37;
  }
`;

function Step({icon, title, subheading, image, points, buttonText, buttonLink,altButtonText, altButtonLink, flipped}) {
  return (
    <StepWrap flipped={flipped}>
      <Graphic>
        <img src={image} />
      </Graphic>
      <Content flipped={flipped}>
        <h3>{title}</h3>
        <p className="summary">{subheading}</p>

        <BreakLine/>
    
        {points.map((pointContent,i) => (
          <Point key={i} content={pointContent} />
        ))}
        <Link href={buttonLink}>
          <CTA>{buttonText}</CTA>
        </Link>
        {altButtonText &&
          <Link href={altButtonLink}>
            <GhostCTA>{altButtonText}</GhostCTA>
          </Link>
        }
      </Content>
    </StepWrap>

  )
}




const PointWrap = styled.div`
  position: relative;
  padding-left: 35px;
  margin-bottom: 25px;
  svg {
    width: 16px !important;
    color: #242A42;
    display: inline-block;
    position: absolute;
    top: 7px;
    left: 6px;
  }
  .content {
    display: inline-block;
    font-weight: 300;
    width: 486px;
    line-height: 32px;
    font-size: 16px;
    color: #363636;
  }
`;
function Point({content}) {
  return (
    <PointWrap>
      <FontAwesomeIcon icon={faCheck} />
      <p className="content">{content}</p>
    </PointWrap>
  )
}