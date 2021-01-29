const faq = (props) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div className="faqQues">
          <div className="title">{props.question}</div>
          <div className="content">{props.answer}</div>
        </div>
      </div>
    </>
  );
};

export default faq;
