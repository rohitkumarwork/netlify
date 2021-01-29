import { useState } from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "./contactForm/contactForm";
import piggyBank from "../../../static/images/piggy_bank.png";

const SeventhModel = () => {
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
        title="Buyers: Be Prepared for Closing Costs"
        onClick={handleShow}
      >
        Closing Costs
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
                        <div className="title">Buyers: Be Prepared for Closing Costs</div>
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
                        If you’re planning to buy a house or condo in Toronto, don’t forget to be prepared for the dreaded Closing Costs. Never fear, knowledge is power! Know what you might have to pay for, so you can work it into your budget ahead of time.
                        </p>
                        <p>Here is a list of the most common and important closing costs when buying a home:</p>

                        <div className="stepsCounetr">
                          <div className="small">Step 1</div>
                          <div className="heading">
                          Closing Costs: Before Closing
                          </div>
                         
                          <ul>
                            <li><b>Deposit</b> (usually 5% of the purchase price, paid within 24 hours of your offer being accepted)</li>
                            <li><b>Property Appraisal</b> ($400- $500, often paid by the lender)</li>
                            <li><b>Home Inspection </b>($400-700, paid to the home inspection company at the time of the inspection)</li>
                          </ul>
                        </div>

                        <div className="stepsCounetr">
                          <div className="small">Step 2</div>
                          <div className="heading">
                          Closing Costs: On Closing
                          </div>
                         
                         <ul>
                             <li><b>Balance of Purchase Price</b> (the purchase price less your initial deposit. Usually the bulk will come from your lender and become your mortgage)</li>
                             <li><b>Legal Fees</b> (amount varies depending on purchase price – approx $1,800 for a $500,000 purchase)</li>
                             <li><b>Title Insurance </b>(sometimes included in your legal fees, $250-$400)</li>
                             <li><b>Mortgage Broker Commission</b> (if applicable, usually paid by the lender)</li>
                             <li><b>Property Survey</b> (if required – $1,000-$2,000)</li>
                             <li><b>Ontario Land </b>Transfer Tax (varies depending on the purchase price</li>
                             <li><b>Toronto Land Transfer Tax </b>(varies depending on the purchase price</li>
                             <li><b>Property Tax Adjustment </b>(reimbursement to Seller of property taxes they paid beyond the closing date)</li>
                             <li><b>HST </b>(generally only applicable on new construction condos and houses)</li>
                             <li><b>Tarion Warranty Fees</b> (warranty on new construction condos and houses only, not resale)</li>
                             <li><b>Provincial Sales Tax </b>(only applicable on chattels purchased from vendor – amount varies)</li>
                             <li><b>Adjustments</b> for Utilities/Condo Fees/etc (reimbursement to Seller for prepaid utilities, etc.)</li>
                             <li><b>CMHC Insurance Premium</b> (insurance premium charged if you have less then 20% down payment</li>
                         </ul>
                        </div>

                        <div className="stepsCounetr">
                          <div className="small">Step 3</div>
                          <div className="heading">
                          Closing Costs: After Closing
                          </div>
                          <ul>
                            <li>
                                <b>Moving Expenses</b> ($1,000+)
                            </li>
                            <li>
                                <b>Utility Connection Charges </b>(varies)
                            </li>
                            <li>
                            <b> Redecorating and Renovating </b>Costs (varies)
                            </li>
                            <li>
                                <b>Immediate Repair and Maintenance Costs </b>(varies)
                            </li>
                          </ul>
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

export default SeventhModel;
