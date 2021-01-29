const contactForm = () => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <div className="form">
          <div className="topHead">
            <div className="title">Contact Us</div>
            <div className="subTitle">
              Send us a message below, call us at 416-274-2068 or text
              416-568-0427
            </div>
          </div>
          <div className="input-form">
            <div className="label">Name</div>
            <div className="input-field">
              <input type="" name="" className="form-control" />
            </div>
          </div>
          <div className="input-form">
            <div className="label">Email</div>
            <div className="input-field">
              <input type="" name="" className="form-control" />
            </div>
          </div>
          <div className="input-form">
            <div className="label">Contact Number</div>
            <div className="input-field">
              <input type="" name="" className="form-control" />
            </div>
          </div>
          <div className="input-form">
            <div className="label">Contact Number</div>
            <div className="input-field">
              <textarea
                rows="5"
                type=""
                name=""
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="input-form">
            <input
              type=""
              name=""
              className="btn orageBtn"
              value="Submit Request"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default contactForm;
