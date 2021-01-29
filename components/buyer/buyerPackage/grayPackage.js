import tick from "../../../static/images/tick.png";

const grayPackage = (props) => {
  return (
    <>
      {props.cardcolor === "orange" ? (
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="packagesBenifits p-l-r-50">
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
            <div className="packagesName ">
              Free Moving Boxes <img src={tick} alt="tick" />
            </div>
            <div className="packagesName ">
              Free Professional Cleaner <img src={tick} alt="tick" />
            </div>
            <div className="packagesName ">
              Free Professional Movers and Truck <img src={tick} alt="tick" />
            </div>
            <div className="packagesName ">
              Free Interior Design Consult <img src={tick} alt="tick" />
            </div>
          </div>
        </div>
      ) : props.cardcolor === "green" ? (
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="packagesBenifits p-l-r-50">
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
            <div className="packagesName ">
              Free Professional Movers/Truck <img src={tick} alt="tick" />
            </div>
            <div className="packagesName ">
              Free Interior Design Consult <img src={tick} alt="tick" />
            </div>
          </div>
        </div>
      ) : props.cardcolor === "blue" ? (
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className="packagesBenifits p-l-r-50">
            <div className="packagesName active">
              <span style={{ textAlign: "left" }}>
                {" "}
                % of Purchase Price{" "}
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
            <div className="packagesName active">
              <span style={{ textAlign: "left" }}>
                Free Professional Movers/Truck
                <span className="yellowText">You Saved $500</span>
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
                Free Interior Design Consult
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
          </div>
        </div>
      ) : null}
    </>
  );
};

export default grayPackage;
