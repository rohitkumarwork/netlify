import styled from "styled-components";
import React, { useState, useEffect } from "react";
import RSlider from "./RSlider";
import Link from "next/link";

const PackagesItem = styled.div``;

function Buyer() {
  const min = 400000;
  const max = 3000000;
  const start = 500000;
  const [sliderVal, setSliderVal] = useState(start);
  const [freeService, setFreeService] = useState([]);
  const [freeServiceCost, setFreeServiceCost] = useState([]);
  const setValue = (value) => {
    setSliderVal(value);
  };

  const numberWithCommas = (x) => {
    let y = parseInt(x);
    return y.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  const Total = (num) => {
    return numberWithCommas((num / 100) * 0.625);
  };
  useEffect(() => {
    if (sliderVal < 750000) {
      setFreeService(["Inspections", "Legal Close"]);
      setFreeServiceCost([600, 800]);
    }
    if (sliderVal > 750000) {
      setFreeService(["Inspections", "Legal Close", "Moving Box", "Cleaner"]);
      setFreeServiceCost([600, 800, 300, 300]);
    }
    if (sliderVal > 1000000) {
      setFreeService([
        "Inspections",
        "Legal Close",
        "Moving Box",
        "Cleaner",
        "Movers & Truck",
        "Design Consult",
      ]);
      setFreeServiceCost([600, 800, 300, 300, 1000, 600]);
    }
  }, [sliderVal]);
  const handleCost = (array) => {
    return array.reduce((a, b) => a + b, 0);
  };
  return (
    <div className="packageContent">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="packContent">
            <div className="headingTitle">
              How much could you save in Buying with MYTOWNHOME?
            </div>
            <div className="priceSlider">
              <div className="SelectValue">
                Slide to select your home’s value
                <span>
                  $ {numberWithCommas(sliderVal)}
                  {/* {$sliderVal} */}
                </span>
              </div>

              <div className="SlidePanle">
                <RSlider
                  setValue={setValue}
                  min={min}
                  max={max}
                  start={start}
                />

                <div className="inputSlide"></div>
              </div>

              <div className="SavedPrice">
                Your Cash Back *
                <a href="#" className="saveBtn">
                  $ {Total(sliderVal)}
                  {/* $24,862 */}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="freeServices">
            <div className="headindBox">
              <div className="leftT">Free Services</div>
              <div className="RightT">
                YOU GET <span>${handleCost(freeServiceCost)}</span> of Free
                Services
              </div>
            </div>

            <div className="getServices">
              <ul>
                <li>
                  <div
                    className={
                      freeService.includes("Inspections")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon1.png" />
                    <span>$600</span>
                    Inspections
                  </div>
                </li>
                <li>
                  <div
                    className={
                      freeService.includes("Legal Close")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon2.png" />
                    <span>$800</span>Legal Close
                  </div>
                </li>
                <li>
                  <div
                    className={
                      freeService.includes("Moving Box")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon3.png" />
                    <span>$300</span>Moving Box
                  </div>
                </li>
                <li>
                  <div
                    className={
                      freeService.includes("Cleaner")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon4.png" />
                    <span>$300</span>
                    Cleaner
                  </div>
                </li>
                <li>
                  <div
                    className={
                      freeService.includes("Movers & Truck")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon5.png" />
                    <span>$500</span>
                    Movers & Truck
                  </div>
                </li>
                <li>
                  <div
                    className={
                      freeService.includes("Design Consult")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon6.png" />
                    <span>$600</span>
                    Design Consult
                  </div>
                </li>
              </ul>
            </div>

            <div className="freeContentBox">
              At MYTOWNHOME we not only give you cashback for you to use as you
              please, but we also save you money by covering the costs of your
              new move! <span>Check out our Buyer Packages Now!</span>
              <Link href="/buying-a-townhome">
                <a href="#">Go to Packages</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Seller() {
  const min = 400000;
  const max = 3000000;
  const start = 500000;
  const [sliderVal, setSliderVal] = useState(start);
  const [commission, setCommission] = useState(2);
  const [freeService, setFreeService] = useState([]);
  const [freeServiceCost, setFreeServiceCost] = useState([]);
  const setValue = (value) => {
    setSliderVal(value);
  };

  console.log("seller slider", sliderVal);
  console.log("seller commision", commission);
  console.log("seller free service", freeService);
  console.log("seller freecost", freeServiceCost);
  useEffect(() => {
    if (sliderVal < 700000) {
      debugger;
      if (commission == 0) {
        setFreeService([]);
        setFreeServiceCost([]);
      }
      if (commission == 1) {
        setFreeService(["Legal Close"]);
        setFreeServiceCost([800]);
      }
      if (commission == 1.5) {
        setFreeService(["Legal Close", "Moving Box", "Staging Consult"]);
        setFreeServiceCost([800, 300, 600]);
      }
      if (commission == 2) {
        setFreeService([
          "Legal Close",
          "Moving Box",
          "Staging Consult",
          "Cleaner",
        ]);
        setFreeServiceCost([800, 300, 600, 300]);
      }
    }

    if (sliderVal > 700000 && sliderVal < 1000000) {
      debugger;
      if (commission == 0) {
        setFreeService([]);
        setFreeServiceCost([]);
      }
      if (commission == 1) {
        setFreeService(["Moving Box", "Legal Close"]);
        setFreeServiceCost([800, 300]);
      }
      if (commission == 1.5) {
        setFreeService([
          "Legal Close",
          "Moving Box",
          "Staging Consult",
          "Cleaner",
        ]);
        setFreeServiceCost([800, 300, 600, 300]);
      }
      if (commission == 2) {
        setFreeService([
          "Legal Close",
          "Moving Box",
          "Staging Consult",
          "Cleaner",
          "Inspections",
        ]);
        setFreeServiceCost([800, 300, 600, 300, 600]);
      }
    }
    if (sliderVal > 1000000) {
      if (commission == 0) {
        setFreeService([]);
        setFreeServiceCost([]);
      }
      if (commission == 1) {
        setFreeService(["Moving Box", "Legal Close", "Cleaner"]);
        setFreeServiceCost([800, 300, 300]);
      }
      if (commission == 1.5) {
        setFreeService([
          "Legal Close",
          "Moving Box",
          "Staging Consult",
          "Cleaner",
          "Inspections",
        ]);
        setFreeServiceCost([800, 300, 600, 300, 600]);
      }
      if (commission == 2) {
        setFreeService([
          "Legal Close",
          "Moving Box",
          "Staging Consult",
          "Cleaner",
          "Inspections",
          "Movers & Truck",
        ]);
        setFreeServiceCost([800, 300, 600, 300, 600, 1000]);
      }
    }
  }, [sliderVal, commission]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  const Total = (num, comm) => {
    return numberWithCommas(num + (num / 100) * comm);
  };

  const setZeroCommission = () => {
    debugger;
    setCommission(0);
  };
  const setOneCommission = () => {
    debugger;
    setCommission(1);
  };
  const setOneHalfCommission = () => {
    debugger;
    setCommission(1.5);
  };
  const setTwoCommission = () => {
    debugger;
    setCommission(2);
  };
  // const handleService = (service, cost) => {
  //   if (freeService.includes(service)) {
  //     setFreeService(freeService.filter((item) => item !== service));
  //     setFreeServiceCost(freeServiceCost.filter((item) => item !== cost));
  //   } else {
  //     setFreeService((prevArray) => [...prevArray, service]);
  //     setFreeServiceCost((prevArray) => [...prevArray, cost]);
  //   }
  // };
  const handleCost = (array) => {
    return array.reduce((a, b) => a + b, 0);
  };
  return (
    <div className="packageContent">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="packContent">
            <div className="headingTitle">YOU HAVE OPTIONS WITH MYTOWHOME!</div>
            <div className="headingTitle"> Choose Your Commission Package</div>
            <div className="seller">
              <div
                class=" checkbox-theme form-check-inline"
                onClick={setZeroCommission}
              >
                <input
                  type="checkbox"
                  id="1"
                  value="option1"
                  checked={commission == 0}
                />
                <label class="form-check-label" for="inlineCheckbox1">
                  0 %
                </label>
              </div>
              <div
                class=" checkbox-theme form-check-inline"
                onClick={setOneCommission}
              >
                <input
                  type="checkbox"
                  id="2"
                  value="option2"
                  checked={commission == 1}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  1 %
                </label>
              </div>
              <div
                class=" checkbox-theme form-check-inline"
                onClick={setOneHalfCommission}
              >
                <input
                  type="checkbox"
                  id="3"
                  value="option2"
                  checked={commission == 1.5}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  1.5 %
                </label>
              </div>
              <div
                class=" checkbox-theme form-check-inline"
                onClick={setTwoCommission}
              >
                <input
                  type="checkbox"
                  id="4"
                  value="option2"
                  checked={commission == 2}
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  2 %
                </label>
              </div>
            </div>
            <div className="priceSlider">
              <div className="SelectValue">
                Slide to select your home’s value
                <span>
                  $ {numberWithCommas(sliderVal)}
                </span>
              </div>

              <div className="SlidePanle">
                <RSlider
                  setValue={setValue}
                  min={min}
                  max={max}
                  start={start}
                />

                <div className="inputSlide"></div>
              </div>

              <div className="SavedPrice">
                YOUR SELLING COST
                <a href="#" className="saveBtn">
                  $ {Total(sliderVal, commission)}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="freeServices">
            <div className="headindBox">
              <div className="leftT">Free Services</div>
              <div className="RightT">
                YOU GET <span>${handleCost(freeServiceCost)}</span> of Free
                Services
              </div>
            </div>

            <div className="getServices">
              <ul>
                <li>
                  <div
                    className={
                      freeService.includes("Inspections")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon1.png" />
                    <span>$600</span>
                    Inspections
                  </div>
                </li>
                <li>
                  <div
                    className={
                      freeService.includes("Legal Close")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon2.png" />
                    <span>$800</span>Legal Close
                  </div>
                </li>
                <li>
                  <div
                    className={
                      freeService.includes("Moving Box")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon3.png" />
                    <span>$300</span>Moving Box
                  </div>
                </li>
                <li>
                  <div
                    className={
                      freeService.includes("Cleaner")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon4.png" />
                    <span>$300</span>
                    Cleaner
                  </div>
                </li>
                <li>
                  <div
                    className={
                      freeService.includes("Movers & Truck")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon5.png" />
                    <span>$500</span>
                    Movers & Truck
                  </div>
                </li>
                <li>
                  <div
                    className={
                      freeService.includes("Staging Consult")
                        ? "serviceBx active"
                        : "serviceBx"
                    }
                  >
                    <img src="static/images/serviceIcon6.png" />
                    <span>$600</span>
                    Staging Consult
                  </div>
                </li>
              </ul>
            </div>

            <div className="freeContentBox">
              At Mytownnhome, as a seller YOU get to choose your own commission
              package based on your needs! Also, we save you money by covering
              the costs of your new move!{" "}
              <span> Check Out All Our Seller Packages Now!</span>
              <Link href="/selling-your-townhome">
                <a href="#">Go to Packages</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Packages() {
  const [activeService, setActiveService] = useState("buyer");
  const handleServiceChange = (e, service) => {
    e.preventDefault();
    setActiveService(service);
  };
  return (
    <PackagesItem>
      <div className="packageSection">
        <div className="TabulerBox">
          <div className="title">What’s In your Packages</div>
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                onClick={(e) => handleServiceChange(e, "buyer")}
                className={
                  activeService == "buyer" ? "nav-link active" : "nav-link "
                }
                id="pills-home-tab"
                data-toggle="pill"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Buyers
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={(e) => handleServiceChange(e, "seller")}
                className={
                  activeService == "seller" ? "nav-link active" : "nav-link "
                }
                id="pills-profile-tab"
                data-toggle="pill"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Sellers
              </a>
            </li>
          </ul>
        </div>

        <div className="tab-content" id="pills-tabContent">
          <div
            className={
              activeService == "buyer"
                ? "tab-pane fade active show"
                : "tab-pane fade"
            }
            id="Buyers"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <Buyer />
          </div>
          <div
            className={
              activeService == "seller"
                ? "tab-pane fade active show"
                : "tab-pane fade"
            }
            id="Sellers"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <Seller />
          </div>
        </div>
      </div>
    </PackagesItem>
  );
}

export default Packages;
