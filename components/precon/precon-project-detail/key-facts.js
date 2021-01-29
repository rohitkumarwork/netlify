import React from "react";

const KeyFacts = ({activeKey, handleKeyChange, data}) => {
    return (
        <div className={ activeKey == "keyfact" ? "tab-pane fade show active" : "tab-pane fade " } id="keyfact" role="tabpanel" aria-labelledby="home-tab" onClick={(e) => handleKeyChange(e, "keyfact")}>
        <div className="innerContentzone">
           <div className="peraContent">
              <div className="title">
                 SUMMERY
              </div>
              <div className="subtitle">
                 A boutique community of condominium townhomes by the creek, a place to gather and grow. With a location that puts you just steps 
                 from shopping, restaurants, schools, parks, the Zum transit system, and a short drive from highways 407 and 401, you’ll find yourself at 
                 home in this coveted Brampton neighbourhood.
              </div>
           </div>
           <div className="peraContent">
              <div className="title">
                 Key Facts
              </div>
              <div className="subtitle">
                 Key facts for Chinguacousy Rd & Remembrance Rd
              </div>
              <div className="facts">
                 <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                       <div className="factList">
                          <div className="lableTask">
                             <div className="leftLable">
                                Ownership Type :
                             </div>
                             <div className="rightLable">
                                {data.Ownership}
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Style :
                             </div>
                             <div className="rightLable">
                                N/A
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Bedrooms :
                             </div>
                             <div className="rightLable">
                                {data.Number_of_Bedrooms[0]} Rooms
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Parking :
                             </div>
                             <div className="rightLable">
                                {data.Parking_Spots} {data.Parking_Type[0]}
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Parking Price:
                             </div>
                             <div className="rightLable">
                                $ {data.Parking_Price}
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Competetions Date: 
                             </div>
                             <div className="rightLable">
                                {data.Release_Date}
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                       <div className="factList">
                          <div className="lableTask">
                             <div className="leftLable">
                                Sq Footage :
                             </div>
                             <div className="rightLable">
                                N/A
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Price Per Sq Foot :
                             </div>
                             <div className="rightLable">
                                N/A
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Ceiling
                             </div>
                             <div className="rightLable">
                                N/A
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Construction Status :
                             </div>
                             <div className="rightLable">
                                {data.Construction_Status}
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                # of Units :
                             </div>
                             <div className="rightLable">
                                N/A
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="peraContent">
              <div className="row">
                 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="title">
                       Purchase Structure
                    </div>
                    <div className="facts">
                       <div className="factList">
                          <div className="lableTask">
                             <div className="leftLable">
                                Total Min Deposite:
                             </div>
                             <div className="rightLable">
                                N/A
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Deposite Structure : {data.Deposit_Structure}
                             </div>
                             <div className="rightLable">
                                Style :
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Development : 
                             </div>
                             <div className="rightLable">
                                N/A
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Assignment Policy : {data.Assignment_Clause}
                             </div>
                             <div className="rightLable">
                                N/A
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Est. Maintanance Fees : 
                             </div>
                             <div className="rightLable">
                              {data.Maintenance_POTL_Fee}
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Est. Property Tax : 
                             </div>
                             <div className="rightLable">
                                {data.Property_Taxes}
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="title">
                       Important Dates
                    </div>
                    <div className="facts">
                       <div className="factList">
                          <div className="lableTask">
                             <div className="leftLable">
                                Est. Occupancy :
                             </div>
                             <div className="rightLable">
                                N/A
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                VIP Launch :
                             </div>
                             <div className="rightLable">
                                {data.VIP_Launch}
                             </div>
                          </div>
                          <div className="lableTask">
                             <div className="leftLable">
                                Public Launch :
                             </div>
                             <div className="rightLable">
                                N/A
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        </div>
    )
}

export default KeyFacts;