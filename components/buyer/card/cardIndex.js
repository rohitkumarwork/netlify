import CardTitle from "./cardTitle";
import CardContent from "./cardContent";
import CardImg from "./cardImg";

const cardIndex = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-header" id="headingOne">
          <CardTitle cardno={props.cardno} cardtitle={props.cardtitle} />
          <div className="stepsCheckListbtn">
            <div className="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <CardImg imgsrc={props.imgsrc} />
              </div>
              <CardContent
                paratitle={props.paratitle}
                para={props.para}
                para1={props.para1}
                bigbtn={props.bigbtn}
                buttonName={props.buttonName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardIndex;
