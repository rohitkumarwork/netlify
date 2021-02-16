import React from 'react';
import {Row,Col,Container,Button,Accordion,Card,AccordionToggle,AccordionCollapse,Modal,ModalTitle,ModalBody,ModalFooter} from 'react-bootstrap'
import stackedhome from '../../static/images/stackedhome.png'
import twoStory from '../../static/images/2story.png'
import { useState } from 'react';
import Commission1 from '../../static/images/commission.png'
import Commission2 from '../../static/images/commission-2.png'
import Commission3 from '../../static/images/commission-3.png'
import Commission4 from '../../static/images/commission-4.png'
import Commission5 from '../../static/images/commission-5.png'
const Sellerpanel = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const [activeId, setActiveId] = useState('0');
  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }
    return (
        <>
           <div className="seller_Page_panel">
               <div className="bannerPanel">
                   <div className="left_Side">
                   </div>
                   <div className="right_Side">
                       <div className="banner_Content">
                           <h1><span>Selling </span>Your Townhomes</h1>
                           <p>Townhomes come in many shapes, sizes and styles that can be confusing to 
                            understand which one suits your needs. Let us help you with that as we are the 
                            specialists and believe knowledge is power as a buyer or seller! </p>
                            <div className="offerBtn">
                                <Button variant="link">
                                    <div>WE WILL SELL YOUR HOME FOR FREE!! </div>Pay only $1 to Sell Your Townhome
                                </Button>
                            </div>
                       </div>
                   </div>
               </div>
                <Container>
                    <div className="packagesPanel_box">
                        <Row>
                            <Col xs={12} md={6} lg={6}>
                                <div className="stepsContent">
                                    <div className="stepsNo">Step 1</div>
                                    <div className="Step_title">YOU CHOOSE YOUR SELLING COMMISSION!</div>
                                    <div className="step_subTitle">Choose from our various commission packages selected for your type of townhome and what services you need to sell your home 
                                        for max value, depending on area, competition and market trends.</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <div className="package_townType">
                                    <div className="townType_listBox"  variant="primary" onClick={handleShow}>
                                        <div className="townType_img">
                                            <img src={stackedhome} />
                                        </div>
                                        <div className="homeTypes">STACKED / URBAN TOWHOME PACKAGE</div>
                                    </div>
                                    <div className="townType_listBox">
                                        <div className="townType_img">
                                            <img src={twoStory} />
                                        </div>
                                        <div className="homeTypes">2/3/4 STOREY TOWNHOME PACKAGE</div>
                                    </div>
                                    <div className="townType_listBox">
                                        <div className="townType_img">
                                            <img src={twoStory} />
                                        </div>
                                        <div className="homeTypes">LUXURY TOWNHOME PACKAGE</div>
                                    </div>
                                    <div className="townType_listBox">
                                        <div className="townType_img">
                                            <img src={stackedhome} />
                                        </div>
                                        <div className="homeTypes">WORK LIVE TOWNHOME PACKAGE</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
            </Container>
            <div className="stepSecond">
                <Container>
                    <Row>
                        <Col sm={12} md={7} lg={8}>
                            <div className="stepsContent">
                                <div className="stepsNo">Step 2</div>
                                <div className="Step_title">Costs To sell <br/>Your Townhome</div>
                            </div>
                            <div className="accordianBox">
                                <Accordion  defaultActiveKey={activeId}>
                                    <Card>
                                        <div  className={activeId === '0' ? 'cardHeaderContent active-panel' : 'cardHeaderContent'}>
                                            <AccordionToggle onClick={() => toggleActive('0')} as={Button} variant="link" eventKey="0">
                                                <img src={Commission1}/> Listing Commission 
                                            </AccordionToggle>
                                        </div>
                                        <AccordionCollapse eventKey="0">
                                        <div className="cardBodyContent">
                                            <p>
                                            This is the commission, in percentage of the final sale price, that you will be paying your 
                                            agent/brokerage for the services provided to sell your townhome. This can range from 1% to 5% 
                                            usually and is based on several factors such as the realtor experience, brokerage brand names, 
                                            amount of time & effort, services included, marketing budget for your agent to sell your 
                                            property. While discount agents and brokerages don’t normally include many services, 
                                            full-service agents and brokerages may pay for professional photography, videography, virtual 
                                            tours, floor plans, online marketing, print marketing, cleaning, home inspections, staging and more.
                                            </p>
                                            <p>
                                            For example if your home is in a very high demand area with multiple offers AND is in extravagant shape 
                                            and ready to sell than you might choose 1% as the property might “sell itself” but if your property will need 
                                            some marketing, some interior staging, renos, and marketing by your agent than 1.5% or 2% will be more 
                                            suitable to ensure you receive much more for your property.
                                            </p>
                                        </div>
                                        </AccordionCollapse>
                                    </Card>
                                    <Card>
                                        <div  className={activeId === '1' ? 'cardHeaderContent active-panel' : 'cardHeaderContent'}>
                                            <AccordionToggle onClick={() => toggleActive('1')} as={Button} variant="link" eventKey="1">
                                            <img src={Commission2}/> Co-Op Commission
                                            </AccordionToggle>
                                        </div>
                                            <AccordionCollapse eventKey="1">
                                            <div className="cardBodyContent">
                                                <p>This is the commission you are going to pay the other agent that will be bringing a buyer to your property. Why are you paying this? Think of it as an incentive for agents to bring their buyers to your property vs any competing properties for sale. The usually rate offered is 2.5% of your sale price. </p>
                                            </div>
                                            </AccordionCollapse>
                                    </Card>
                                    <Card>
                                    <div  className={activeId === '2' ? 'cardHeaderContent active-panel' : 'cardHeaderContent'}>
                                        <AccordionToggle onClick={() => toggleActive('2')} as={Button} variant="link" eventKey="2">
                                        <img src={Commission3}/>  Total commission 
                                        </AccordionToggle>
                                        </div>
                                        <AccordionCollapse eventKey="2">
                                        <div className="cardBodyContent">
                                            <p>This is your listing commission plus your co-op commission combined. For example if you decided to pay your realtor 1.5% 
                                                listing commission and your co-op was offered at 2.5% than your total commission would be 4% of your final sale price 
                                                to be paid to both agents.</p>
                                        </div>
                                        </AccordionCollapse>
                                    </Card>
                                    <Card>
                                    <div  className={activeId === '3' ? 'cardHeaderContent active-panel' : 'cardHeaderContent'}>
                                        <AccordionToggle onClick={() => toggleActive('3')} as={Button} variant="link" eventKey="3">
                                        <img src={Commission4}/>   Closing Costs
                                        </AccordionToggle>
                                        </div>
                                        <AccordionCollapse eventKey="3">
                                        <div className="cardBodyContent">
                                            <p>During your real estate transaction commission is one of the largest costs but there are a few more in order to close your sale and these are 
                                            - legal fees – status certificate – outstanding utilities and condo fees – mortgage bridging costs </p>
                                        </div>
                                        </AccordionCollapse>
                                    </Card>
                                    <Card>
                                    <div  className={activeId === '4' ? 'cardHeaderContent active-panel' : 'cardHeaderContent'}>
                                        <AccordionToggle onClick={() => toggleActive('4')} as={Button} variant="link" eventKey="4">
                                        <img src={Commission5}/> Moving Costs    
                                        </AccordionToggle>
                                        </div>
                                        <AccordionCollapse eventKey="4">
                                        <div className="cardBodyContent">
                                            <p>Selling your home means, packing, organizing and moving and this might ensure some added costs such as: Boxes/Moving Supplies, Movers, 
                                                Cleaners, Garbage Disposal, Storage, etc </p>
                                        </div>
                                        </AccordionCollapse>
                                    </Card>
                                </Accordion>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="stepThird">
                <Container>
                    <Row>
                        <Col sm={12} md={4}>

                        </Col>
                        <Col sm={12} md={8}>
                        <div className="stepsContent">
                                    <div className="stepsNo">Step 3</div>
                                    <div className="Step_title">WHY DO I NEED THESE SERVICES?</div>
                                    <div className="step_subTitle">Why stick to just one option? We offer a variety of packages to fit to let you sell your home the way you 
                                            want it to be sold. Get the services you need, and sell your house for its best price!</div>
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={4}>
                            <div className="listingServices">
                            <div className="commistionTitle">PRELISTING SERVICES</div>
                                <ul>
                                    <li> Realtor Meet & Greet </li>
                                    <li>Free Legal Consult </li>
                                    <li>Free Mortgage Consult</li>
                                    <li>FOR SALE Sign and Post Installed</li>
                                    <li>Pre Listing Inspection </li>
                                    <li>Storage / Pods</li>
                                    <li>Staging Consult, Plan & Service </li>
                                    <li>Staging Furniture & Accesories </li>
                                    <li>Professional Cleaners</li>
                                    <li>Elite Photography and Floorplan</li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="listingServices">
                            <div className="commistionTitle">LISTING SERVICES</div>
                                <ul>
                                    <li>
                                         Realtor Meet & Greet
                                    </li>
                                    <li>Free Legal Consult </li>
                                    <li>Free Mortgage Consult</li>
                                    <li>FOR SALE Sign and Post Installed</li>
                                    <li>Pre Listing Inspection </li>
                                    <li>Storage / Pods</li>
                                    <li>Staging Consult, Plan & Service </li>
                                    <li>Staging Furniture & Accesories </li>
                                    <li>Professional Cleaners</li>
                                    <li>Elite Photography and Floorplan</li>
                                    <li>MLS / Realtor.ca Listing</li>
                                    <li>Social Media Ads</li>
                                    <li>Feature Sheet / Pamphlet / Booklet</li>
                                    <li>Community / School Reports</li>
                                    <li>Open House</li>
                                    
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="listingServices">
                            <div className="commistionTitle">LISTING SERVICES</div>
                                <ul>
                                    <li>
                                         Realtor Meet & Greet
                                    </li>
                                    <li>Free Legal Consult </li>
                                    <li>Free Mortgage Consult</li>
                                    <li>FOR SALE Sign and Post Installed</li>
                                    <li>Pre Listing Inspection </li>
                                    <li>Storage / Pods</li>
                                    <li>Staging Consult, Plan & Service </li>
                                    <li>Staging Furniture & Accesories </li>
                                    <li>Professional Cleaners</li>
                                    <li>Elite Photography and Floorplan</li>
                                    <li>MLS / Realtor.ca Listing</li>
                                    <li>Social Media Ads</li>
                                    <li>Feature Sheet / Pamphlet / Booklet</li>
                                    <li>Community / School Reports</li>
                                    <li>Open House</li>
                                    <li>Lawyer Services</li>
                                    <li>Concierge Service</li>
                                    <li>Boxes / Moving Kit</li>
                                    <li>Cleaner</li>
                                    <li>Movers</li>
                                </ul>
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>

           </div>

           <Modal className="package_Modals"  show={show} >
                <div className="modalHeader" closeButton>
                    <div className="closBtn" onHide={handleClose} >
                        <Button variant="link" onClick={handleClose}>&times;
                        </Button>
                    </div>     
                </div>
                <ModalBody>
                <div className="stepThird">
                    <Row>
                        <Col sm={12} md={8}>
                        <div className="stepsContent">
                                    <div className="stepsNo">STACKED / URBAN TOWHOME PACKAGE</div>
                                    <div className="Step_title"></div>
                                    <div className="step_subTitle"></div>
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={4}>
                            <div className="listingServices">
                                <div className="commistionTitle">1% Commission</div>
                                <ul>
                                    <li>
                                         Realtor Meet & Greet
                                    </li>
                                    <li>Free Legal Consult </li>
                                    <li>Free Mortgage Consult</li>
                                    <li>FOR SALE Sign and Post Installed</li>
                                    <li>Pre Listing Inspection </li>
                                    <li>Storage / Pods</li>
                                    <li>Staging Consult, Plan & Service </li>
                                    <li>Staging Furniture & Accesories </li>
                                    <li>Professional Cleaners</li>
                                    <li>Elite Photography and Floorplan</li>
                                   
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="listingServices">
                            <div className="commistionTitle">1.5% Commission</div>
                                <ul>
                                    <li>
                                         Realtor Meet & Greet
                                    </li>
                                    <li>Free Legal Consult </li>
                                    <li>Free Mortgage Consult</li>
                                    <li>FOR SALE Sign and Post Installed</li>
                                    <li>Pre Listing Inspection </li>
                                    <li>Storage / Pods</li>
                                    <li>Staging Consult, Plan & Service </li>
                                    <li>Staging Furniture & Accesories </li>
                                    <li>Professional Cleaners</li>
                                    <li>Elite Photography and Floorplan</li>
                                    <li>MLS / Realtor.ca Listing</li>
                                    <li>Social Media Ads</li>
                                    <li>Feature Sheet / Pamphlet / Booklet</li>
                                    <li>Community / School Reports</li>
                                    <li>Open House</li>
                                    
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className="listingServices">
                            <div className="commistionTitle">2% Commission</div>
                                <ul>
                                    <li>
                                         Realtor Meet & Greet
                                    </li>
                                    <li>Free Legal Consult </li>
                                    <li>Free Mortgage Consult</li>
                                    <li>FOR SALE Sign and Post Installed</li>
                                    <li>Pre Listing Inspection </li>
                                    <li>Storage / Pods</li>
                                    <li>Staging Consult, Plan & Service </li>
                                    <li>Staging Furniture & Accesories </li>
                                    <li>Professional Cleaners</li>
                                    <li>Elite Photography and Floorplan</li>
                                    <li>MLS / Realtor.ca Listing</li>
                                    <li>Social Media Ads</li>
                                    <li>Feature Sheet / Pamphlet / Booklet</li>
                                    <li>Community / School Reports</li>
                                    <li>Open House</li>
                                    <li>Lawyer Services</li>
                                    <li>Concierge Service</li>
                                    <li>Boxes / Moving Kit</li>
                                    <li>Cleaner</li>
                                    <li>Movers</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
               </div>
                </ModalBody>
                <ModalFooter>
                
                <Button variant="primary" onClick={handleClose}>
                        Go with it?
                </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
export default Sellerpanel;