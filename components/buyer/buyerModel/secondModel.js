import { useState } from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "./contactForm/contactForm";
import piggyBank from "../../../static/images/piggy_bank.png";

const secondModel = () => {
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
        title="Investor Guide"
        onClick={handleShow}
      >
         Investor Guide
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
                        <div className="title">The Complete Toronto Real Estate Investments Guide</div>
                        <div className="subtitleContent">
                        Looking to make money in Toronto’s real estate market? You aren’t alone. Historically, investors have richly profited from buying, renting, flipping and selling properties in Toronto.
                        This guide will outline the various options to make money in Toronto’s real estate market.
                        </div>
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
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                       
                        <p>Toronto real estate investments come in all shapes and sizes and there’s a lot to consider.</p>
                            <div className="stepsCounetr">
                              <div className="small">Step 1</div>
                              <div className="heading">
                                The Basics of Real Estate Investments
                              </div>
                              <h4>Financing</h4>
                              <p>
                                Getting a mortgage for an investment property isn’t as easy as borrowing for your primary residence – you’ll need at least 20% of the purchase price for a down payment, and only a portion of the income you get from rent will be considered in qualifying you for a mortgage (usually 80%). For commercial property investments, you’ll likely need a down payment of 50%.
                              </p>
                              <br />
                              <h4>Taxation</h4>
                              <p>In Canada, any money collected from rent is considered income, and thus subject to income tax. Increases in the value of your investment property (from the time it becomes an investment property to the time you sell it) will be subject to capital gains taxes. If you’re thinking of buying an investment property, make sure to talk to your accountant to fully understand the tax implications.</p>
                              <br />
                              <h4>Timing</h4>
                              <p>
                                Most real estate investments should have longer-term objectives. Because of the unpredictability of the real estate market, expecting to profit in a short period of time is risky.
                              </p>
                              <br />
                              <h4>Goals</h4>
                              <br />
                              <p><b>What are your investment goals? There are three ways to make (or lose) money by investing in Toronto real estate:</b></p>
                              <ul>
                                <li><b>1. Cash flow (cash return)</b> - Cash flow is the difference between what you collect in rent and the expenses you pay out. In Toronto, cash flow positive properties (purchased with 20% downpayment) are hard to come by, though it’s fairly common for investors to break-even on a monthly basis (meaning that the rent they collect is equal to the expenses they pay). Cash flow is affected by factors outside of the real estate market, for example, it depends on your downpayment and mortgage terms.</li>
                                <li><b>2. Appreciation </b> - When you sell your investment property for more than you paid, that’s called appreciation. For example, you buy a triplex for $1,300,000 and later sell it for $1,600,000, that $300,000 difference is the appreciation in the value of your investment. Toronto properties have historically appreciated favourably for investors</li>
                                <li><b>3. Equity (mortgage paydown)</b> - When a tenant pays down your mortgage, you’re building equity. For example, you buy a property for $600,000 with a $120,000 downpayment and you apply the rent to the mortgage and rent it for 25 years. Eventually, you will have a mortgage-free property. When you then sell that property for $800,000, you’ll have built up $680,000 in equity (and you’ll get your original investment of $120,000 back).</li>
                              </ul>
                            </div>

                        

                            <div className="stepsCounetr">
                              <div className="small">Step 2</div>
                              <div className="heading">Return on Investment (ROI)</div>
                              <p>
                                Real estate investors use different calculations and tools to calculate the returns on their property investments:
                              </p>

                              <p><b>Cash flow</b> is the net amount of cash moving in and out of an investment</p>
                              <p>Calculation: Income – operating expenses – financing costs</p>
                              <p><b>Capitalization Rate (cap rate)</b>is the rate of return on a real estate investment property based on the income that the property is expected to generate.</p>
                              <p>Calculation: Operating Income / Purchase Price</p>
                              <p><b>Return on Investment (ROI)</b> – a performance measure used to evaluate the efficiency of an investment or to compare the efficiency of a number of different investments</p>
                              <p>Calculated by adding the cash return + mortgage pay down + capital appreciation.</p>
                              <p>There are many tools out there to help you predict the ROI of investment properties (and of course, the BREL team has a proprietary Income Analysis tool for our clients).</p>
                            </div>

                            <div className="stepsCounetr">
                              <div className="small">Step 3</div>
                              <div className="heading">Real Estate Investments Option 1: Investment Condos</div>
                              
                              <p>
                              <b>Ever wonder who’s buying all the condos you see changing Toronto’s landscape? Investors. In fact,  a study found that 40% of Toronto condos are owned by investors. Here’s why:</b>
                              </p>
                              <h4>The Pros</h4>      
                              <ul>
                                <li>A good investment condo will break even (or be cash positive) with a 20% down payment (which you require for a mortgage anyway).</li>
                                <li>Opportunity for both cash flow and appreciation in value over time</li>
                                <li>The rental market is at an all-time low for vacancies, so finding a good tenant should be easy</li>
                                <li>The rental market is at an all-time low for vacancies, so finding a good tenant should be easy</li>
                                <li>Unique condos in good locations have historically appreciated more than the stock market</li>
                              </ul>

                              <h4>The Cons</h4>
                              <ul>
                                <li>Lots of obligations and little flexibility due to the Residential Tenancies Act. Make sure to read our Complete Guide for Landlords for more information.</li>
                                <li>Works best as a long-term strategy</li>
                              </ul>

                            </div>

                            <div className="stepsCounetr">
                              <div className="small">Step 4</div>
                              <div className="heading">Investment Option 2: Income Properties</div>
                              <p><b>Income properties–houses that have self-contained apartments that are rented out–are HOT, HOT commodities in Toronto.</b></p>
                              <h4>The Pros</h4>
                              <ul></ul>

                              <p>
                              <b>Ever wonder who’s buying all the condos you see changing Toronto’s landscape? Investors. In fact,  a study found that 40% of Toronto condos are owned by investors. Here’s why:</b>
                              </p>
                              <h4>The Pros</h4>
                              <ul>
                                <li>Having a basement apartment that you can rent out just might make the difference between affording the home of your dreams and not. At current interest rates, $1,000 in rent can cover over $200,000 in mortgage!</li>
                                <li>Historically, houses have appreciated faster than condos, so if you’re looking to make money when you sell, then an income property may be a safer bet.</li>
                                <li>With a 20% down payment on a multi-residential house, you should be able to break even (or ideally be cash positive)</li>
                              </ul>

                              <h4>The Cons</h4>
                              <ul>
                                <li>If you’re living in the other upstairs (or downstairs) apartment yourself, you’ll need to cope with the noises and smells of your tenant</li>
                                <li>Landlord headaches: repairs, renovations, tenants that don’t pay their rent – make sure to check out our Complete Guide for Landlords</li>
                                <li>Having tenants in leases may make it harder to sell your home when the time comes</li>
                                <li>Complexities with the legalities of apartments</li>
                              </ul>
                            </div>
                            <div className="stepsCounetr">
                            <div className="small">Step 5</div>
                              <div className="heading">Real Estate Investments Option 3: Flipping</div>
                              <p><b>While it isn’t as popular as it was a few years ago, flipping houses (in other words, buying a rundown house and renovating it for profit in under a year) happens every day in Toronto. It isn’t for the faint of heart – but it can be hugely profitable.</b></p>

                              <h4>The Pros</h4>      
                              <ul>
                                <li>A proper quality flip in a good neighbourhood will be in high demand (many of today’s buyers want the fully done-up house)</li>
                                <li>Cash! There are certainly lots of examples of houses bought for $900,000, renovated for $150,000 and sold for $1,300,000+.</li>
                              </ul>

                              <h4>The Cons</h4>
                              <ul>
                                <li>Renovations always take longer and cost more than you expected. With a flip, every dollar spent and every month where you have to pay a mortgage counts.</li>
                                <li>No matter what HGTV tries to tell us, flipping for profit isn’t easy  – it takes a lot of time and can be a risky venture for someone who isn’t a contractor or tradesperson</li>
                                <li>There are just as many examples of houses bought for $900,000, renovated for $150,000 and sold for $1,100,000.</li>
                              </ul>
                              <p>
                              If you’re considering buying a home to flip it, make sure you’re working with a REALTOR, who knows the game and can make sure you buy the right property, put the right amount of money into it for the neighbourhood and sell it at the right time.
                              </p>
                            </div>
                            <div className="stepsCounetr">
                              <div className="small">Step 6</div>
                              <div className="heading">Investment Option 4: Mixed-Use Properties</div>
                              <p>Many investors turn to Toronto’s <b>mixed-use properties for their ROI</b>. Mixed-use properties have both a residential and a commercial component and if purchased in up-and-coming neighbourhoods, can be an excellent real estate investment. Note: the financing and buying process are very different than the standard resale residential market so make sure you hire a REALTOR experienced in selling these types of commercial properties.
                              </p>
                            </div>

                            <div className="stepsCounetr">
                            <div className="small">Step 7</div>
                              <div className="heading">Real Estate Investments Option 5: New Construction</div>
                              <p><b>This used to be the number one real estate investment in  Toronto–  buying condominiums during the pre-construction phase and selling them when they were built (often up to 5 years later).</b></p>

                              <h4>The Pros</h4>      
                              <ul>
                                <li>Prime choice of units and location, as you aren’t at the mercy of what happens to be on the market</li>
                              </ul>

                              <h4>The Cons</h4>
                              <ul>
                                <li>Currently, it’s cheaper to buy a resale condominium</li>
                                <li>Builders may cancel projects, tying up your downpayment for years</li>
                                <li>More projections required  – what will it be worth and what will it rent for when it’s ready for occupancy?</li>
                              </ul>
                            </div>
                            <div className="stepsCounetr">
                              <div className="small">Step 8</div>
                              <div className="heading">Managing Your Investment Property</div>
                              <p>There’s a lot to know about being a landlord – you can read our Guide to Being a Landlord here.</p>
                              <p>If you’d rather outsource the management of your property, there are plenty of options in Toronto. In Toronto, you can expect to pay about 6% of the monthly rent in property management fees for a condo, and 10% for a house.</p>
                            </div>
                            <div>
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

export default secondModel;
