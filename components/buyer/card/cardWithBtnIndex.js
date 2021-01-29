import CardTitle from "./cardTitle";
import CardContent from "./cardContent";
import CradLinkBtn from "./cardLinkBtn";
import CardImg from "./cardImg";

const cardWithBtnIndex = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-header" id="headingOne">
          <CardTitle cardno={props.cardno} cardtitle={props.cardtitle} />
          <div className="stepsCheckListbtn">
            <div className="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                <CardImg imgsrc={props.imgsrc} />
                <div class="popUpsLinks mt-5">
                  <CradLinkBtn />
                  {/* <CradLinkBtn btnnametwo={props.btnnametwo} />
                  <CradLinkBtn btnnamethree={props.btnnamethree} />
                  <CradLinkBtn btnnamefour={props.btnnamefour} />
                  <CradLinkBtn btnnamefive={props.btnnamefive} />
                  <CradLinkBtn btnnamesix={props.btnnamesix} /> */}
                </div>
              </div>
              <CardContent
                paratitle={props.paratitle}
                para={props.para}
                para1={props.para1}
                bigbtn={props.bigbtn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardWithBtnIndex;
