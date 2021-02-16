import react from "react";
import {TabContainer, Row,Col,Nav,NavItem,NavLink ,TabContent ,TabPane,Container,Button ,Carousel,CarouselItem,Header} from 'react-bootstrap'
import ownership from '../../static/images/ownership.png'
import STYLE from '../../static/images/architecture.png'
import OUTDOOR from '../../static/images/balcony.png'
import PARKING  from '../../static/images/parking.png'
import HouseMap from '../../static/images/house_map.png'
import House from '../../static/images/house.png'


const Guidepanel = () => {
  return (
      <>
         <TabContainer id="left-tabs-example" defaultActiveKey="first">
           <div className="topHeader_Sec">
          <Container>
                    <div className="mainTitle">TOWNHOME GUIDE</div>
                      <div className="subTitle">Townhomes come in many shapes, sizes and styles that can be confusing to understand which one suits your needs. 
                        Let us help you with that as we are the specialists and believe knowledge is power as a buyer or seller!
                      </div>
            </Container>
          </div>
           <Container>
           
          <Row>

            <Col sm={12}>
              <Nav variant="pills" className="flex-row tabsList">
                <NavItem>
                  <NavLink eventKey="first">
                      <div className="tabulerList">
                          <div className="guideList_icon">
                              <img src={ownership} />
                          </div>
                          <div className="guideList_name">
                              OWNERSHIP
                          </div>
                      </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="second">
                      <div className="tabulerList">
                          <div className="guideList_icon">
                              <img src={STYLE} />
                          </div>
                          <div className="guideList_name">
                            STYLE
                          </div>
                      </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="third">
                     <div className="tabulerList">
                          <div className="guideList_icon">
                              <img src={OUTDOOR} />
                          </div>
                          <div className="guideList_name">
                          OUTDOOR SPACE 
                          </div>
                      </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="fourth">
                       <div className="tabulerList">
                          <div className="guideList_icon">
                              <img src={PARKING } />
                          </div>
                          <div className="guideList_name">
                          PARKING
                          </div>
                      </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm={12}>
              <TabContent>
                <TabPane eventKey="first">
                 <div className="guide_InfoBox">
                    <div className="headingBox">
                      <div className="title">OWNERSHIP</div>
                      <div className="subtitle">There are primarily two types of ownership both ensure you are the sole owner of the property and deed:</div>
                    </div>
                    <div className="Info_Guide">
                    <Row>
                    <Col sm={12} md={4} lg={4}>
                          <div className="guideContent">
                              <h4>FREEHOLD </h4>
                              <p> In a freehold, you outright own the house, the plot of land 
                                  the home is built upon as well as any front and backyard 
                                  space that falls within the property line (much like in a 
                                  conventional detached house).A far more hands-on form 
                                  of ownership, residents of freehold townhouses are 
                                  responsible for handling every facet of 
                                  maintenance and upkeep, from roof repairs to shoveling 
                                  the driveway. That being said, freehold townhomes don’t 
                                  have monthly maintenance fees, which is a big incentive 
                                  for many buyers. Moreover, as freehold ownership 
                                  encompasses land, these townhomes naturally have higher 
                                  price tags and generally have higher potential for 
                                  appreciation than their condominium counterparts.
                              </p>
                              <div className="actBtn">
                              <Button variant="primary" className="orangeBtn">Freehold Townhomes </Button>
                              </div>
                          </div>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                          <div className="guideContent">
                              <h4>FREEHOLD + POTL/FEE </h4>
                              <p> A Piece Of Tied Land is a freehold parcel of land, or a 
                                  standard condominium unit, which is tied to a share in a 
                                  Common Elements Condominium (“CEC”). This is an 
                                  important difference to distinguish as a freehold potl is 
                                  the same as a freehold ownership townhome but with a 
                                  smaller fee for shared space and amenities
                              </p>
                              <p>In this case, the property is freehold but it's in an area with 
                                  common elements, generally on smaller streets that are 
                                  designated fire routes. The condo corp is created to take 
                                  care of things like street lights, visitor parking, garbage pick up, snow 
                                  removal, etc. The property itself remains a freehold 
                                  allowing your full freedom to your property decisions.  
                                  The maintenance fees for freehold properties also tends 
                                  to be much lesser than condo properties.  </p>
                             
                          </div>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                          <div className="guideContent">
                              <h4>CONDO </h4>
                              <p> A condo townhome does not include land ownership. Similar 
                                  to a condo apartment, ownership only extends to the 
                                  interiors while the land the property is built upon is 
                                  designated as a common space and ownership is equally 
                                  split among all members of a condo association. That means 
                                  condo townhomes are far more affordable than their freehold 
                                  alternatives, but also generally have a lower appreciation 
                                  potential and pace.
                              </p>
                              <p> A huge benefit of a condo townhouse is regular maintenance 
                                  tasks are covered. Depending on the community and condo 
                                  corporation, everything from roof repairs to landscaping, 
                                  window and garage door fixes, along with external structural 
                                  issues may be covered. The drawback being you will have to 
                                  pay for monthly maintenance fees. Generally condo 
                                  townhome fees are lower than comparable high-rise 
                                  apartments and serve as a safety net from costly and sudden 
                                  one-off emergency repairs. </p>
                              <div className="actBtn">
                              <Button variant="primary" className="orangeBtn">Condos </Button>
                              </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                 </div>
                </TabPane>
                <TabPane eventKey="second">
                <div className="guide_InfoBox">
                    <div className="headingBox">
                      <div className="title">STYLE</div>
                      <div className="subtitle">Townhomes come in various shapes, sizes and layouts. Here are some of the most common versions:</div>
                    </div>
                    <div className="Info_Guide">
                    <Carousel>
                        <CarouselItem>
                          <div className="guideContent">
                              <h4>2 STOREY </h4>
                                <p> A 2-storey townhome in its essence is a townhome with two levels above ground. The majority of townhomes in this style do include a basement and is a popular 
                                    compromise between the ease of use due to having reduced flights of stairs with the affordability generally associated with townhomes. Similar to detached 2-storey 
                                    homes, a 2-storey townhome offers the kitchen, living/dining room, family room on the ground floor, with the master bedroom and additional bedrooms located on the 
                                    second floor.
                              </p>
                              <Row>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={HouseMap} />
                                  </Col>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={House} />
                                  </Col>
                              </Row>
                          </div>
                       </CarouselItem>
                       <CarouselItem>
                          <div className="guideContent">
                              <h4>	2 STOREY BUNGALOW (BUNGALOW TOWNHOMES)</h4>
                                <p> A 2-storey bungalow townhome is an uncommon design that is catering to people downsizing from large detached homes. The difference between a 2-storey bungalow and a 2-storey is the master bedroom and all its amenities are on the ground floor along with the kitchen, living and dining rooms with additional bedrooms or loft above ground on the second floor. 
                              </p>
                              <Row>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={HouseMap} />
                                  </Col>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={House} />
                                  </Col>
                              </Row>
                          </div>
                       </CarouselItem>
                       <CarouselItem>
                          <div className="guideContent">
                              <h4>3 STOREY  </h4>
                                <p> A 3-storey townhome has generally two flights of stairs and three levels above ground. This style of townhome has become more and more common in the GTA as home prices rise as they offer a larger living space with using the same or less amount of land as a 2-storey townhome. In a traditional 3-storey townhome, the kitchen, living/dining room are located on the second level of the home with the bedrooms on the third level. The main floor of the townhome may include a family room or an additional bedroom in certain configurations. 
                              </p>
                              <Row>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={HouseMap} />
                                  </Col>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={House} />
                                  </Col>
                              </Row>
                          </div>
                       </CarouselItem>
                       <CarouselItem>
                          <div className="guideContent">
                              <h4>DUAL ENTRY </h4>
                                <p> A dual entry townhome is very similar to a standard 2 or 3 storey townhome in layout except as the name suggests, there is a second entry from the rear of the townhome, usually due to the placement of the garage. This type of townhome is even more space efficient use of development space as these townhomes are usually larger while utilizing a smaller footprint. These types of townhomes have a cleaner aesthetic from the front as there are no garage doors to be seen from the front of the Property
                              </p>
                              <Row>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={HouseMap} />
                                  </Col>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={House} />
                                  </Col>
                              </Row>
                          </div>
                       </CarouselItem>
                       <CarouselItem>
                          <div className="guideContent">
                              <h4>4 STOREY </h4>
                                <p> A 4-storey townhomes are usually the same as a 3-storey townhome on the first three levels of the home. The difference being, in the 4-storey townhome the fourth level is usually dedicated entirely to a master bedroom and its ensuite, giving the feel of a much larger home with larger bedrooms in the same footprint as a much smaller home.
                              </p>
                              <Row>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={HouseMap} />
                                  </Col>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={House} />
                                  </Col>
                              </Row>
                          </div>
                       </CarouselItem>
                       <CarouselItem>
                          <div className="guideContent">
                              <h4>STACKED or URBAN </h4>
                                <p> Stacked townhomes are a popular and affordable townhome style. Stacked townhomes are condominium townhomes with multiple units’ entrances at a central location. They are generally smaller than traditional townhomes as they are a middle ground between a condo apartment and a standard townhome. As the arrangement for stacked townhomes can vary greatly as there are upper and lower units in each block, generally the main floor of the townhome will feature the kitchen and living/dining areas, with the bedrooms on the second level. Some units in a stacked townhouse block will feature a rooftop terrace as a premium feature.                               </p>
                              <Row>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={HouseMap} />
                                  </Col>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={House} />
                                  </Col>
                              </Row>
                          </div>
                       </CarouselItem>
                       <CarouselItem>
                          <div className="guideContent">
                              <h4>BACK TO BACK  </h4>
                                <p> Back to back townhomes are townhomes laid out in a format wherein the townhomes have no backyards and are connected back to back in a divided long block. This format is space efficient and is lower maintenance than a traditional townhome with a backyard to maintain, generally this allows the builder to sell the home at a lower price point. There are a wide range of back to back townhomes with styles from 2-storey to 4-storey. </p>
                              <Row>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={HouseMap} />
                                  </Col>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={House} />
                                  </Col>
                              </Row>
                          </div>
                       </CarouselItem>
                       <CarouselItem>
                          <div className="guideContent">
                              <h4>	LIVE / WORK  </h4>
                                <p>Live/work townhomes are similar to the standard 2 to 3-storey townhomes in the upper floor layouts, with the exception of the main floor being for commercial use. These townhomes are becoming a hot segment in the townhome market as there aren’t many projects with live/work towns available. Live/work towns offer the flexibility of renting out the ground floor for income or for the resident to operate their own business at a lower cost. </p>
                              <Row>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={HouseMap} />
                                  </Col>
                                  <Col sm={12} md={6} lg={6}>
                                  <img src={House} />
                                  </Col>
                              </Row>
                          </div>
                       </CarouselItem>
                    </Carousel>
                      
                    </div>
                 </div>
                </TabPane>
                <TabPane eventKey="third">
                <div className="guide_InfoBox">
                    <div className="headingBox">
                      <div className="title">OUTDOOR SPACE </div>
                      <div className="subtitle">There are many options as to enjoying outdoor space in a townhome.  Here are some of your choices:</div>
                    </div>
                    <div className="Info_Guide">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                          <div className="guideContent">
                            <h4>Private Backyard  </h4>
                            <p> This is a fully fenced private backyard on all sides, similar to those found in detached 
                                and semi detached homes. These are usually found in higher end townhomes due to the 
                                luxury of privacy for you and your family.
                            </p>
                            <img src={House} />
                          </div>
                       
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                          <div className="guideContent">
                              <h4>Shared Backyard </h4>
                              <p> These backyards are usually consisted of a large backyard shared with a few townhomes. 
                                  There are walls separating partial components of your backyard from your neighbours 
                                  usually with cement tile. The shared component is mainly composed of lawn for all to 
                                  share and use. This is most likely the case in a Condo Townhome

                              </p>
                              <img src={House} />
                          </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                          <div className="guideContent">
                              <h4>Balcony</h4>
                              <p> Unless you have a back to back townhome, you will most likely be enjoying a outdoor 
                                  balcony with a deck.  Unless your balcony is in a stacked townhome. it will be 
                                  uncovered above and allowing for direct access to sunlight. 
                              </p>
                              <img src={House} />
                          </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                          <div className="guideContent">
                              <h4>Balcony Terrace </h4>
                              <p> Depending on the overall design and land availability, some towns with lane way garages 
                                  might have a large balcony terrace above the garage. This is a much larger outdoor 
                                  balcony usually accessed from the kitchen or main living space.
                              </p>
                              <img src={House} />
                          </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                          <div className="guideContent">
                              <h4>Rooftop Terrace    </h4>
                              <p> One very popular option is the rooftop terrace. This is even more common in back to back townhomes since there is no option for any outdoor space behind the unit. Roof top terrace is 
                                  mostly accessed from the top floor. These tend to be very large, private and with great views along with gas lines and electrical outlets.
                              </p>
                              <img src={House} />
                          </div>
                        </Col>
                    </Row>

                    </div>
                 </div>
                </TabPane>
                <TabPane eventKey="fourth">
                <div className="guide_InfoBox">
                    <div className="headingBox">
                      <div className="title">PARKING</div>
                     
                    </div>
                    <div className="Info_Guide">
                          <div className="guideContent">
                              <h4>No Parking </h4>
                              <p> As important as parking is as an amenity in the GTA today, some townhomes do not come with any parking. This may be prevalent in many condominium 
                                  townhomes, condominium building townhomes and stacked townhomes. 
                              </p>
                          </div>
                          <div className="guideContent">
                              <h4>Underground Parking  </h4>
                              <p> Underground parking is common in condominium, stacked and condominium building townhomes. Some developments of stacked or condominium 
                                  condos have direct access from the underground parking to the unit itself.
                              </p>
                          </div>
                          <div className="guideContent">
                              <h4>Single Garage / Single Driveway</h4>
                              <p> A single garage and single driveway parking arrangement is typically the most common type of parking for a 2, 3 or 4-storey townhome. These townhomes 
                                  have either a front or rear parking with or without a driveway with space for additional parking.
                              </p>
                          </div>
                          <div className="guideContent">
                              <h4>Double Garage / Double Driveway</h4>
                              <p> A double garage and double driveway arrangement are more common in large freehold developments. These townhomes would be higher priced due to 
                                  the larger piece of land required for each home. A townhome with double garage and driveway would be the type of townhome most resembling a 
                                  traditional detached home.
                              </p>
                          </div>
                    </div>
                 </div>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
          </Container>
        </TabContainer>   
      </>
  )
};

export default Guidepanel;