import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube  } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

const Wrap = styled.div`
  width: 100%;
  margin: 0px auto;
  float:left;
`;

const Social = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  height: 68px;
  padding: 11px 0px;
  box-sizing: border-box;
`;

const CenteredWrap = styled.div`
  width: 1150px;
  margin: 0px auto;
  height: 100%;
  @media(min-width:320px) and (max-width:480px){
    width:100%;
   }
`;

const ContentBox = styled.div`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  img, svg {
    height: 100%;
    cursor: pointer;
  }
`;

const LogoSection = styled(ContentBox)``;

const SocialSection = styled(ContentBox)`
  text-align: right;
  padding: 7px 0px;
  svg {
    margin: 0px 10px;
    color: grey;
  }
`;
const SecondaryLink = styled.a`
  img {
    height: 80%;
    position: relative;
    bottom: 10%;
  }
`;


export default () => (
  <Wrap>
    <Social>
      <CenteredWrap>
        <LogoSection>
        <Link href="/">
          <img src={require('../static/MTH_logo.svg')} alt="The MyTownhome logo"/>
        </Link>
        <SecondaryLink href="https://mysimplehome.ca">
          <img src={require('../static/SH_logo.svg')} alt="The logo for our parent company, SimpleHome"/>
        </SecondaryLink>
        </LogoSection>
        <SocialSection>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faYoutube} />
        </SocialSection>
      </CenteredWrap>
    </Social>
  </Wrap>
)


