const buyerHeroText = (props) => {
  return (
    <div>
      <div className="topContent">
        <div className="container">
          <div className="headings">
            <div className="smallContent">{props.title}</div>
            <h1>{props.subtitle}</h1>
            <p>{props.paratext}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default buyerHeroText;
