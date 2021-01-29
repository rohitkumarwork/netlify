import { useState } from "react";
import DisplayPackage from "./displayPackage";
import GrayPackage from "./grayPackage";
import BuyerPackage from "./buyerPackage";

const packageSlider = () => {
  const [showMe, setShowMe] = useState(false);
  const [slidervalue, setSliderValue] = useState(1500000);

  const operation = () => {
    if (showMe === false) {
      setShowMe(true);
    }
  };
  const  numberWithCommas = (x) =>{
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <>
      <div className="card-body">
        <div className="innerblock">
          <div className="knowladgePanel">
            <div className="priceSlider">
              <div className="SelectValue">
                Slide to select your Budget value
                <span>${numberWithCommas(slidervalue)}</span>
              </div>
              <span style={{ float: "left" }}>$3,000</span>
              <span style={{ float: "right" }}>$3,000,000</span>
              <div className="SlidePanle">
                <div className="inputSlide">
                  <input
                    type="range"
                    className="form-slider"
                    id="vol"
                    name="vol"
                    min="3000"
                    max="3000000"
                    value={slidervalue}
                    onClick={() => operation()}
                    onChange={(e) => setSliderValue(e.target.value)}
                  />
                </div>
              </div>
              {showMe === true ? (
                <div class="packageSelect">
                  <div class="row">
                    {slidervalue <= 700000 ? (
                      <>
                        <DisplayPackage
                          packtype={"Appetizer"}
                          commision={"Home Less then $700k"}
                          cardcolor={"orange"}
                        />
                        <GrayPackage cardcolor={"orange"} />
                        <BuyerPackage />
                      </>
                    ) : null}

                    {slidervalue > 700001 && slidervalue <= 1000000 ? (
                      <>
                        <DisplayPackage
                          packtype={"Lunch Date"}
                          commision={"Home priced between $700k-$1M"}
                          cardcolor={"green"}
                        />
                        <GrayPackage cardcolor={"green"} />
                        <BuyerPackage />
                      </>
                    ) : null}

                    {slidervalue > 1000001 ? (
                      <>
                        <DisplayPackage
                          packtype={"Full Dinner"}
                          commision={"Home Above $1M"}
                          cardcolor={"blue"}
                        />
                        <GrayPackage cardcolor={"blue"} />
                        <BuyerPackage />
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default packageSlider;
