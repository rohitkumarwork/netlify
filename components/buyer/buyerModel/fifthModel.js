import { useState } from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "./contactForm/contactForm";
import piggyBank from "../../../static/images/piggy_bank.png";

const firstModel = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="btn btn-orange" onClick={handleShow} title="First Time Home Buyer Guide">
          Buyer's Guide
      </a>

      <Modal
        style={{ zIndex: "9999" }}
        show={show}
        size="xl"
        onHide={handleClose}
      >
        <div className="modalLayout">
          <div className="stepsPopups" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <span
                  aria-hidden="true"
                  onClick={handleClose}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  {" "}
                  &times;
                </span>
                <div className="headerContent">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                      <div className="headContent">
                        <div className="title">First Time Home Buyer Guide</div>
                        <div className="subtitleContent">
                          As a first-time home Buyer in Toronto, there’s a whole
                          lot to learn. This is likely the biggest investment
                          you’ve ever made – and the more you know about buying
                          your first home, the better your decisions will be. So
                          grab a glass of wine, sit back, and prepare to learn
                          how to buy a house or condo.
                        </div>
                        <p>
                          <b>
                            Scroll to the bottom of the page for required
                            reading for first-time Buyers.
                          </b>
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                      <div className="piggyBox">
                        <img src={piggyBank} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stepsPanels">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                      <div className="contentWithSteps">
                        <p>
                          Are you a first time home buyer in the Greater Toronto
                          Area? Below, we outline the steps to buying your first
                          home.
                        </p>

                        <div className="stepsCounetr">
                          <div className="small">Step 1</div>
                          <div className="heading">
                            Getting Pre-Qualified for a Mortgage
                          </div>
                          <p>
                            The first step to buying a house or condo in Toronto
                            is finding out how much your bank is willing to lend
                            you. When you pre-qualify for a mortgage, your
                            lender will look at your:
                          </p>
                          <ul>
                            <li>Income</li>
                            <li>Debts</li>
                            <li>Downpayment</li>
                            <li>Credit history</li>
                          </ul>
                          <p>
                            The pre-approval should be in writing and will
                            include a guaranteed interest rate (usually valid
                            for 90 days). Pre-qualifying will ensure that you
                            know how much mortgage you can get, which in turn
                            will help you know what price range of homes you
                            should be targeting in your search. It allows you to
                            focus your house-hunting efforts and eliminates the
                            risk and uncertainty of financing once you find your
                            perfect home.
                          </p>
                        </div>

                        <div className="stepsCounetr">
                          <div className="small">Step 2</div>
                          <div className="heading">
                            Developing your First Time Home Buyer Wish List
                          </div>
                          <p>
                            Knowing what you need and want in your home is
                            critical. What are your must-haves, your
                            nice-to-haves, and your no-way-absolutely-nots? How
                            many bedrooms do you need? What kind of outdoor
                            space do you want? What about counter-tops,
                            appliances, and floors? You can’t get what you want
                            if you don’t know what you want.
                          </p>

                          <p>
                            Of course, the location will be a big decision –
                            what Toronto neighbourhood makes you feel at home?
                            We put together a list of 88 Questions to Ask When
                            Choosing a Neighbourhood.
                          </p>
                        </div>

                        <div className="stepsCounetr">
                          <div className="small">Step 3</div>
                          <div className="heading">
                            Developing your First Time Home Buyer Wish List
                          </div>
                          <p>
                            Buying a house or condo will likely be the biggest
                            purchase you’ll ever make – but don’t worry, you
                            don’t need to do it alone. Your team will include:
                          </p>
                          <ul>
                            <li>
                              A great Toronto Real Estate Agent who works
                              exclusively in your best interests. Think of your
                              REALTOR as the quarterback to the home buying
                              process. Click here to read How a REALTOR
                              Represents a Buyer.
                            </li>
                            <li>
                              A lender – a bank or mortgage broker to take you
                              through your financing options
                            </li>
                            <li>
                              A real estate lawyer to help with the legal
                              aspects of the purchase – click here to read about
                              how real estate lawyers help Buyers.
                            </li>
                          </ul>
                          <p>
                            There are thousands of professionals out there (of
                            varying quality), so ask your friends and family for
                            recommendations, do your research and don’t be
                            afraid to interview multiple people.
                          </p>
                        </div>

                        <div className="stepsCounetr">
                          <div className="small">Step 4</div>
                          <div className="heading">
                            House Hunting for First Time Home Buyers
                          </div>
                          <p>
                            Now that you are pre-qualified for a mortgage,
                            narrowed down your search and picked a great Toronto
                            REALTOR to work with, it’s time to start looking at
                            listings and houses. While realtor.ca is a good
                            place to start searching for homes, your real estate
                            agent will send you custom listings that match your
                            criteria.
                          </p>

                          <p>
                            House hunting will involve screening listings
                            electronically, previewing properties online, and
                            then finally going out to look at homes. This is
                            your opportunity to get a feel for the different
                            Toronto neighbourhoods, refine your wishlist, and
                            ask questions. While a wishlist seems kind of
                            scientific and is a useful tool in deciding which
                            properties to visit, the truth of the matter is that
                            most people walk into their perfect home and just
                            feel it. Of course, it helps when it satisfies your
                            needs and wants too, but don’t underestimate the
                            power of ‘just knowing’.
                          </p>
                        </div>
                        <div className="stepsCounetr">
                          <div className="small">Step 5</div>
                          <div className="heading">
                            Making an Offer as a First Time Home Buyer
                          </div>
                          <p>
                            Congrats! Your house hunting efforts have paid off,
                            and you’ve found the right home for you: it
                            satisfies your wants/needs, it’s in your price
                            range, and it feels right. The offer process is both
                            exciting and nerve-wracking. In Ontario, your offer
                            must be in writing and will form the Agreement of
                            Purchase and Sale (APS). The APS is a legally
                            binding document which contains:
                          </p>
                          <ul>
                            <li>The price you are prepared to pay</li>
                            <li>
                              The amount of your deposit (usually 5% of the
                              purchase price, due within 24 hours after the
                              offer is accepted)
                            </li>
                            <li>Closing date (the date you take possession)</li>
                            <li>
                              Inclusions you want (washer/dryer, big screen TV)
                            </li>
                            <li>
                              Conditions that need to be met for the deal to go
                              through Read more about conditions:
                            </li>
                          </ul>
                          <p>
                            Once your agent has submitted your offer, the Seller
                            can accept it, reject it or sign back a counter
                            offer. During these back-and-forth negotiations, you
                            may need to compromise on small things, but a great
                            REALTOR will work hard to get you what you want.
                          </p>
                        </div>
                        <div className="stepsCounetr">
                          <div className="small">Step 6</div>
                          <div className="heading">
                            House Hunting for First Time Home Buyers
                          </div>
                          <p>
                            Conditions are requirements within the Agreement of
                            Purchase and Sale that must be met for the sale to
                            go through. As a first time Buyer, you may have
                            included a financing condition in your offer, or a
                            condition that allows your lawyer to review the
                            legal details of the property, a status certificate
                            review condition or a home inspection condition. And
                            of course, you’ll need to submit a deposit–an amount
                            up to 5% of the purchase price, which is held in
                            trust until close. Once the conditions have been
                            met, the agreement and sale is said to be ‘firm’,
                            and now it’s just a matter of waiting for your
                            closing date. And of course, packing!
                          </p>
                        </div>
                        <div className="stepsCounetr">
                          <div className="small">Step 7</div>
                          <div className="heading">Closing the Deal</div>
                          <p>
                            Conditions are requirements within the Agreement of
                            Purchase and Sale that must be met for the sale to
                            go through. As a first time Buyer, you may have
                            included a financing condition in your offer, or a
                            condition that allows your lawyer to review the
                            legal details of the property, a status certificate
                            review condition or a home inspection condition. And
                            of course, you’ll need to submit a deposit–an amount
                            up to 5% of the purchase price, which is held in
                            trust until close. Once the conditions have been
                            met, the agreement and sale is said to be ‘firm’,
                            and now it’s just a matter of waiting for your
                            closing date. And of course, packing!
                          </p>
                        </div>
                      </div>
                    </div>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default firstModel;
