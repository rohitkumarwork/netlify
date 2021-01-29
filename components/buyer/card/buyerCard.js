import CardIndex from "./cardIndex";

const buyerCard = (props) => {
  return (
    <div className="stepsBoxPanel">
      <div className="container">
        <div className="stepsPanel">
          <div id="accordion">
            <CardIndex
              cardno={props.cardno}
              cardtitle={props.cardtitle}
              imgsrc={props.imgsrc}
              paratitle={props.paratitle}
              para={props.para}
              bigbtn={props.bigbtn}
              buttonName={props.buttonName}
              para1={props.para1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default buyerCard;
