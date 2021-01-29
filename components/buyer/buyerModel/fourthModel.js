import { useState } from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "./contactForm/contactForm";
import piggyBank from "../../../static/images/piggy_bank.png";

const fifthModel = () => {
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
        title="Buying Your NEXT House"
        onClick={handleShow}
      >
        Next House
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
                <div className="headerContent darkpink">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                      <div className="headContent">
                        <div className="title">
                          Buying Your NEXT House – A Guide For Move-Up Buyers
                        </div>
                        <div className="subtitleContent">
                          Are you a move-up Buyer? Looking to upgrade your
                          current condo or house to a bigger house or better
                          neighbourhood? If that sounds like you, read on for
                          our 10 top things to consider:
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
                        <div className="stepsCounetr">
                          <div className="heading">
                            1. Should you buy or sell first?
                          </div>
                          <p>
                            The answer to this question is mostly dependent on
                            what kind of property you currently live in and
                            where it is. If you live in a hot ‘hood, downtown
                            house or unique loft or condo, you’ll likely be able
                            to sell quickly. If you’re in a less-in-demand area
                            or building, selling may take 60 or 90 days, and you
                            probably want to sell before buying. The second big
                            factor to consider is your financial resources – can
                            you afford to carry both mortgages if your current
                            home doesn’t sell? What if Buyers don’t think your
                            existing home is worth what you think it is? Your
                            lender and REALTOR can help you decide whether you
                            should buy or sell first.
                          </p>
                        </div>

                        <div className="stepsCounetr">
                          <div className="heading">
                            2. How big of a move-up should you make?
                          </div>
                          <p>
                            Selling and buying are expensive – there are land
                            transfer taxes, legal fees, real estate commissions,
                            moving costs, utility set-up costs and more to
                            consider. If you’re going to make a move, make it
                            count. If you need more space but don’t have that
                            much more budget, consider a neighbourhood change.
                            Lateral moves are expensive.
                          </p>
                        </div>
                        <div className="stepsCounetr">
                          <div className="heading">
                            3. How has your life changed, and how will it
                            change?
                          </div>
                          <p>
                            Do you plan on being in your new home 3, 5, 10 or 20
                            years? Depending on your age and family situation,
                            you’ll likely need to think about things you didn’t
                            have to consider the last time you bought a home. Do
                            you need to be near daycare or schools (elementary
                            and secondary)? Should you consider getting a house
                            with a second apartment for a nanny or housing aging
                            parents? Are you a dog-owner now and need to be near
                            leash-free parks?
                          </p>
                        </div>
                        <div className="stepsCounetr">
                          <div className="heading">
                            4. What do you love about your current
                            neighbourhood? How do you wish it was different?
                          </div>
                          <p>
                            There are always compromises to make, even when
                            upgrading to a more expensive home. Do you love
                            being able to walk to coffee shops and restaurants?
                            Or do you long for green space and want to be closer
                            to parks and trails?
                          </p>
                        </div>
                        <div className="stepsCounetr">
                          <div className="heading">
                            5. What do you love most (and hate) about your
                            current home?
                          </div>
                          <p>
                            You know what they say about the devil you know vs
                            the devil you don’t. Do you love your current
                            kitchen storage? Dream of closets? Do you hate
                            shovelling your current driveway and want to live
                            close to work so you can live car-free? Has your
                            ensuite bathroom saved your marriage?
                          </p>
                        </div>
                        <div className="stepsCounetr">
                          <div className="heading">
                            6. How much house do you need?
                          </div>
                          <p>
                            One of the top reasons people want to move is to
                            have more space….but how much space do you really
                            need and where do you need it? If your family is
                            growing, you probably need more bedrooms, possibly
                            another bathroom, and some playroom. Alternatively,
                            you might be looking for more or different space – a
                            home office to house your business, a bigger
                            entertaining area, etc.
                          </p>
                        </div>
                        <div className="stepsCounetr">
                          <div className="heading">
                            7. What kind of homeowner have you been?
                          </div>
                          <p>
                            It’s time to be honest with yourself: have you
                            maintained your current home or have you closed your
                            eyes in the hopes that the water in the
                            basement/leaky tap/squirrels in the attic would go
                            away? It’s OK if you don’t like being a homeowner –
                            buying a condo, new (or newly renovated) house or
                            townhouse might be a better option for you. If you
                            hate gardening, why buy another home with a big
                            yard?
                          </p>
                        </div>
                        <div className="stepsCounetr">
                          <div className="heading">8. Money, money, money.</div>
                          <p>
                            Mortgages are cheap these days – you can borrow an
                            extra $100,000 for under $500/month. How much more
                            can you comfortably afford to spend without giving
                            up your life? Your primary residence is one of the
                            smartest investments you can make because your
                            equity grows tax-free. But don’t forget that the new
                            more expensive house will come with higher tax and
                            utility bills too.
                          </p>
                        </div>
                        <div className="stepsCounetr">
                          <div className="heading">
                            9. What do you need to do now to be ready to sell
                            your current home?
                          </div>
                          <p>
                            We’ve had more than a few move-up Buyers fall in
                            love with their new home out of the blue. If you
                            start to prepare your current home now, you’ll be
                            able to jump on those opportunities.
                          </p>
                        </div>
                        <div className="stepsCounetr">
                          <div className="heading">
                            10. Should you suck it up and wait?
                          </div>
                          <p>
                            Sometimes, the right decision is to wait. If you’ll
                            be draining the equity in your current home or
                            straining yourself financially to afford a new
                            house, you might want to wait. One of our favourite
                            strategies (and one we have used ourselves) is to
                            estimate how much extra your new mortgage will be
                            and to start saving that extra money now so that
                            you’ll be used to the higher payments when you make
                            a move. Bonus manoeuvre: put that extra cash on your
                            current mortgage and build more equity.
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

export default fifthModel;
