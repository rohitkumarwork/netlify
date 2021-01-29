const cardTitle = (props) => {
  return (
    <div class="title">
      <span>{props.cardno}</span>
      {props.cardtitle}
    </div>
  );
};

export default cardTitle;
