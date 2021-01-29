import styled from "styled-components";
import Link from "next/link";
import { useScrollPosition } from "../lib/scroll";
import { useState } from "react";

import ContactModal from "../components/modals/contactModal";
const TabletHide = styled.div`
  @media (max-width: 1060px) {
    display: none;
  }
`;
const MobileHide = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;

const HeaderWrap = styled.div`
  overflow: hidden;
  height: ${(props) => (props.staticHeader ? "60px" : " 96px")};
  // padding: 0px 30px;
  position: fixed;
  transition: top 0.15s ease-in-out, border-radius 0.15s ease-in-out;
  top: ${(props) =>
    props.fixedNavigation || props.staticHeader ? "0" : "78px"};
  box-sizing: border-box;
  z-index: 9999 !important;
  // width: ${(props) => (props.staticHeader ? "100%" : " 1300px")};
  width: 100%;
  border-radius: 0px;
  border-top-right-radius: ${(props) =>
    props.fixedNavigation ? "0px" : "10px"};
  border-top-left-radius: ${(props) =>
    props.fixedNavigation ? "0px" : "10px"};
  background-color: #ffffff;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  margin-top: 24px;
  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
    padding: 0px 0px !important;
  }

  @media (max-width: 750px) {
    border-radius: 0px;
    padding: 0px 10px;
  }
`;

const Logo = styled.img`
  max-height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  padding: ${(props) =>
    props.staticHeader ? "9px 0px" : " 25px 0px 25px 50px;"};
  @media (min-width: 320px) and (max-width: 480px) {
    padding-left: 0px;
  }
`;

const ButtonArea = styled.div`
  height: 100%;
  width: fit-content;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: space-between;
  vertical-align: top;
  margin-left: 22px;
  float: right;
`;

const HeaderAnchor = styled.a`
  line-height: ${(props) => (props.staticHeader ? "60px" : " 96px!important")};
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
  color: #2c2c2c;
  padding: 0px 17px;
  transition: color 0.2s, background-color 0.2s;
  display: inline-block;
  :hover {
    background-color: #f89e37;
    color: white;
  }
`;
const AccentedAnchor = styled(HeaderAnchor)`
  border-radius: 0px;
  background-color: #f89e37;
  padding: ${(props) => (props.staticHeader ? "11px 22px" : " 0px 25px")};
  vertical-align: top;
  color: white !important;
  line-height: 20px;
  margin: ${(props) => (props.staticHeader ? "10px 0px" : "  0px 0px")};
`;
const LogoWrap = styled.div`
  display: contents;
`;
const Name = styled.p`
  display: inline-block;
  font-size: 19px;
  margin-left: 12px;
  line-height: ${(props) => (props.staticHeader ? "64px" : " 100px")};
  vertical-align: bottom;
  cursor: pointer;
  span {
    font-weight: 700;
    margin-right: 3px;
  }
  @media (max-width: 750px) {
    font-size: 14px;
    margin-left: 6px;
  }
`;

export default ({ staticHeader }) => {
  const [fixedNavigation, setFixedNavigation] = useState(false);
  const [displayContactModal, setDisplayContactModal] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y < -72) {
        setFixedNavigation(true);
      } else {
        setFixedNavigation(false);
      }
    },
    [fixedNavigation]
  );

  return (
    <div>
      <div className="tel">CALL US NOW 647-689-6030</div>
      <HeaderWrap staticHeader={staticHeader} fixedNavigation={fixedNavigation}>
        {displayContactModal && (
          <ContactModal setDisplayContactModal={setDisplayContactModal} />
        )}
        <Link href="/">
          <LogoWrap>
            <Logo
              staticHeader={staticHeader}
              alt="Site logo for MyTownhome"
              src={require("../static/MTH_clipped.svg")}
            />
            <Name staticHeader={staticHeader}>
              <span>MY</span>TOWNHOME
            </Name>
          </LogoWrap>
        </Link>

        <ButtonArea>
          <MobileHide>
            <Link href="/buying-a-townhome">
              <HeaderAnchor staticHeader={staticHeader} title="Buyer page">
                Buyers
              </HeaderAnchor>
            </Link>
            <Link href="/selling-your-townhome">
              <HeaderAnchor staticHeader={staticHeader} title="Seller page">
                Sellers
              </HeaderAnchor>
            </Link>
            <Link href="/search-townhomes">
              <HeaderAnchor
                staticHeader={staticHeader}
                title="Search Townhomes"
              >
                Search
              </HeaderAnchor>
            </Link>
          </MobileHide>
          <TabletHide>
            <Link href="/gta-new-townhomes">
              <HeaderAnchor
                staticHeader={staticHeader}
                title="Preconstruction Townhomes"
              >
                Precons
              </HeaderAnchor>
            </Link>
            <Link href="/gta-townhomes-guide">
              <HeaderAnchor
                staticHeader={staticHeader}
                title="Neighbourhood Guides"
              >
                Guides
              </HeaderAnchor>
            </Link>
            <Link href="/blog">
              <HeaderAnchor staticHeader={staticHeader} title="Townhomes Blog">
                Blog
              </HeaderAnchor>
            </Link>
          </TabletHide>
          <AccentedAnchor
            staticHeader={staticHeader}
            title="Search Townhomes"
            onClick={() => {
              setDisplayContactModal(true);
            }}
          >
            Let's talk
          </AccentedAnchor>
        </ButtonArea>
      </HeaderWrap>
    </div>
  );
};
