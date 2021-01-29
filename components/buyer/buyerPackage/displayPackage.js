const displayPackage = (props) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div className="selectedPackInfo p-l-r-30">
          {props.cardcolor === "orange" ? (
            <div className="packageType orange">
              {/* <div className="title">Package under Your Budget</div> */}
              <div className="packTypeHead">{props.packtype}</div>
              <div className="packCommision">{props.commision}</div>
            </div>
          ) : props.cardcolor === "green" ? (
            <div className="packageType green">
              {/* <div className="title">Package under Your Budget</div> */}
              <div className="packTypeHead">{props.packtype}</div>
              <div className="packCommision">{props.commision}</div>
            </div>
          ) : props.cardcolor === "blue" ? (
            <div className="packageType blue">
              {/* <div className="title">Package under Your Budget</div> */}
              <div className="packTypeHead">{props.packtype}</div>
              <div className="packCommision">{props.commision}</div>
            </div>
          ) : null}

          <div style={{ textAlign: "left" }} className="headingPanal">
            <h3>This Is the Best Package in your Budget</h3>
            <p>
              Why stick to just one option? We offer you a variety of packages
              that you can pick and choose from to tailor your home buying
              experience to your exact preference!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default displayPackage;
