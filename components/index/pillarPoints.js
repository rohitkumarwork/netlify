import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  faPencilRuler,
  faLaptop,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";

import {
  monthlyMortgage,
  mortgageInsurance,
  landTransferTax,
} from "../search-townhomes/mortgageCalculations";

const GET_LISTINGS = gql`
  query getListings(
    $viewportPolygon: geometry
    $prop_type: [String!]
    $type: String
    $bedrooms: [float8!]
    $bathrooms: [float8!]
    $minPrice: Int
    $maxPrice: Int
    $minFootage: Int
    $maxFootage: Int
  ) {
    listings(
      where: {
        type: { _eq: $type }
        prop_type: { _in: $prop_type }
        bedrooms: { _in: $bedrooms }
        bathrooms: { _in: $bathrooms }
        price: { _gte: 800000, _lte: 1200000 }
        square_footage: { _gte: $minFootage, _lte: $maxFootage }
      }
    ) {
      address
      subdivision
      city
      price
      thumbnail
      bedrooms
      bathrooms
      prop_type
      square_footage
      id
    }
  }
`;

const Title = styled.h4`
  color: #363636;
  font-size: 32px;
`;
const Pillars = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;
const HotListingProject = styled.div`
  width: 100%;
  float: left;
  position: relative;
  background: #fbfbfb;
  display: flex;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;
const LeftSection = styled.div`
  width: 30%;
  float: left;
  position: relative;
  padding: 50px;
  background: #f89e37;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    padding: 20px;
  }
  @media (max-width: 1600px) and (min-width: 1440px) {
    padding: 35px 35px 0px;
  }
`;
const TitleContent = styled.div`
  width: 100%;
  float: left;
  position: relative;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 25px;
    line-height: 30px;
  }
`;
const MainTitle = styled.div`
  width: 100%;
  float: left;
  position: relative;
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 46px;
  color: #fff;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 25px;
    line-height: 30px;
  }
`;
const SubTitle = styled.div`
  width: 100%;
  float: left;
  position: relative;
  color: #fff;
  margin-bottom: 18px;
  font-weight: 300;
  font-size: 18px;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 13px;
  }
`;
const MortageTable = styled.div`
  width: 100%;
  float: left;
  position: relative;
  box-sizing: border-box;
`;
const Headingtitle = styled.div`
  width: 100%;
  float: left;
  position: relative;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 22px;
  }
`;
const MotaageTablePanel = styled.div`
  width: 100%;
  float: left;
  position: relative;
  padding: 10px;
  background: #f89e37;
  box-shadow: 0px 0px 37px 0px #d2700096;
  border-radius: 7px;
  box-sizing: border-box;
`;
const Table = styled.table`
  width: 100%;
  float: left;
  color: #fff;
  box-sizing: border-box;
  th {
    padding: 15px 20px;
    text-align: left;
  }
  td {
    padding: 16px 18px;
    border-top: 1px solid #ffffff2e;
    font-size: 13px;
  }
`;
const ActionBtn = styled.div`
  width: 100%;
  float: left;
  position: relative;
  text-align: center;
  margin: 20px 0;
  box-sizing: border-box;
  .learnMore {
    height: 50px;
    line-height: 50px;
    background: #fffefd;
    display: inline-block;
    padding: 0px 50px;
    color: #f89e37;
    box-sizing: border-box;
    box-shadow: 0px 0px 37px 0px #d2700096;
  }
`;

const RightSection = styled.div`
  width: 70%;
  float: left;
  position: relative;
  padding: 30px 50px;
  box-sizing: border-box;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 30px 20px;
    width: 100%;
  }
  @media (max-width: 1600px) and (min-width: 1440px) {
    padding: 20px 25px 0px;
  }
  ul {
    width: 100%;
    float: left;
    position: relative;
    margin-bottom: 20px;
    a {
      background: transparent !important;
      color: #9a9a9a;
      font-size: 18px;
      border-bottom: 5px solid transparent;
      border-radius: 0px !important;
      padding: 15px 47px;
      font-weight: 500;
      @media (min-width: 320px) and (max-width: 480px) {
        padding: 10px 10px;
        width: 100%;
      }
      &.active {
        color: #f89e37 !important;
        border-color: #f89e37;
      }
    }
  }
  .tab-content {
    width: 100%;
    float: left;
    position: relative;
    padding: 25px;
    background: #fff;
    box-shadow: 0px 0px 15px 0px #d5d5d552;
    box-sizing: border-box;
    @media (max-width: 1600px) and (min-width: 1440px) {
      padding: 20px 25px 0px;
    }
    .titleBox {
      width: 100%;
      float: left;
      position: relative;
      .title {
        width: 100%;
        float: left;
        position: relative;
        font-size: 22px;
        font-weight: 600;
        color: #5d5d5d;
        margin-bottom: 10px;
      }
      .subtitle {
        width: 100%;
        float: left;
        position: relative;
        font-size: 15px;
      }
    }
  }
`;
const Product = ({ listing }) => {
  const router = useRouter();
  const downpaid = listing.price * (listing.price > 1000000 ? 0.8 : 0.9);
  const amortizationPeriod = 25;
  const interestRate = 2.15;
  const mortgageInsuranceRequired = mortgageInsurance(
    listing.price > 1000000 ? 10 : 20,
    listing.price
  );
  const totalPrice = downpaid + mortgageInsuranceRequired;
  const monthlyMort = monthlyMortgage(
    interestRate,
    totalPrice,
    amortizationPeriod
  );
  const SendToSearch = (list) => {
    router.push(
      {
        pathname: "/search-townhomes",
        query: { listingData: JSON.stringify(list) },
      },
      "/search-townhomes"
    );
  };
  return (
    <div
      className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3"
      onClick={() => SendToSearch(listing)}
    >
      <div className="hotProjectBox">
        <div
          className="projectPic"
          style={{ backgroundImage: `url(${listing.thumbnail})` }}
        ></div>
        <div className="projectDetails">
          <div className="title">{listing.address}</div>
          <div className="location">{listing.city}</div>
          <div className="homePro">
            <ul>
              <li>
                <div className="bedDetails">
                  <img src="/static/images/bed.png" />
                  {listing.bedrooms} Bedrooms
                </div>
              </li>
              <li>
                <div className="bedDetails">
                  <img src="/static/images/bath.png" />
                  {listing.bathrooms} Bathroom
                </div>
              </li>
            </ul>
          </div>
          <div className="price">${listing.price.toLocaleString()}</div>
          <div className="squrFt">
            ${Math.round(monthlyMort).toLocaleString() || "-"} Est. mortgage
          </div>
        </div>
      </div>
    </div>
  );
};
export default () => {
  const { loading, error, data } = useQuery(GET_LISTINGS, {
    variables: {
      prop_type: ["Att/Row/Twnhouse", "Condo Townhouse"],
    },
  });

  let list = []
  if(data !== undefined){
    list = data.listings.sort(() => Math.random() - Math.random()).slice(0, 8)
  }
  
  const [step, setStep] = useState(0);
  // const shuffle = (a) => {
  //   console.log("a", a);
  //   var j, x, i;
  //   for (i = a.length - 1; i > 0; i--) {
  //     j = Math.floor(Math.random() * (i + 1));
  //     x = a[i];
  //     a[i] = a[j];
  //     a[j] = x;
  //   }
  //   return a;
  // };
  return (
    <div>
      <HotListingProject>
        <LeftSection>
          <TitleContent>
            <MainTitle>Find the townhome of your dreams!</MainTitle>
            <SubTitle>
              We have every townhome and preconstruction townhome in the GTA!
            </SubTitle>
            <SubTitle>
              With MYTOWNHOME, a dedicated Home Buying REALTOR® in your
              community will help you find the perfect home for you and your
              family, and provide all the support you need through the whole
              buying process.
            </SubTitle>
          </TitleContent>

          <MortageTable>
            <Headingtitle> TD Special Mortgage Rates</Headingtitle>
            <MotaageTablePanel>
              <Table>
                <thead>
                  <tr>
                    <th>Term </th>
                    <th>Special Rate</th>
                    <th>APR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3 Year Fixed Closed</td>
                    <td> 2.49%</td>
                    <td>2.53%</td>
                  </tr>
                  <tr>
                    <td>5 Year Fixed Closed</td>
                    <td> 2.57%</td>
                    <td>2.59%</td>
                  </tr>
                  <tr>
                    <td>5 Year Fixed Closed High-Ratio</td>
                    <td> 2.37%</td>
                    <td>2.39%</td>
                  </tr>
                  <tr>
                    <td>5 Year Variable Closed</td>
                    <td> 2.20%</td>
                    <td>2.22%</td>
                  </tr>
                </tbody>
              </Table>
            </MotaageTablePanel>
          </MortageTable>

          <ActionBtn>
            <a className="learnMore">Learn More</a>
          </ActionBtn>
        </LeftSection>
        <RightSection>
          {/* <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className={step == 0 ? "nav-link active" : "nav-link"}
                id="pills-home-tab"
                data-toggle="pill"
                href="#HotListings"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                onClick={() => setStep(0)}
              >
                MTH Hot Listings
              </a>
            </li>
            <li className="nav-item">
              <a
                className={step == 1 ? "nav-link active" : "nav-link"}
                id="pills-profile-tab"
                data-toggle="pill"
                href="#GeneralListings"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                onClick={() => setStep(1)}
              >
                General Listings
              </a>
            </li>
            <li className="nav-item">
              <a
                className={step == 2 ? "nav-link active" : "nav-link"}
                id="pills-contact-tab"
                data-toggle="pill"
                href="#HotProjects"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
                onClick={() => setStep(2)}
              >
                Precon Hot Projects
              </a>
            </li>
          </ul> */}

          {step == 0 && (
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="HotListings"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="listingBox">
                  <div className="titleBox">
                    <div className="title">MTH Hot Listings</div>
                    <div className="subtitle">
                      Looking for a great deal, check out our MTH Listings! When
                      selling your home, with hundreds of visits a day from
                      townhome buyers, why wouldn't you want your townhome
                      showcased here on our main page! Get full exposure with
                      MYTOWNHOME!
                    </div>
                  </div>

                  <div className="hotListBox">
                    <div className="row">
                      {list.length > 0 &&
                        list.map((listing) => {
                          return <Product listing={listing} />;
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* {step == 1 && (
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="HotListings"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="listingBox">
                  <div className="titleBox">
                    <div className="title">General Listings</div>
                    <div className="subtitle">
                      Here are a few hand picked listings from throughout the
                      GTA. Don't see what you are looking for? Visit our search
                      and personalize your listings search or simply reach out
                      to us and our customer service team will be glad to help!
                    </div>
                  </div>

                  <div className="hotListBox">
                    <div className="row">
                      {
                        data && data.listings.map((listing) => {
                          <Product listing={listing} />
                        })
                      }
    
                    </div>
                    <div className="row mobileview">
                      {[1, 2, 3, 4].map((i, j) => (
                        <Product key={`${i}${j}mp`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}
          {/* {step == 2 && (
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="HotListings"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="listingBox">
                  <div className="titleBox">
                    <div className="title">Precon Hot Projects</div>
                    <div className="subtitle">
                      Welcome to the #1 Townhome Precon site in the GTA. We
                      showcase all the townhome projects for you and here are
                      some of the projects that are offering great deals! If
                      your not sure what you are looking for please reach out to
                      us and our Precon Team Specialist will guide you thru your
                      search!
                    </div>
                  </div>

                  <div className="hotListBox">
                    <div className="row">
                      {[1, 2, 3, 4].map((i, j) => (
                        <Product key={`${i}${j}p`} />
                      ))}
                    </div>
                    <div className="row mobileview">
                      {[1, 2, 3, 4].map((i, j) => (
                        <Product key={`${i}${j}mp`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </RightSection>
      </HotListingProject>
    </div>
  );
};

const PillarWrap = styled.div`
  width: 300px;
  display: inline-block;
  padding: 17px 15px;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  svg {
    color: #f89e37;
    height: 70px !important;
    width: 70px !important;
    path {
      stroke: #292929;
      stroke-width: 7px;
      stroke-linejoin: round;
    }
  }
  h3 {
    font-size: 24px;
    color: #363636;
    margin: 22px 0px 10px;
  }
  p {
    color: #363636;
    line-height: 24px;
    font-size: 16px;
  }
`;
function PillarPoint({ icon, heading, content }) {
  return (
    <PillarWrap>
      <FontAwesomeIcon icon={icon} />
      <h3> {heading}</h3>
      <p>{content}</p>
    </PillarWrap>
  );
}
