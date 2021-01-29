import { useState } from "react";
import Steps from "../buyerSteps/steps";
import BuyerFaq from "../buyerFaq/buyerFaq";
import PackageSlider from "../buyerPackage/packageSlider";
import SixModel  from '../buyerModel/sixModel';

const cardContent = (props) => {
  const [showMe, setState] = useState(false);

  const operation = () => {
    if (showMe === true) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="offerContent">
          <h3>{props.paratitle}</h3>
          <p>{props.para} {props.para1 && <b className="bold-para"><br/>{props.para1}</b> }</p>
          
          {props.bigbtn === 1 &&
          <div className='buyer-card-first'>
          <SixModel/>
          <div
            className="normalLink why-choose-mytown-link"
            onClick={() => operation(props.bigbtn)}
            style={{marginTop:5 ,width:'267px' ,pointer:'cursor'}}
          >
            WHY CHOOSE MYTOWNHOME
          </div>
           
          </div>
         }
          {props.bigbtn === 3 &&<button
            className="btn btn-orange"
            onClick={() => operation(props.bigbtn)}
          >
              {props.buttonName}
          </button>}
        </div>
      </div>

      {showMe === true && props.bigbtn === 1 ? (
        <Steps />
      ) : (showMe === false || true) && props.bigbtn === 2 ? (
        <PackageSlider />
      ) : showMe === true && props.bigbtn === 3 ? (
        <BuyerFaq />
      ) : null}
    </>
  );
};

export default cardContent;
