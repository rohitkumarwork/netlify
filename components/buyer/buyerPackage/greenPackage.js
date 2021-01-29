import tick from "../../../static/images/tick.png";

const greenPackage = () => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div className="packagesBoxs">
          <div className="packageType green">
            <div className="title">Package 2</div>
            <div className="packTypeHead">"Lunch Date"</div>
            <div className="packCommision">Home priced between $700K-$1M</div>
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
              </div>
              <img src={tick} alt="tick" />
            </div>

            <div className="packagesName active">
              <span style={{ textAlign: "left" }}>
                Free Home Inspection
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
              <span style={{ textAlign: "left" }}>
                Free Legal Closing
                <span className="yellowText">You Saved $800</span>
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
              <span style={{ textAlign: "left" }}>
                Free Moving Boxes
                <span className="yellowText">You Saved $300</span>
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
              <span style={{ textAlign: "left" }}>
                Free Professional Cleaner
                <span className="yellowText">You Saved $300</span>
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
            <div className="packagesName ">
              Free Professional Movers and Truck <img src={tick} alt="tick" />
            </div>
            <div className="packagesName ">
              Free Interior Design Consult <img src={tick} alt="tick" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default greenPackage;
