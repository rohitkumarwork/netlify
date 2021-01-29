import Faq from "./faq";

const buyerFaq = () => {
  return (
    <>
      <div className="card-body transparent">
        <div className="faqPanel">
          <h3>Frequently Asked Questions</h3>
          <div className="row">
            <Faq
              question={"What’s the catch?"}
              answer={`It’s as good as it sounds. Any client that purchases an existing resale or pre-construction home with MTH will receive 50% of commission profit paid by the Seller.`}
            />
            <Faq
              question={"How does the cash back or realtor rebate work?"}
              answer={`When you use the services of a MTH Realtor as a Buyer, the Seller will compensate our agent 2.5% of the purchase price. At MTH, our agents give half of this commission back to you, the client.`}
            />

            <Faq
              question={"When do I receive my cash back rebate?"}
              answer={`Once the property has closed successfully, our lawyer will process the deal and send the commission to our brokerage. This can take 2-3 weeks. Once our brokerage office receives the funds a bank draft or electronic transfer is sent to you.`}
            />
            <Faq
              question={"Can I get this in cash?"}
              answer={"No unfortunately cash payments are not authorized."}
            />
            <Faq
              question={"Is this legal?"}
              answer={`Yes, this is legal and it is authorized by the Real Estate Council of Ontario.`}
            />

            <Faq
              question={
                "Why don’t other agents do the same or offer this rebate?"
              }
              answer={`The buyer agent commission has not changed but with home prices in the GTA growing over the years, there is more money now to share. We at MTH believe the fair and responsible thing to do is to reduce the costs and expenses for a buyer.`}
            />

            <Faq
              question={"What are my tax implications on the rebate I receive?"}
              answer={`We are unable to give professional accounting advice for our clients. This question is best directed at personal or professional accountants as we cannot guarantee if there are or are not tax implications with the cash back you receive.`}
            />

            <Faq
              question={
                "In a multiple bidding(?) deal do I still get the rebate?"
              }
              answer={`Yes you do and you can utilize the MTH cash back towards making a stronger offer during the bidding process.`}
            />

            <Faq
              question={"Is the rebate guaranteed in writing?"}
              answer={`Yes, we include this in our buyer representation contract with you as an additional schedule.`}
            />

            <Faq
              question={"Which inspection company and lawyers do you use"}
              answer={`We use the services of Light House Inspections. They are a reputable and professional team of inspectors that we have cooperated with throughout millions of dollars of transactions. https://lighthouseinspections.com/ We partner with various real estate law firms that the client is able to choose from. Some of the law firms we have agreements with are JDC Law LLP and Chera Law.`}
            />

            <Faq
              question={
                "Can I use my own home inspector and/or real estate lawyer?"
              }
              answer={`A. Absolutely. Here at MTH we are all about transparency and choices. If the client decides to use their preferred inspector or law firm, MTH will reimburse up to a maximum of $500 towards the cost of each service, payable upon closing. This will be guaranteed in writing on the Buyer Representation Agreement as an additional schedule clause.`}
            />

            <Faq
              question={"Am I paying for these services or is MTH?"}
              answer={`For liability and insurance purposes due to the client being the party who ordered the inspection on the property, the client is initially required to pay the inspection fee. MTH will reimburse the full amount paid for the inspection upon successful disbursement of commission to our brokerage. Our legal team will automatically deduct their legal fees from our realtor's commission earned. You will not be charged for the fees for lawyer review.`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default buyerFaq;
