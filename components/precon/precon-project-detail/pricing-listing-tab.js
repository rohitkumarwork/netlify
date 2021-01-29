import React from "react";

const PricingListing = ({activeKey}) => {
    return (
        <div className={ activeKey == "Floor" ? "tab-pane fade show active" : "tab-pane fade " } id="Floor" role="tabpanel" aria-labelledby="profile-tab">
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
                 8 Floor Plans
              </div>
              <div className="subtitle">
                 *Priced from
              </div>
              <div className="floreBoxPanel">
                 <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                       <div className="floreBox">
                          <div className="mapImage" style={{'background': 'url(../static/images/map.png)' }}>
                       </div>
                       <div className="headingTitle">
                          Mount Pleasant North 
                       </div>
                       <div className="checkingPrice">
                          Checking Price
                       </div>
                       <div className="status">
                          Available
                       </div>
                       <div className="florePoints">
                          <ul>
                             <li>
                                <div className="stp">
                                   <img src="../static/images/bed.png" />  3 Bedrooms
                                </div>
                             </li>
                             <li>
                                <div className="stp">
                                   <img src="../static/images/bath.png" /> 2 Bathroom
                                </div>
                             </li>
                             <li>
                                <div className="stp">
                                   1092 Sq Ft
                                </div>
                             </li>
                          </ul>
                       </div>
                       <div className="compare">
                          <div className="input-theme">
                             <div className="checkbox-theme checkbox-color">
                                <input id="Compare" className="styled" type="checkbox" />
                                <label for="Compare" className="arrow-label">Compare</label>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="floreBox">
                       <div className="mapImage" style={{'background': 'url(../static/images/map.png)'}}>
                    </div>
                    <div className="headingTitle">
                       Mount Pleasant North 
                    </div>
                    <div className="checkingPrice">
                       Checking Price
                    </div>
                    <div className="status">
                       Available
                    </div>
                    <div className="florePoints">
                       <ul>
                          <li>
                             <div className="stp">
                                3 Bedrooms
                             </div>
                          </li>
                          <li>
                             <div className="stp">
                                2 Bathroom
                             </div>
                          </li>
                          <li>
                             <div className="stp">
                                1092 Sq Ft
                             </div>
                          </li>
                       </ul>
                    </div>
                    <div className="compare">
                       <div className="input-theme">
                          <div className="checkbox-theme checkbox-color">
                             <input id="Compare" className="styled" type="checkbox" />
                             <label for="Compare" className="arrow-label">Compare</label>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <div className="floreBox">
                    <div className="mapImage" style={{'background': 'url(../static/images/map.png)'}}>
                 </div>
                 <div className="headingTitle">
                    Mount Pleasant North 
                 </div>
                 <div className="checkingPrice">
                    Checking Price
                 </div>
                 <div className="status">
                    Available
                 </div>
                 <div className="florePoints">
                    <ul>
                       <li>
                          <div className="stp">
                             3 Bedrooms
                          </div>
                       </li>
                       <li>
                          <div className="stp">
                             2 Bathroom
                          </div>
                       </li>
                       <li>
                          <div className="stp">
                             1092 Sq Ft
                          </div>
                       </li>
                    </ul>
                 </div>
                 <div className="compare">
                    <div className="input-theme">
                       <div className="checkbox-theme checkbox-color">
                          <input id="Compare" className="styled" type="checkbox" />
                          <label for="Compare" className="arrow-label">Compare</label>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="floreBox">
                 <div className="mapImage" style={{'background': 'url(../static/images/map.png)'}}>
              </div>
              <div className="headingTitle">
                 Mount Pleasant North 
              </div>
              <div className="checkingPrice">
                 Checking Price
              </div>
              <div className="status">
                 Available
              </div>
              <div className="florePoints">
                 <ul>
                    <li>
                       <div className="stp">
                          3 Bedrooms
                       </div>
                    </li>
                    <li>
                       <div className="stp">
                          2 Bathroom
                       </div>
                    </li>
                    <li>
                       <div className="stp">
                          1092 Sq Ft
                       </div>
                    </li>
                 </ul>
              </div>
              <div className="compare">
                 <div className="input-theme">
                    <div className="checkbox-theme checkbox-color">
                       <input id="Compare" className="styled" type="checkbox" />
                       <label for="Compare" className="arrow-label">Compare</label>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
           <div className="floreBox">
              <div className="mapImage" style={{'background': 'url(../static/images/map.png)'}}>
           </div>
           <div className="headingTitle">
              Mount Pleasant North 
           </div>
           <div className="checkingPrice">
              Checking Price
           </div>
           <div className="status">
              Available
           </div>
           <div className="florePoints">
              <ul>
                 <li>
                    <div className="stp">
                       3 Bedrooms
                    </div>
                 </li>
                 <li>
                    <div className="stp">
                       2 Bathroom
                    </div>
                 </li>
                 <li>
                    <div className="stp">
                       1092 Sq Ft
                    </div>
                 </li>
              </ul>
           </div>
           <div className="compare">
              <div className="input-theme">
                 <div className="checkbox-theme checkbox-color">
                    <input id="Compare" className="styled" type="checkbox" />
                    <label for="Compare" className="arrow-label">Compare</label>
                 </div>
              </div>
           </div>
        </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
           <div className="floreBox">
              <div className="mapImage" style={{'background': 'url(../static/images/map.png)'}}>
           </div>
           <div className="headingTitle">
              Mount Pleasant North 
           </div>
           <div className="checkingPrice">
              Checking Price
           </div>
           <div className="status">
              Available
           </div>
           <div className="florePoints">
              <ul>
                 <li>
                    <div className="stp">
                       3 Bedrooms
                    </div>
                 </li>
                 <li>
                    <div className="stp">
                       2 Bathroom
                    </div>
                 </li>
                 <li>
                    <div className="stp">
                       1092 Sq Ft
                    </div>
                 </li>
              </ul>
           </div>
           <div className="compare">
              <div className="input-theme">
                 <div className="checkbox-theme checkbox-color">
                    <input id="Compare" className="styled" type="checkbox" />
                    <label for="Compare" className="arrow-label">Compare</label>
                 </div>
              </div>
           </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="peraContent">
           <div className="title">
              Price List
           </div>
           <div className="priceTable table-responsive">
              <table className="table ">
                 <thead>
                    <tr>
                       <th >Project Name</th>
                       <th >Floor facts</th>
                       <th >Stage</th>
                       <th >Price</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td>The Rosegarden</td>
                       <td>3 Bedrooms   2 Bathroom  1 Garage</td>
                       <td><span className="green">VIP Launch</span></td>
                       <td><span className="orange">$594,999</span></td>
                    </tr>
                    <tr>
                       <td >The Rosegarden</td>
                       <td>3 Bedrooms   2 Bathroom  1 Garage</td>
                       <td><span className="green">VIP Launch</span></td>
                       <td><span className="orange">$594,999</span></td>
                    </tr>
                    <tr>
                       <td >The Rosegarden</td>
                       <td>3 Bedrooms   2 Bathroom  1 Garage</td>
                       <td><span className="green">VIP Launch</span></td>
                       <td><span className="orange">$594,999</span></td>
                    </tr>
                    <tr>
                       <td >The Rosegarden</td>
                       <td>3 Bedrooms   2 Bathroom  1 Garage</td>
                       <td><span className="green">VIP Launch</span></td>
                       <td><span className="orange">$594,999</span></td>
                    </tr>
                    <tr>
                       <td>The Rosegarden</td>
                       <td>3 Bedrooms   2 Bathroom  1 Garage</td>
                       <td><span className="green">VIP Launch</span></td>
                       <td><span className="orange">$594,999</span></td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>
        </div>
        </div>
    )
}

export default PricingListing;