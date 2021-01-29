//ui and styling
import styled from "styled-components";
import Stepper from "react-stepper-horizontal";
import { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import Geocode from "react-geocode";
import { GoogleMapsAPI } from "../../static/config";
import HomeWorthMap from "./HomeWorthMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faHome } from "@fortawesome/free-solid-svg-icons";
Geocode.setApiKey(GoogleMapsAPI);
Geocode.enableDebug();

const ConfirmationWrap = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 30%;
  left: 50%;
  width: 100%;
  max-width: 700px;
  margin-top: -9em;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 12px 0 47px 0 rgb(0 0 0 / 37%);
  border-radius: 10px;
  .modalContent {
    padding: 50px;
    font-size: 18px;
    text-align: center;
  }
`;

const AppointmentModalWrap = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  margin-top: -9em;
  background-color: #fff;
  box-shadow: 3px 0 71px 0 rgb(0 0 0 / 45%);
  border-radius: 10px;
  max-width: 1000px;
  z-index: 10511;
`;

const ModalHeader = styled.div`
  padding: 0 10px;
  text-align: center;
`;

const CloseModalbtn = styled.span`
  color: #f89e37;
  cursor: pointer;
  float: right;
  font-size: 30px;
  margin: 0;
`;

const ModalHeaderH3 = styled.h3`
  color: #f89e37;
  margin: 0;
  padding: 0;
  font-size: 24px;
  position: relative;
  top: -20px;
  background: #fff;
  display: inline-block;
  padding: 9px 20px;
  box-shadow: 0px 0px 15px 0px #d5d5dd85;
  border-radius: 31px;
`;

const ModalFooter = styled.div`
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SubButton = styled.button`
  margin-top: 10px;
  background: #f89e37;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  padding: 5px;
  align: center;
  width: 100%;
  height: 45px;
  box-shadow: 0px 0px 15px 0px #f89e376e;
  margin: 5px;
`;
const SubButton2 = styled.button`
  margin-top: 10px;
  background: #f89e37;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  padding: 5px;
  align: center;
  width: 40%;
  height: 45px;
  box-shadow: 0px 0px 15px 0px #f89e376e;
  margin: 5px;
`;

const HomeWorth = ({ setIsOpen, address }) => {
  const TimeOption = [
    { label: "ASAP", value: "ASAP" },
    { label: "1-3 Months", value: "1-3 Months" },
    { label: "3-6 Months", value: "3-6 Months" },
    { label: "6-12 Months", value: "6-12 Months" },
    { label: "12+ Months", value: "12+ Months" },
    { label: "Not Planning to sell", value: "Not Planning to sell" },
  ];
  const ConditionOption = [
    { label: "Needs Nothing", value: "Needs Nothing" },
    { label: "Needs little Work", value: "Needs little Work" },
    { label: "Needs Significant Work", value: "Needs Significant Work" },
    { label: "Tear Down", value: "Tear Down" },
  ];
  const TypeOption = [
    { label: "Single Family Home", value: "Single Family Home" },
    { label: "Condominium", value: "Condominium" },
    { label: "Townhouse", value: "Townhouse" },
    { label: "Multi-Family", value: "Multi-Family" },
    { label: "Other", value: "Other" },
  ];
  const AgentOption = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [time, setTime] = useState("");
  const [condition, setCondition] = useState("");
  const [type, setType] = useState("");
  const [agent, setAgent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
      },
      (error) => {
      }
    );
  }, []);
  const handleClick = (active) => {
    setCurrentStep(active);
  };
  const timeChange = (event) => {
    setTime(event[0].value);
  };
  const conditionChange = (event) => {
    setCondition(event[0].value);
  };
  const typeChange = (event) => {
    setType(event[0].value);
  };
  const agentChange = (event) => {
    setAgent(event[0].value);
  };
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    }
  };
  const handleConfirm = () => {
    setConfirm(true);
  };
  return (
    <React.Fragment>
      {!confirm && (
        <AppointmentModalWrap>
          <div style={{ display: "inline-block", margin: 10 }}>
            <ModalHeader>
              <CloseModalbtn onClick={() => setIsOpen(false)}>×</CloseModalbtn>
              <ModalHeaderH3>Know Your Home Worth</ModalHeaderH3>
            </ModalHeader>
            <React.Fragment>
              <div class="modalContent">
                <div class="leftSectionKnow">
                  <FontAwesomeIcon
                    icon={faMapMarker}
                    style={{ color: "orange", fontSize: 25 }}
                  />
                  {latitude && longitude && (
                    <span
                      style={{ fontSize: 24, fontWeight: 500, marginLeft: 10 }}
                    >
                      Property Found
                    </span>
                  )}
                  {!latitude && !longitude && (
                    <span
                      style={{ fontSize: 25, fontWeight: 700, marginLeft: 15 }}
                    >
                      No Property Found
                    </span>
                  )}
                  <div class="homeworthMap">
                    {latitude && longitude && (
                      <React.Fragment>
                        <HomeWorthMap
                          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                          center={{ lat: latitude, lng: longitude }}
                          height="480px"
                          width="430px"
                          zoom={20}
                        />
                        <div class="propertyName">{address}</div>
                      </React.Fragment>
                    )}
                    {!latitude && !longitude && <div>NO property found</div>}
                  </div>
                </div>

                <div class="rightSectionKnow">
                  <div class="heading">
                    <FontAwesomeIcon
                      icon={faHome}
                      style={{ color: "orange", fontSize: 25 }}
                    />
                    <span
                      style={{ fontSize: 24, fontWeight: 700, marginLeft: 15 }}
                    >
                      Home Estimate
                    </span>
                  </div>
                  <div class="stepper">
                    <Stepper
                      steps={[
                        { title: "Address" },
                        { title: "Property Info" },
                        { title: "Estimate" },
                      ]}
                      style={{ fontWight: "700" }}
                      activeColor="orange"
                      completeColor="orange"
                      activeStep={currentStep}
                    />
                  </div>
                  {currentStep == 1 && (
                    <React.Fragment>
                      {" "}
                      <div class="propHeading">
                        How Soon are you looking to sell?
                      </div>
                      <Select
                        style={{ padding: "6px", marginBottom: "7px" }}
                        placeholder="How Soon are you looking to sell"
                        options={TimeOption}
                        onChange={(values) => timeChange(values)}
                        values={TimeOption.filter((opt) => opt.value === time)}
                      />
                      <div class="propHeading">What is condition of home?</div>
                      <Select
                        style={{ padding: "6px", marginBottom: "7px" }}
                        placeholder="What is condition of home"
                        options={ConditionOption}
                        onChange={(values) => conditionChange(values)}
                        values={ConditionOption.filter(
                          (opt) => opt.value === condition
                        )}
                      />
                      <div class="propHeading">
                        What type of Property is this?
                      </div>
                      <Select
                        style={{ padding: "6px", marginBottom: "7px" }}
                        placeholder="What type of Property is this"
                        options={TypeOption}
                        onChange={(values) => typeChange(values)}
                        values={TypeOption.filter((opt) => opt.value === type)}
                      />
                      <div class="propHeading">Are you working with Agent?</div>
                      <Select
                        style={{ padding: "6px", marginBottom: "7px" }}
                        placeholder="Are you working with Agent"
                        options={AgentOption}
                        onChange={(values) => agentChange(values)}
                        values={AgentOption.filter(
                          (opt) => opt.value === agent
                        )}
                      />
                      <SubButton onClick={() => handleClick(2)}>
                        Continue
                      </SubButton>
                    </React.Fragment>
                  )}
                  {currentStep == 2 && (
                    <React.Fragment>
                      <div>Where should we send estimate ?</div>
                      <div class="propHeading">Name</div>
                      <input
                        class="field"
                        name="name"
                        value={name}
                        onChange={(e) => handleChange(e)}
                      />
                      <div class="propHeading">Email</div>
                      <input
                        class="field"
                        name="email"
                        value={email}
                        onChange={(e) => handleChange(e)}
                      />
                      <div class="propHeading">Contact Number</div>
                      <input
                        class="field"
                        name="phone"
                        value={phone}
                        onChange={(e) => handleChange(e)}
                      />
                      <div class="formContent">
                        By submitting this form, you are providing express
                        consent to receive commercial electronic messages from
                        www.mytownhome.ca. You may unsubscribe at any time.{" "}
                      </div>
                      <div class="popactionBtn">
                        <SubButton
                          style={{ background: "#737373", boxShadow: "none" }}
                          onClick={() => handleClick(1)}
                        >
                          Back
                        </SubButton>
                        <SubButton onClick={handleConfirm}>
                          Confirm Valuation
                        </SubButton>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </React.Fragment>
            <ModalFooter></ModalFooter>
          </div>
        </AppointmentModalWrap>
      )}

      {confirm && name && (
        <ConfirmationWrap>
          <ModalHeader>
            <CloseModalbtn onClick={() => setIsOpen(false)}>×</CloseModalbtn>
            <ModalHeaderH3>Hi {name} !</ModalHeaderH3>
          </ModalHeader>
          <div class="modalContent">
            Thanks for submitting your information, our team is already hard at
            work, processing your details. A local property expert will reach
            out to walk you through the process and collect any additional
            information needed to narrow your home valuation. Once you have a
            home estimate, we will go over your options should you be in the
            market to sell your property. If you need immediate assistance, tap
            on the button below to connect with a local property expert.
          </div>
          <div style={{ marginLeft: 5, marginRight: 5, paddingBottom: 10 }}>
            <SubButton2 style={{ float: "left" }}>Call Now</SubButton2>
            <SubButton2 style={{ float: "right" }}>Email Now</SubButton2>
          </div>
        </ConfirmationWrap>
      )}
    </React.Fragment>
  );
};

export default HomeWorth;
