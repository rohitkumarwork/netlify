import { useState } from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "./contactForm/contactForm";
import piggyBank from "../../../static/images/piggy_bank.png";

const thirdModel = () => {
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
        title="Downsizing Your Home"
        onClick={handleShow}
      >
        Downsizing Home
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
                <div className="headerContent green">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                      <div className="headContent">
                        <div className="title">
                          Downsizing Your Home: A Guide for GTA Homeowners
                        </div>
                        <div className="subtitleContent">
                          So many of our clients are downsizing – whether that’s
                          moving from a 2,200 sqft suburban house to a 900 sqft
                          downtown condo or simply moving from a bigger house to
                          a smaller house. Here’s our take on what you should
                          consider if you’re thinking about downsizing your
                          home.
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
                        <p>
                          If you’re considering downsizing your home, keep the
                          following in mind:
                        </p>

                        <div className="stepsCounetr">
                          <div className="heading">
                            Should You Downsize Your Home?
                          </div>
                          <ul>
                            <li>
                              <b>How much space do you need?</b> If your spare
                              room only gets used three times a year, it’s
                              probably cheaper to put your guests up at a hotel
                              then pay the mortgage on a room that rarely gets
                              used. Of course, a smaller space will come with
                              less room for your stuff (see below), but if
                              you’ve tied up $300K of home equity to pay to
                              store your things, well that might not be the best
                              use of your money.
                            </li>
                            <li>
                              <b>What else could you spend the money on?</b>{" "}
                              It’s no secret that most Canadians are relying on
                              their home to fund part of their retirement. If
                              you sold your $1,500,000 house and moved to an
                              $800K condo, what opportunities and doors would
                              that open for you? Travel? Earlier retirement?
                            </li>
                            <li>
                              <b>A word about maintenance:</b> Many homeowners
                              are wary of paying condo fees, but the truth is
                              that it’s usually cheaper to pay condo fees than
                              to maintain a house in Toronto. From dealing with
                              regular maintenance items like cleaning gutters
                              and maintaining the furnace, to big dollar unsexy
                              money spent fixing a leaking roof or basement, the
                              costs can add up fast. Condo fees are also
                              predictable (which is nice in retirement). And how
                              nice would it be to simply make these problems
                              someone else’s?
                            </li>
                            <li>
                              <b>Be honest:</b> How often will your kids really
                              visit? A lot of people considering downsizing are
                              doing so because they’re suddenly empty nesters.
                              The kids are (finally) on their own and downsizing
                              to a smaller place is a guaranteed way to make
                              sure they don’t move back in. While I’m not
                              suggesting you need to downsize to a one-bedroom
                              condo, most condos will have party rooms that can
                              host your 20-person Thanksgiving Day dinner and
                              many have guest suites for overnight guests.
                            </li>
                            <li>
                              <b>Neighbourhood Change</b> One of the most
                              exciting (and scary) parts about downsizing is
                              getting the opportunity to live in a new
                              neighbourhood. If you’re currently in the suburbs,
                              imagine being able to walk to cafes, theatres, and
                              parks? Don’t forget to imagine the TTC and traffic
                              too – there’s good and bad in every neighbourhood.
                            </li>
                            <li>
                              <b>Lifestyle.</b> The biggest adjustment to a
                              downsize is your lifestyle – you’ll likely be
                              giving up backyard BBQ’s and hosting big family
                              reunions, but you’ll also gain time and cold hard
                              cash. What kind of life do you want to live? Are
                              you ready for condo living?
                            </li>
                          </ul>
                        </div>

                        <div className="stepsCounetr">
                          <div className="heading">
                            Downsizing Your Home: Some Advice
                          </div>
                          <ul>
                            <li>
                              <b>Stairs! </b>If you’re downsizing your home for
                              the long-term, avoid townhouses with lots of
                              stairs. Your knees will thank you.
                            </li>
                            <li>
                              <b>When in doubt,</b> throw it out. One of the
                              easiest ways to be comfortable in your smaller
                              space is by getting rid of all of that stuff
                              you’ve been living with and not using: old
                              magazines, paperwork from 20 years ago, old
                              laptops, broken furniture, books you never look at
                              anymore, etc. You’ll also enjoy your new space
                              more if you pare down the number of knick-knacks,
                              framed photos, and trinkets.
                            </li>
                            <li>
                              <b>Donate, donate, donate.</b> If you aren’t using
                              something, the chances are that someone else will
                              both appreciate and use it. Consider donating
                              kitchen appliances and gadgets, clothes you’ll
                              never fit back into, sports equipment from before
                              you had problems with your knees, etc. Make sure
                              to check out our What To Do with Your Stuff blog
                              for information on where to donate.
                            </li>
                            <li>
                              <b>Use the good china every day.</b> Your new
                              smaller home likely won’t have room for two sets
                              of dishes and glasses. And really who are we
                              kidding…don’t you deserve to use the good dishes?
                            </li>
                            <li>
                              <b>Re-think collections.</b> Nothing creepier than
                              going into a 700 sqft condo filled with dolls.
                              Consider selling your collections on eBay (but
                              make sure to take a photo before you part ways).
                            </li>
                            <li>
                              <b>Memories are just that</b> – memories. While
                              it’s nice to have family heirlooms and keep items
                              that are personally significant to you, you
                              probably don’t need every greeting card or concert
                              ticket stub. Make a point of moving just the
                              important stuff with you (they’ll be more
                              important to you that way too).
                            </li>
                            <li>
                              <b>Don’t be afraid</b> to ask for help –
                              Downsizing your home can seem like an impossible
                              task, but there are some great services out there
                              to help – check out Clutterfly Inc.
                            </li>
                            <li>
                              <b>Paperwork</b> – You may need to access up to 7
                              years of tax history, so make sure important legal
                              and tax documents can be easily retrieved. That
                              doesn’t need to mean they take up prized space in
                              your new home though – that’s what storage lockers
                              are for!
                            </li>
                            <li>
                              <b>Storage</b> – A well-organized storage locker
                              can be a godsend when downsizing your home– but
                              don’t spend hundreds of dollars a month to store
                              things you’ll never need again. If you do rent
                              storage, make sure it’s climate-controlled,
                              water-proofed and that your belongings are safe.
                            </li>
                            <li>
                              <b>Neighbourhood</b> – Your choice of a new
                              neighbourhood is one of the biggest decisions
                              you’ll make. Check out our Neighbourhood Guides
                              and our 88 Things to Consider When Choosing a
                              Neighbourhood.
                            </li>
                          </ul>
                        </div>

                        <h4>
                          Deciding to downsize is a big decision. We’ve helped
                          people through this transition many times and would be
                          happy to talk to you about your options. You can email
                          us here or call us at 416-274-2068.
                        </h4>
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

export default thirdModel;
