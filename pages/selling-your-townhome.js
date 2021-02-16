import styled from 'styled-components'
import ClientLayout from '../layouts/clientLayout.js';
import Header from '../components/seoComponents/header'

import PackagesWrap from '../components/packages/packagesWrap'

import Package from '../components/packages/package'
import PackagePoint from '../components/packages/packagePoint'

import {SellerPackages} from '../components/packages/packageData'

import FullWidthPackage from '../components/packages/fullWidthPackage'
import { faMapMarkedAlt  } from "@fortawesome/free-solid-svg-icons";


import FaqQuestion from '../components/generic/faqQuestion'
import {Title} from '../components/generic/GenericComponents'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck  } from "@fortawesome/free-solid-svg-icons";

import Sellerpanel from '../components/seller/Seller'


const DIYWrap = styled.div`
  background-color: #f1f1f1;
  position: relative;
  margin: 7px;
  border-radius: 15px;
  padding: 6px 6px 6px 6px;
`;
const DIYTitle = styled.p`
  color: black;
  font-size: 19px;
  padding: 4px 0px;
`;
const Price = styled.p`
  position: absolute;
  font-size: 18px;
  top: 10px;
  right: 13px;
  font-weight: 600;
  color: black;
`;
const Point = styled.p`
  font-size: 14px;
  margin: 3px 0px;
  svg {
    margin-right: 5px;
  }
`;

const DIYPackage = ({price, title, points}) => {
  return (
    <DIYWrap>
     
      <DIYTitle>{title}</DIYTitle>
      <Price>${price}</Price>
      {points.map((point) => {
        return <Point><FontAwesomeIcon icon={faCheck} />{point}</Point>
      })}

    </DIYWrap>
  )
}



















const ModifiedTitle = styled(Title)`
  margin-top: 35px;
  margin-bottom: 5px;
`;

const Packages = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px 5px;
`;

const CutoffText = styled.p`
  text-align: center;
  margin: 25px 0px 0px;
  font-weight: 600;

`;

export default () => {
  return (
    <ClientLayout>
       <Sellerpanel/>
      {/* <Header title={'Selling Your Townhome'} /> */}

      {/* <PackagesWrap  
        title={'Welcome to the Future of Real Estate in the GTA'} 
        subTitle={'Why stick to just one option? We offer a variety of packages to fit to let you sell your home the way you want it to be sold. Get the services you need, and sell your house for its best price!'}>
        
        <Packages>
          <Package title={'Do it yourself!'} qualifier="0% Commission" >
            <DIYPackage price="699" title="Get Started" points={[
              "Professional Market Analysis",
              "On Site Realtor Consult ",
              "'For Sale' Sign and Post Installed",
              "Premium Real Estate Photography",
              "MLS & Realtor.ca Post",
              "Standard Feature Sheet ",
              "Community/School Reports ",
              "Social Media Post",
              "Free Legal Consult ",
              "Free Mortgage Consult "
            ]} />

            <DIYPackage price="699" title="Showing Assist" points={[
              "Secure Lockbox",
              "Schedule Lock Booking Service",
              "SecureRelease LB via TREB number"
            ]} />

            <DIYPackage price="699" title="Offer Assist" points={[
              "Discuss & Review Offer",
              "Finalize Offer"
            ]} />
            <DIYPackage price="699" title="The Close" points={[
              "Real Estate Lawyer",
              "MyTownhome Concierge"
            ]} />

          </Package>

          {
            SellerPackages.map((sellerPackage) => {
              return <Package title={sellerPackage.title} count={sellerPackage.count} qualifier={sellerPackage.qualifierText}>
                {
                  sellerPackage.points.map((point) => {
                    return <PackagePoint active={point.active} nocheck compressed  content={point.content} />
                  })
                }
                <CutoffText>Home price above $700k & get:</CutoffText>
                {
                  sellerPackage.midpoints.map((point) => {
                    return <PackagePoint active={point.active} nocheck compressed content={point.content} />
                  })
                }

                <CutoffText>Home price above $1M & get:</CutoffText>
                {
                  sellerPackage.millionpoints.map((point) => {
                    return <PackagePoint active={point.active} nocheck compressed content={point.content} />
                  })
                }
              </Package>
            })
          }


        </Packages>

        <FullWidthPackage 
          black
          count={4} 
          title='Black Edition' 
          listText="Know the exact property you want? Quickly get an offer out and save money!"
          listItems={[
            "Let us know the listing you are interested in. We'll help you book the showing and discuss tactics.",
            "Your realtor will discuss, create and submit an offer on your behalf.",
            "Usually, you would split the commission equally with your realtor giving you a 1.25% rebate.",
            "However, with our direct offer program your realtor only takes 0.5%, giving you the remaining 2%!"
          ]}
          subText="However if your first offer doesnt work out, dont worry! You can make an offer on an additonal house before we seamlessly moving you to into one of our first three packages!"
          icon={faMapMarkedAlt}
          mainColor="#F89E37"
        /> */}


        {/* <ModifiedTitle>Frequently Asked Questions</ModifiedTitle>
        <FaqQuestion question="How does this look?" answer="It looks pretty decent!"/>
        <FaqQuestion question="How does this look?" answer="It looks pretty decent!"/>
        <FaqQuestion question="How does this look?" answer="It looks pretty decent!"/>
        <FaqQuestion question="How does this look?" answer="It looks pretty decent!"/> */}
      {/* </PackagesWrap> */}


    </ClientLayout>
  )
}
