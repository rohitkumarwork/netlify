import FirstModel from "../buyerModel/firstModel";
import SecondModel from "../buyerModel/secondModel";
import ThirdModel from "../buyerModel/thirdModel";
import FourthModel from "../buyerModel/fourthModel";
import FifthModel from "../buyerModel/fifthModel";
import SixModel from "../buyerModel/sixModel";
import SeventhModal from '../buyerModel/seventhModal';

const cardLinkBtn = (props) => {
  return (
    <>
      <FirstModel />
      <SecondModel />
      <ThirdModel />
      <FourthModel />
      <FifthModel />
      {/* <SixModel /> */}
      <SeventhModal/>
    </>
  );
};

export default cardLinkBtn;
