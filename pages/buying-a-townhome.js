import { useState } from "react";

import styled from "styled-components";

import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

import blog3 from "../static/images/blog3.png";
import blog1 from "../static/images/img1.jpg";
import faq from '../static/images/faq.jpg';

import ClientLayout from "../layouts/clientLayout.js";

import BuyerHeroText from "../components/buyer/hero/buyerHeroText";

import BuyerBtnCard from "../components/buyer/card/buyerBtnCard";

import BuyerCard from "../components/buyer/card/buyerCard";

import { Title } from "../components/generic/GenericComponents";

// import Header from "../components/seoComponents/header";

// import PackagesWrap from "../components/packages/packagesWrap";
// import Package from "../components/packages/package";
// import PackagePoint from "../components/packages/packagePoint";

// import { BuyerPackages } from "../components/packages/packageData";
// import FullWidthPackage from "../components/packages/fullWidthPackage";

// import FaqQuestion from "../components/generic/faqQuestion";

const Packages = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px 5px;
`;

const ModifiedTitle = styled(Title)`
  margin-top: 35px;
  margin-bottom: 5px;
`;

export default () => {
  return (
    <ClientLayout>
      <BuyerHeroText
        title={"Buying A Townhome"}
        subtitle={"Welcome to the Future of Real Estate in the GTA"}
        paratext={
          "Why stick to just one option? We offer you a variety of packages that you can pick and choose from to tailor your home buying experience to your exact preference!"
        }
      />
      <BuyerBtnCard
        cardno={1}
        cardtitle={"STEPS TO BUYING A HOME"}
        imgsrc={blog1}
        paratitle={"DO YOU KNOW ALL THE CORRECT STEPS AS A BUYER?"}
        para={
          "We would like you to know all the correct information you need in the order it needs to be done as a knowledgeable buyer."
        }
        para1='Use our MTH Check List'
        btnnameone={"DSFDSFDF"}
        btnnametwo={"CTA Second"}
        btnnamethree={"CTA Third"}
        btnnamefour={"CTA Fourth"}
        btnnamefive={"CTA Five"}
        btnnamesix={"CTA Six"}
        bigbtn={1}
        buttonName={'SEE CHECKLIST NOW'}
      />

      <BuyerCard
        cardno={2}
        cardtitle={"CHOOSE YOUR PACKAGE"}
        imgsrc={blog3}
        paratitle={"FREE SERVICES AND CASHBACK"}
        para={
          "We at MTH cover your expenses and give you money back in your pocket with packages for all budgets!"
        }
        para1='Find out what you can get now!'
        bigbtn={2}
        buttonName={'SEE CHECKLIST NOW'}
      />

      <BuyerCard
        cardno={3}
        cardtitle={"HAVE QUESTIONS?"}
        imgsrc={faq}
        paratitle={"SOUND TOO GOOD TO BE TRUE?"}
        para={
          "Since we are a new fresh concept in real estate, you obviously have questions and some doubts, well, we have the answers for you!"
        }
        bigbtn={3}
        buttonName={'FAQ'}
      />
    </ClientLayout>
  );
};

{
  /*--------------------------------------------------------------------------*/
}

{
  /* <Header title={"Buying A Townhome"} /> */
}

{
  /* <PackagesWrap
        title={"Welcome to the Future of Real Estate in the GTA"}
        subTitle={
          "Why stick to just one option? We offer you a variety of packages that you can pick and choose from to tailor your home buying experience to your exact preference!"
        }
      > */
}
{
  /* <Packages>
          {BuyerPackages.map((buyerPackage) => {
            return (
              <Package
                title={buyerPackage.title}
                count={buyerPackage.count}
                qualifier={buyerPackage.qualifierText}
              >
                {buyerPackage.points.map((point) => {
                  return (
                    <PackagePoint
                      active={point.active}
                      content={point.content}
                    />
                  );
                })}
              </Package>
            );
          })}
        </Packages> */
}

{
  /* <FullWidthPackage
          count={4}
          title="Direct Offer"
          listText="Know the exact property you want? Quickly get an offer out and save money!"
          listItems={[
            "Let us know the listing you are interested in. We'll help you book the showing and discuss tactics.",
            "Your realtor will discuss, create and submit an offer on your behalf.",
            "Usually, you would split the commission equally with your realtor giving you a 1.25% rebate.",
            "However, with our direct offer program your realtor only takes 0.5%, giving you the remaining 2%!",
          ]}
          subText="However if your first offer doesnt work out, dont worry! You can make an offer on an additonal house before we seamlessly moving you to into one of our first three packages!"
          icon={faMapMarkedAlt}
        /> */
}

{
  /* <ModifiedTitle>Frequently Asked Questions</ModifiedTitle>
      <FaqQuestion question="How does this look?" answer="It looks pretty decent!"/>
      <FaqQuestion question="How does this look?" answer="It looks pretty decent!"/>
      <FaqQuestion question="How does this look?" answer="It looks pretty decent!"/>
      <FaqQuestion question="How does this look?" answer="It looks pretty decent!"/> */
}
{
  /* </PackagesWrap> */
}
