import { useState } from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "./contactForm/contactForm";
import piggyBank from "../../../static/images/piggy_bank.png";

const sixModel = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a
        href="#"
        className="btn btn-orange"
        data-toggle="modal"
        data-target="#stepscomp"
        onClick={handleShow}
      >
        Steps to Buying a Home
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
                <div className="headerContent blue">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                      <div className="headContent">
                        <div className="title">Steps to Buying a Home</div>
                        <div className="subtitleContent">
                          There’s a lot to know when it comes to buying a home
                          in Toronto. Whether you’re buying your first condo,
                          moving to a bigger house or downsizing, our in-depth
                          Buying Guide will take you through all the steps.
                          Click through the tabs to find out how to:
                        </div>
                        <ul>
                          <li>
                            Get pre-qualified for a mortgage, make important
                            financing decisions and choose a lender
                          </li>
                          <li>House hunt like a pro, online and in-person</li>
                          <li>
                            Make an offer and not be intimidated by the
                            paperwork, negotiations or bidding wars
                          </li>
                          <li>
                            Be prepared for the closing process and costs so you
                            don’t get caught off-guard
                          </li>
                        </ul>
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
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="home-tab"
                              data-toggle="tab"
                              href="#home"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              Financing
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="profile-tab"
                              data-toggle="tab"
                              href="#profile"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              Househunting
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="contact-tab"
                              data-toggle="tab"
                              href="#Offers"
                              role="tab"
                              aria-controls="contact"
                              aria-selected="false"
                            >
                              Offers
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="contact-tab"
                              data-toggle="tab"
                              href="#Closing"
                              role="tab"
                              aria-controls="contact"
                              aria-selected="false"
                            >
                              Closing
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            <h2>Financing</h2>
                            <p>
                              There’s a lot to know when it comes to financing
                              your new house or condo. You’ll need to get
                              pre-qualified for a mortgage, make some important
                              financing decisions and of course, eventually
                              choose a lender.
                            </p>

                            <div className="stepsCounetr">
                              <div className="small">Step 1</div>
                              <div className="heading">
                                Get Pre-Approved for a Mortgage
                              </div>
                              <p>
                                There’s a reason we put this section first: the
                                first step to buying a house or condo in Toronto
                                should be finding out how much your bank is
                                willing to lend you. When you pre-qualify for a
                                mortgage, your lender will look at your income,
                                your debts and your down payment. It’s important
                                to take that pre-qualification to the next level
                                before you fall in love with a house by getting
                                pre-approved for a mortgage. A mortgage
                                pre-approval will be in writing (generally valid
                                for 90 or 120 days) and will require you to
                                prove your income and credit history.
                                Pre-approvals will include an interest rate
                                guarantee.
                              </p>
                              <p>
                                Of course, a pre-approval is not a guarantee
                                that a lender will lend you a certain amount of
                                money for any home. Lenders want to know that
                                the home they are purchasing with you (by
                                lending you the money) is worth what you paid.
                                In Toronto, banks generally order an independent
                                appraisal of a home before they advance the
                                mortgage money.
                              </p>
                              <p>
                                Getting pre-approved will ensure that you know
                                how much mortgage you can get, which in turn
                                will help you know what price range of homes you
                                should be targeting in your search. It allows
                                you to focus your house-hunting efforts and
                                eliminates the risk and uncertainty of financing
                                once you find your perfect home.{" "}
                              </p>
                            </div>

                            <div className="stepsCounetr">
                              <div className="small">Step 2</div>
                              <div className="heading">Mortgage Decisions</div>
                              <p>
                                Mortgages can seem intimidating, especially for
                                the first-time buyer. Once you’ve qualified for
                                a mortgage, there are some basic decisions you
                                will have to make before you take possession of
                                your house or condo: Mortgage term,
                                amortization, interest rate and type of
                                mortgage. Read on to find out what all of that
                                means and use our handy Mortgage Calculator to
                                estimate what your payments would be.
                              </p>
                              <h4>Mortgage Term and Amortization</h4>
                              <p>
                                The mortgage term and amortization period affect
                                the amount of money you can borrow (and thus the
                                price of the home you can buy), and dictate how
                                much your monthly payment will be. <br />
                                1. Mortgage term <br />
                                This is the amount of time a lender will loan
                                you money for – typically from 6 months to 5
                                years. When the term is up, the remaining amount
                                is payable in full unless you arrange new
                                financing for another term. <br />
                                Choosing a mortgage term is tricky and requires
                                you to be knowledgeable about trends in the
                                marketplace, as well as having a sense as to the
                                amount of risk you’re willing to endure. If you
                                choose a 6-month term, and interest rates
                                increase drastically in that time frame, will
                                you still be able to afford your home?
                              </p>
                              <p>
                                2. Amortization
                                <br />
                                Few (if any) of us can pay off the entire
                                principal of a large mortgage in a six month or
                                even a five-year term. Imagine how big your
                                payments would be! To help you out, lenders
                                calculate or amortize, the mortgage payments
                                over a much longer time, often as long as 25
                                years. They aren’t loaning you the money for a
                                single 25-year period–they’re just calculating
                                the payment schedule as if it will take you that
                                long to pay back the principal plus interest.
                                You will probably renew the mortgage several
                                times during the amortization period, and you
                                always have the option to change the
                                amortization depending on market conditions or
                                your financial situation. The longer the
                                amortization period, the lower your individual
                                payments will be – but this also means you’ll be
                                paying more in interest.
                              </p>
                              <p>
                                3. Payments
                                <br />
                                Most mortgage payments consist of two parts:
                                principal and interest. This is known as a
                                blended mortgage payment. Each payment reduces
                                the balance owed on the mortgage by the portion
                                of the payment that is credited to the
                                principal. Over time, the proportion of your
                                payment that reduces the principal balance will
                                increase. The faster you can pay down the
                                remaining balance, the less total interest
                                you’ll pay. There are many ways you can pay down
                                your mortgage faster, from accelerating your
                                payments (e.g. paying biweekly instead of twice
                                a month, for 26 payments per year instead of 24)
                                to making lump sum payments on your mortgage;
                                your lender can help define the right strategy
                                for you.
                              </p>

                              <p>
                                4. Interest Rates
                                <br />
                                The interest rate is one of the biggest
                                contributing factors to how much you end up
                                paying for your home, both on a monthly basis
                                and over the life of your mortgage. Interest is
                                the cost of borrowing money. Interest rates
                                fluctuate with the economy. The interest rate
                                you commit yourself to at the beginning of the
                                term can have a significant effect on the amount
                                you pay each month for your mortgage. There are
                                two basic types of interest rates used in
                                mortgage products: fixed-rate and variable-rate:
                              </p>
                              <ul>
                                <li>
                                  Fixed-rate mortgage – Essentially, this means
                                  committing to a single interest rate that will
                                  not change for the term of your mortgage. This
                                  strategy locks in how much of your monthly
                                  payment repays the principal vs. going to
                                  interest. Fixed-rate mortgages are great in an
                                  economy where interest rates are going up, as
                                  you never have to risk paying higher interest
                                  rates.
                                </li>

                                <li>
                                  Variable-rate mortgage – There are two types
                                  of variable-rate mortgages. With the first
                                  kind, the amount of your monthly payment
                                  fluctuates with the bank’s prime interest rate
                                  – if rates go up, your payment increases; if
                                  rates go down, your payment decreases. The
                                  second type of variable rate mortgage has a
                                  consistent payment – BUT the amount that goes
                                  towards repaying the principal (vs the
                                  interest) part of your mortgage floats in
                                  relationship to the bank’s prime interest
                                  rate. If rates go up, the amount you pay
                                  towards the principal goes down, and the
                                  amount of interest you pay goes up.
                                </li>
                              </ul>

                              <h4>Types of Mortgages</h4>
                              <p>
                                The interest rate is one of the biggest
                                contributing factors to how much you end up
                                paying for your home, both on a monthly basis
                                and over the life of your mortgage. Interest is
                                the cost of borrowing money. Interest rates
                                fluctuate with the economy. The interest rate
                                you commit yourself to at the beginning of the
                                term can have a significant effect on the amount
                                you pay each month for your mortgage. There are
                                two basic types of interest rates used in
                                mortgage products: fixed-rate and variable-rate:
                              </p>
                            </div>
                            <div className="stepsCounetr">
                              <div className="small">Step 3</div>
                              <div className="heading">Choose a Lender</div>
                              <b>
                                There are many types of lenders and mortgages
                                out there. It’s a good idea to talk to at least
                                three lenders:
                              </b>
                              <p>
                                Your own bank. They have your bank accounts,
                                credit cards and investments so they should be
                                motivated to give you a good rate.
                              </p>
                              <p>
                                A mortgage broker. Mortgage brokers work with a
                                lot of different lenders and will go to them on
                                your behalf to find the best mortgage rate and
                                terms. Usually, broker fees are paid by the
                                banks, so it’s a good way to comparative shop
                                without having to do all the leg work yourself.
                              </p>
                              <p>
                                RBC (and ideally, our main man Henry Vincent).
                                RBC doesn’t work with mortgage brokers, and
                                we’ve found them to be extremely competitive
                                with rates and mortgage terms. We have yet to
                                find someone who delivers better service than
                                Henry, and he’s always available (unlike the
                                mortgage person who works out of a branch from
                                9-5). If you call Henry, tell him BREL sent you
                                for the very best experience. It’s important to
                                note that not all of these decisions have to be
                                made before you start looking for a home; the
                                crucial step is getting a pre-approval from a
                                lender—then you’re ready to start the search!
                                Details regarding the term, rate and even which
                                lender you use can be decided—and changed—after
                                the actual purchase, all the way up until
                                reasonably close to your closing date (the date
                                you take possession of your new place). However,
                                the more you understand about your options, the
                                better prepared you will be when that magical
                                day comes.
                              </p>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                          >
                            <h2>Househunting</h2>
                            <p>
                              Let the fun begin! Whether you’re searching
                              online, hitting open houses or searching with a
                              REALTOR, hunting for your dream house or condo is
                              both a science and an art. Here’s what’s involved:
                            </p>

                            <div className="stepsCounetr">
                              <div className="small">Step 1</div>
                              <div className="heading">
                                Develop your Wish List
                              </div>

                              <p>
                                Knowing what you need and want in your home is
                                critical. What are your must-haves, your
                                nice-to-haves, and your no-way-absolutely-nots?
                                How many bedrooms do you need? What kind of
                                outdoor space do you want? What about
                                counter-tops, appliances and floors? You can’t
                                get what you want if you don’t know what you
                                want. Of course, location will be a big decision
                                – what Toronto neighbourhood makes you feel at
                                home? We’ve written a guide to 88 Questions To
                                Ask When Choosing a Neighbourhood. Check out our
                                in-depth Toronto Neighbourhood Guides for the
                                insider scoop on Toronto’s hottest
                                neighbourhoods.
                                <br />
                                Of course in a hot market like Toronto’s,
                                compromise is a big part of the process. Almost
                                everyone needs to compromise on something, and
                                it usually comes down to 4 things: size,
                                finishes, location and price. What’s most
                                important to you? Would you rather live in a
                                bigger house or closer to downtown? Are you OK
                                spending more money for a renovated house or
                                could you buy a cheaper house and do the
                                renovations yourself? Would you consider living
                                on a busy street to more affordably be in a
                                better neighbourhood with access to better
                                schools?
                              </p>
                            </div>
                            <div className="stepsCounetr">
                              <div className="small">Step 2</div>
                              <div className="heading">Pick Your Team</div>

                              <p>
                                Buying a house or condo will likely be the
                                biggest purchase you’ll ever make – but don’t
                                worry, you don’t need to do it alone. You’ll
                                want to start by picking a Great Toronto Real
                                Estate Agent who works exclusively for YOU.
                                You’ll also need a lender to take you through
                                your financing options, and a lawyer to help
                                with the legal aspects of the purchase. There
                                are thousands of professionals out there (of
                                varying quality), so ask your friends and family
                                for recommendations, do your research and don’t
                                be afraid to interview multiple people.
                              </p>
                            </div>

                            <div className="stepsCounetr">
                              <div className="small">Step 3</div>
                              <div className="heading">
                                Searching for Houses and Condos Online
                              </div>

                              <p>
                                You aren’t alone: 94% of Canadians search for
                                their home online. While there are endless real
                                estate websites out there, here are the ones you
                                should consider:
                                <br />
                                Realtor.ca is the website owned by the real
                                estate association. It pulls available
                                properties for sale directly from the system
                                that agents use, the MLS (multiple listing
                                services). realtor.ca is usually a day or two
                                behind what’s happening in the market, but a
                                great tool to explore what’s for sale and start
                                to get a feel for what’s available.
                                <br />
                                Custom Listings from a REALTOR Another way to
                                get quick and easy access to what’s available is
                                to have a real estate agent e-mail you daily
                                listings of available houses and condos that
                                match what you’re looking for. Better yet, ask
                                them to set you up on Collab to have control
                                over your searches and get instant notification
                                of new listings that match what you’re looking
                                for.
                                <br />
                                The BREL home search tool – Of course we’re
                                biased, but our home search tool pulls house and
                                condo listings directly from the MLS every 2
                                hours and includes a lot more information than
                                what you’ll find on realtor.ca. You can set up a
                                custom home search for yourself that will
                                automatically e-mail you listings that match
                                whatever criteria you set, so you never miss a
                                listing. Click here to check it out or set up a
                                property search for yourself.
                              </p>

                              <b>Tips for looking for a home online:</b>
                              <ul>
                                <li>
                                  Keep an open mind. Photos aren’t always
                                  representative of what the house looks like in
                                  real life.
                                </li>
                                <li>
                                  Don’t always believe the description and read
                                  between the lines. ‘Ready to put your
                                  decorator touch on it’ means it needs a lot of
                                  work. And ‘Leslieville dream home for under
                                  $600K’ probably isn’t really in Leslieville.
                                </li>
                                <li>
                                  Remember that the asking price is very
                                  different than the sale price. In a hot market
                                  like Toronto’s, houses often sell for far more
                                  than the listing price.
                                </li>
                                <li>
                                  If you’re shopping for a condo, keep in mind
                                  that what’s included in the maintenance fees
                                  varies from building to building, so it isn’t
                                  easy to compare condos. A lower maintenance
                                  fee might still mean more monthly costs if it
                                  doesn’t include heat and electricity.
                                </li>
                                <li>
                                  Take some time to learn how to read an MLS
                                  listing – all those acronyms are guaranteed to
                                  confuse you.
                                </li>
                              </ul>
                            </div>
                            <div className="stepsCounetr">
                              <div className="small">Step 4</div>
                              <div className="heading">
                                House Hunting in Real Life
                              </div>

                              <p>
                                This is your opportunity to get a feel for the
                                different Toronto neighbourhoods, refine your
                                wish list, and ask questions. While a wish list
                                seems kind of scientific and is a useful tool in
                                deciding which properties to visit, the truth of
                                the matter is that most people walk into their
                                perfect home and just feel it. Of course, it
                                helps when it satisfies your needs and wants
                                too, but don’t underestimate the power of ‘just
                                knowing’.
                                <br />
                                You can visit homes for sale in real life with
                                your real estate agent or by attending an open
                                house. Keep in mind that not all properties will
                                have open houses, so working with a real estate
                                agent you trust the only way to guarantee that
                                you’ll be able to see the houses or condos you
                                want to see (and on your schedule!).
                              </p>
                              <p>
                                <b>Tips for looking at homes in real life:</b>
                              </p>
                              <ul>
                                <li>
                                  Make a plan. Toronto is a big city, and if
                                  you’re like most people, you have a few target
                                  neighbourhoods. Try to focus on one
                                  neighbourhood at a time and don’t forget about
                                  traffic and the time it’ll take you to
                                  parallel park.
                                </li>
                                <li>
                                  Carpool. If you’re looking at houses or condos
                                  with a real estate agent, let them do the
                                  driving. Your attention is better focused on
                                  the actual neighbourhoods rather than when to
                                  turn left. If you’re checking out open houses,
                                  try walking or biking to them – Torontonians
                                  love open houses, and street parking can be a
                                  drag.
                                </li>
                                <li>
                                  Wear slip-on/slip-off shoes. Seriously. You’ll
                                  be taking your shoes off dozens of times, so
                                  save yourself the hassle of lace-up shoes.
                                  Wearing socks will also save you in the
                                  ‘do-frat-boys-live-here?’ houses.
                                </li>
                                <li>
                                  Don’t just focus on the house or condo, focus
                                  on the neighbourhood. Drive around the
                                  neighbourhood. Locate the schools, parks and
                                  grocery stores. Take a walk down the street
                                  and check out the neighbours. Make a point of
                                  going to a cafe, restaurant or pub in the
                                  area.
                                </li>
                                <li>
                                  Vary the time of day that you house hunt.
                                  Everything looks better when the sun is
                                  shining, but it’s important to get a feel for
                                  the house or condo and the neighbourhood
                                  during the day AND at night.
                                </li>
                                <li>
                                  Experience the bad with the good. Every
                                  neighbourhood has its drawbacks, so make a
                                  plan to experience them. Thinking of buying a
                                  house near the railroad tracks? Check it out
                                  during rush hour when most of the trains are
                                  running. Thinking of buying on Queens Quay?
                                  Make sure to check it out when there are
                                  throngs of tourists and roller-bladers jamming
                                  the streets.
                                </li>
                                <li>
                                  Take notes and photos. It’s surprising how
                                  quickly you can forget the first house or
                                  condo you saw. In fact, we’ve taken to giving
                                  our clients an iPad that they can use to take
                                  notes and photos of every property. And no,
                                  you’re probably not allowed to take photos of
                                  other people’s houses, but it happens all the
                                  time. Just don’t go posting them online.
                                </li>
                                <li>
                                  See past the gross. You’ll probably be
                                  surprised to find out how some people live,
                                  but don’t let someone’s bad decorating styles,
                                  outdated tastes and lack of housekeeping get
                                  in the way of finding your perfect Toronto
                                  house or condo.
                                </li>
                                <li>
                                  Don’t fall in love with the seller’s stuff.
                                  This happens all the time and that beautifully
                                  staged condo won’t look nearly as great with
                                  all your IKEA stuff in it. Try to imagine your
                                  furniture and style.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="Offers"
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                          >
                            <h2>Offers</h2>
                            <div className="stepsCounetr">
                              <div className="heading">Making an Offer</div>

                              <p>
                                Your house hunting efforts have paid off, and
                                you’ve found the right home for you: it
                                satisfies your wants/needs, it’s in your price
                                range, and it feels right. The offer process is
                                both exciting and nerve-wracking. We begin by
                                drafting the Agreement of Purchase and Sale.
                                This is a legally binding document which
                                contains everything from the price you are
                                prepared to pay, to the inclusions you want
                                (washer/dryer, big screen TV), to your ideal
                                closing date (the date you take possession), to
                                conditions that need to be met for the deal to
                                go through. Once you’ve submitted your offer,
                                the seller can accept it, reject it or sign back
                                a counter offer. During these back-and-forth
                                negotiations, you may need to compromise on
                                small things, but a good real estate agent will
                                work hard to get you what you want. And if
                                you’re in a bidding war, make sure you know the
                                facts about Bidding Wars and How to Win in
                                Multiple Offers.
                              </p>

                              <h4>Meet Conditions and Provide Deposit</h4>

                              <p>
                                Conditions are requirements within the Agreement
                                of Purchase and Sale that must be met for the
                                deal to go through. In your offer, you may have
                                included a financing condition or a condition
                                that allows your lawyer to review the legal
                                details of the property, or a home inspection.
                                And of course, you’ll need to submit a
                                deposit–in Toronto, typically around 5% of the
                                purchase price, which is held in trust until
                                close. Once the conditions have been met, the
                                agreement is firm, and now it’s just a matter of
                                waiting for your closing date. And of course,
                                packing!
                              </p>

                              <h4>
                                How the BREL team can help you with financing:
                              </h4>
                              <ul>
                                <li>
                                  We keep it real. We’ll look at financial
                                  considerations to match what you want with
                                  what you can afford. Then we’ll develop
                                  strategies to help you afford what you want.
                                </li>
                                <li>
                                  No surprises. We’ll take you through the real
                                  costs of owning a home – and help you navigate
                                  the mortgage and financing waters.
                                </li>
                                <li>
                                  Our partners are the best. We’ll put you in
                                  touch with the very best lenders and mortgage
                                  brokers in Toronto.
                                </li>
                              </ul>

                              <h4>
                                Want to read more about getting a mortgage for a
                                house or condo?
                              </h4>
                              <p>Check out these blog posts for Buyers:</p>
                              <ul>
                                <li>
                                  Downpayment Strategies for the First Time
                                  Buyer
                                </li>
                                <li>Online Mortgage Calculators</li>
                                <li>Land Transfer Tax</li>
                                <li>
                                  Government Incentive Programs for First Time
                                  Buyers
                                </li>
                                <li>Financing for the Self-Employed</li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="Closing"
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                          >
                            <h2>Closing</h2>
                            <p>
                              Once you have a firm deal (both you and the Seller
                              have agreed on price and agreement terms, you’ve
                              submitted a deposit, and there are no more
                              conditions to waive), the closing process starts.
                              This will require you to be in close contact with
                              your lender and your lawyer – they’ll need lots of
                              information, and of course, money, from you.
                            </p>
                            <p>
                              The few days before you take possession are the
                              most critical – you’ll need to sign a lot of
                              paperwork, provide a certified cheque for the
                              balance owing and of course, pick up your keys.
                            </p>
                            <p>
                              Closing is the point at which the ownership and
                              possession of the property are transferred from
                              the Seller to you. It takes place after all legal
                              and financial obligations have been met. Closing
                              the purchase will be a team effort: in addition to
                              yourself, your lawyer and your lender will all be
                              involved in helping close the deal.
                            </p>

                            <h4>Costs of Buying a Home</h4>
                            <p>
                              As you go through the process of buying a home,
                              you’ll naturally want to know how much money this
                              will cost you. Your lawyer, accountant and real
                              estate agent can help you estimate your costs.
                              Some of the things you can expect to pay are:
                            </p>
                            <ul>
                              <li>
                                Down payment (less any money you have already
                                provided as a deposit)
                              </li>
                              <li>Land transfer taxes*</li>
                              <li>
                                Lender fees, if applicable (appraisal fees,
                                application fees, etc.)
                              </li>
                              <li>
                                Adjustments (the seller may have pre-paid taxes,
                                utilities or other expenses past the closing
                                date which you will need to reimburse during the
                                closing process)
                              </li>
                              <li>Legal fees (plus applicable taxes)</li>
                            </ul>
                            <p>
                              * If you buy a property in the city of Toronto,
                              you will need to pay a municipal land transfer tax
                              in addition to the land transfer tax in Ontario.
                              <br />
                              For a detailed list of all the closing costs
                              involved in buying a house or condo in Toronto,
                              check out our blog about Closing Costs.
                              <br />
                              Your lawyer will calculate the final amount owing,
                              and you will need to provide him/her with a
                              certified cheque for the full amount before the
                              property comes into your possession. (Click here
                              for a description of the role of your real estate
                              lawyer)
                              <br />
                              If you’re a first time home buyer, you’ll qualify
                              for some great government programs that can save
                              you thousands of dollars in closing costs. Click
                              here for details of first time home buyer
                              incentive programs.
                            </p>
                            <h4>Want to read more about closing?</h4>
                            <p>Check out these blog posts for Buyers:</p>
                            <ul>
                              <li>Next Steps Once Your Offer is Accepted</li>
                              <li>Closing Costs</li>
                              <li>
                                Home Insurance Scoop for First Time Buyers
                              </li>
                              <li>How to Move without Getting a Divorce</li>
                              <li>What to do with all your Stuff</li>
                            </ul>
                          </div>
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

export default sixModel;
