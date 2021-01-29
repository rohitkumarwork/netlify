import tick from "../../../static/images/tick.png";

const orangePackage = () => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div className="packagesBoxs">
          <div className="packageType orange">
            <div className="title">Package 1</div>
            <div className="packTypeHead">"Appetizer"</div>
            <div className="packCommision">Home priced below $1M</div>
          </div>
          <div className="packagesBenifits ">
            <div className="packagesName active">
            <span style={{ textAlign: "left" }}>
              % of Purchase Price      
              <span className="yellowText">Cash for you</span>
            </span>
              <div className="tooltip">
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                <span className="tooltiptext">
                  Save extra 1.25% of Purchase Price.
                </span>
              </div><img src={tick} alt="tick" />
            </div>
            <div className="packagesName active">
            <span style={{ textAlign: "left" }}>Free Home Inspection
            <span className="yellowText">You Saved $600</span>
            </span>
              <div className="tooltip">
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                <span className="tooltiptext">
                  Home inspection is a examination of all areas, systems, and
                  components of a property using advanced tools. In other words,
                  It is a complete health & safety check-up of real estate
                  properties includes walls, ceiling, floor, doors, windows,
                  electrical, plumbing, damp, seepage, and moisture
                </span>
              </div>
            <img src={tick} alt="tick" />
            </div>
            <div className="packagesName active">
              <span style={{textAlign: "left"}}>Free Legal Closing <span className="yellowText">You Saved $800</span>
              </span>
              <div className="tooltip">
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                <span className="tooltiptext">
                  Home inspection is a examination of all areas, systems, and
                  components of a property using advanced tools. In other words,
                  It is a complete health & safety check-up of real estate
                  properties includes walls, ceiling, floor, doors, windows,
                  electrical, plumbing, damp, seepage, and moisture
                </span>
              </div>
              <img src={tick} alt="tick" />
            </div>  
            <div className="packagesName">
              Free Moving Boxes 
              {/* <img src={tick} alt="tick" /> */}
            </div>
            <div className="packagesName">
              Free Professional Cleaner 
              {/* <img src={tick} alt="tick" /> */}
            </div>
            <div className="packagesName">
              Free Professional Movers and Truck 
              {/* <img src={tick} alt="tick" /> */}
            </div>
            <div className="packagesName">
              Free Interior Design Consult 
              {/* <img src={tick} alt="tick" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default orangePackage;
