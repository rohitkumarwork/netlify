import React from "react";
import image18 from "./precon-assets/cta1.png";
import image19 from "./precon-assets/cta2.png";
import image20 from "./precon-assets/cta3.png";

function CTAForm() {
  return (
    <div className="CTAForm">
      <div className="CTAFormHeading">Lets Connect</div>
      <div className="CTAFormOptions">
        <div className="CTAFormLabelHeading">
          Book Appointment at Salon Center
        </div>
        <div className="CTAFormActionBox">
          <div className="CTAFormActionBoxAvailabity">See Availability</div>
        </div>
      </div>
      <div className="CTAFormOptions">
        <div className="CTAFormLabelHeading">Have a Question Now?</div>
        <div className="CTAFormActionBox">
          <ul>
            <li>
              <a href="#">
                <img className="CTAFormActionBoxImage" src={image18} />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="CTAFormActionBoxImage" src={image19} />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="CTAFormActionBoxImage" src={image20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="CTAFormOptions">
        <div className="CTAFormLabelHeading">Let’s get back to you!</div>
        <div className="CTAFormActionBox">
          <div className="CTAFormActionBoxForm">
            <div className="CTAFormActionBoxInputForm">
              <div className="CTAFormActionBoxLabel">Name</div>
              <div className="CTAFormActionBoxInputField">
                <input className="CTAFormActionBoxFormControl" />
              </div>
            </div>
            <div className="CTAFormActionBoxInputForm">
              <div className="CTAFormActionBoxLabel">Email</div>
              <div className="CTAFormActionBoxInputField">
                <input className="CTAFormActionBoxFormControl" />
              </div>
            </div>
            <div className="CTAFormActionBoxInputForm">
              <div className="CTAFormActionBoxLabel">Contact Number</div>
              <div className="CTAFormActionBoxInputField">
                <input className="CTAFormActionBoxFormControl" />
              </div>
            </div>
            <div className="InputCheckbox">
              <div className="CheckboxTheme">
                <input type="checkbox" />
                <label>Register me for this project & Send me updates</label>
              </div>
              <div className="CheckboxTheme">
                <input type="checkbox" />
                <label>Im an investor & Send me the analysis</label>
              </div>
              <div className="CheckboxTheme">
                <input type="checkbox" />
                <label>I want VIP Access</label>
              </div>
              <div className="CheckboxTheme">
                <input type="checkbox" />
                <label>All the above</label>
              </div>
            </div>
          </div>
          <div className="CTASubmitButton">Submit Request</div>
        </div>
      </div>
    </div>
  );
}

export default CTAForm;
