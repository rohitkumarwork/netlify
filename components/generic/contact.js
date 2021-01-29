import styled from 'styled-components'
import ContactFields from './contactFields'



const Wrap = styled.div`
  width: 100%;
  position: relative;
  background-color: #F2F5F7;
  text-align: center;
  padding-bottom: 50px;
  h2 {
    font-size: 50px;
    font-weight: 400;
    padding: 70px 0px;
  }
`;

const ContactForm = styled.div`
  width: 750px;
  margin: 0px auto;
  display: block;
  text-align: left;
`;

const Section = styled.div`
  width: 50%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
`;

const About = styled(Section)`
  h4, p {
    color: #0A2463
  }
  h4 {
    font-size: 21px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 35px;
  }
`;

const AddressPoint = styled.div`
  margin: 25px 0px;
  .bullet, .content {
    color: #A1AEB7;
    font-size: 16px;
    font-weight: 300;
  }
  .bullet {
    margin-right: 8px;
  }
`;





export default () => (
  <Wrap>
    <h2>Contact Us</h2>
    <ContactForm>
      <About>
        <h4>We'd love to hear from you</h4>
        <p>Give our specialists a shout and we'll reach out to <br/> you as soon as possible!</p>
        <AddressPoint> 
          <span className="bullet">•</span>
          <span className="content">29 Fraser Ave - Unit 1</span> 
        </AddressPoint>
        <AddressPoint> 
          <span className="bullet">•</span>
          <span className="content">(647) 999 4867</span> 
        </AddressPoint>
        <AddressPoint> 
          <span className="bullet">•</span>
          <span className="content">rocky@mytownhome.ca</span> 
        </AddressPoint>
      </About>
      <Section>
        <ContactFields />
      </Section>
    </ContactForm>
  </Wrap>
)

