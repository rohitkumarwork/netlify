import React from "react";
import LineChart from "./line-chart";
import DonutChart from "./donut-chart";

const StatisticTab = ({activeKey, handleKeyChange,data}) =>{
    return (
        <div className={ activeKey=="Statitistics" ? "tab-pane fade show active" : "tab-pane fade " } id="Statitistics" role="tabpanel" aria-labelledby="contact-tab" onClick={(e)=> handleKeyChange(e, "Statitistics")}>
            <div className="innerContentzone">
                <div className="peraContent">
                    <div className="title"> Statictics </div>
                    <div className="statisticsRate">
                        <div className="stats">
                            <ul>
                                <li>
                                    <div className="statRateBox">
                                        <div className="heading"> Avrage Price 2018 </div>
                                        <div className="price"> Median Price </div>
                                        <div className="medianPrice red"> N/A </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="statRateBox">
                                        <div className="heading"> Avrage Price 2019 </div>
                                        <div className="price"> New Listing </div>
                                        <div className="medianPrice green"> N/A </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="statRateBox">
                                        <div className="headingPre"> <span>N/A</span> <span></span> </div>
                                        <div className="price"> One Year </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="statRateBox">
                                        <div className="headingPre"> <span>N/A</span> <span></span> </div>
                                        <div className="price"> Three Year </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="statisticsboxPanel">
                        <div className="titlepanel"> Median Price and Average Days On Market * </div>
                        <div className="graph"> 
                        <img src="../static/images/graph1.png" /> 
                        </div>
                    </div>
                    <div className="statisticsboxPanel">
                        <div className="titlepanel"> Market Temperature (absorption rate) * </div>
                        <div className="graph"> 
                            <LineChart />
                         </div>
                    </div>
                    <div className="statisticsboxPanel">
                    <div className="titlepanel"> Mortgage Calculator </div>
                    <div className="calculatorCustom">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                                <div className="calculatorSliders">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <div className="inputForm">
                                                <div className="lable">Home Price</div>
                                                <div className="inputText">
                                                    <input type="text" className="form-control" value="N/A" /> </div>
                                                <div className="inputSlide">
                                                    <input type="range" className="form-slider" id="vol" name="vol" min="0" max="50" /> </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                            <div className="inputForm">
                                                <div className="lable">Term</div>
                                                <div className="inputText">
                                                    <input type="text" className="form-control" value="N/A" /> </div>
                                                <div className="inputSlide">
                                                    <input type="range" className="form-slider" id="vol" name="vol" min="0" max="50" /> </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                            <div className="inputForm">
                                                <div className="lable">Rate</div>
                                                <div className="inputText">
                                                    <input type="text" className="form-control" value="N/A" /> </div>
                                                <div className="inputSlide">
                                                    <input type="range" className="form-slider" id="vol" name="vol" min="0" max="50" /> </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <div className="inputForm">
                                                <div className="lable">Down Payment</div>
                                                <div className="inputText">
                                                    <input type="text" className="form-control" value="N/A" /> </div>
                                                <div className="inputSlide">
                                                    <input type="range" className="form-slider" id="vol" name="vol" min="0" max="50" /> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                <div className="morgageScreen">
                                    <div className="morgageTitle"> Mortgage Payment </div>
                                    <div className="mortageTotal"> N/A </div>
                                    <div className="rate">
                                        <div className="left"> Rate
                                            <br /> N/A </div>
                                        <div className="right"> APR
                                            <br /> N/A </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="statisticsboxPanel">
                    <div className="titlepanel"> Cash Flow Analysis </div>
                    <div className="cashFlow">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                                <div className="cashFlowAnalysis">
                                    <div className="paymentBox">
                                        <div className="paymentTitle"> Mortgage Payment: </div>
                                        <div className="paymentrs"> N/A </div>
                                    </div>
                                    <div className="paymentBox">
                                        <div className="paymentTitle"> Monthly Payment: </div>
                                        <div className="paymentrs"> N/A </div>
                                    </div>
                                    <div className="paymentBox">
                                        <div className="paymentTitle"> Break Even Down Payment: </div>
                                        <div className="paymentrs"> N/A </div>
                                    </div>
                                    <div className="inputForm">
                                        <div className="lable">Property Tax(Monthly):</div>
                                        <div className="inputText">
                                            <input type="text" className="form-control" value={data.Property_Taxes} /> </div>
                                    </div>
                                    <div className="inputForm">
                                        <div className="lable">Maintenance Cost:</div>
                                        <div className="inputText">
                                            <input type="text" className="form-control" value={data.Maintenance_POTL_Fee} /> </div>
                                    </div>
                                    <div className="inputForm">
                                        <div className="lable">Rental Income:</div>
                                        <div className="inputText">
                                            <input type="text" className="form-control" value="N/A" /> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                                <div className="morgageScreen">
                                    <div className="pieChart"> 
                                    <DonutChart />
                                    <br />
                                     </div>
                                    <div className="morgageTitle"> Cash Flow </div>
                                    <div className="mortageTotal"> N/A </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticTab;