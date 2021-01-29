import FirstModel from "../buyerModel/firstModel";
import CardWithBtnIndex from "./cardWithBtnIndex";

const buyerBtnCard = (props) => {
  return (
    <div className="stepsBoxPanel">
      <div className="container">
        <div className="stepsPanel">
          <div id="accordion">
            <CardWithBtnIndex
              cardno={props.cardno}
              cardtitle={props.cardtitle}
              imgsrc={props.imgsrc}
              paratitle={props.paratitle}
              para={props.para}
              para1={props.para1}
              btnnameone={props.btnnameone}
              btnnametwo={props.btnnametwo}
              btnnamethree={props.btnnamethree}
              btnnamefour={props.btnnamefour}
              btnnamefive={props.btnnamefive}
              btnnamesix={props.btnnamesix}
              bigbtn={props.bigbtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default buyerBtnCard;
