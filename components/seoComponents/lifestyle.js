import styled from 'styled-components'
import {Title} from '../generic/GenericComponents'
import StructuralWrap from '../generic/structural/wrap'
import DoubleImage from './structural/doubleImage';
import SingleImage from './structural/singleImage'

export default ({ title, slug, lifestyle1, lifestyle1Title, lifestyle2, lifestyle2Title, lifestyle3, lifestyle3Title, image1, image2, image3}) => (
  <StructuralWrap backgroundColor="#f1f0f0">
    <Title>Lifestyle</Title>
    <ParagraphTitle>{lifestyle1Title}</ParagraphTitle>
    <Text>{lifestyle1}</Text>
    <SingleImage title={title} url={`https://mthc.s3.us-east-2.amazonaws.com/cities/${slug}/wide.jpg`}/>
    <ParagraphTitle>{lifestyle2Title}</ParagraphTitle>
    <Text>{lifestyle2}</Text>
    <DoubleImage 
      title={title}
      url1={`https://mthc.s3.us-east-2.amazonaws.com/cities/${slug}/square1.jpg`} 
      url2={`https://mthc.s3.us-east-2.amazonaws.com/cities/${slug}/square2.jpg`}/>
    <ParagraphTitle>{lifestyle3Title}</ParagraphTitle>
    <Text>{lifestyle3}</Text>
  </StructuralWrap>
)

const Text = styled.p`
  font-size: 14px;
  line-height: 23px;
  font-weight: 300;
  margin-bottom: 15px;
`;

const ParagraphTitle = styled.h3`
  color: black;
  font-size: 20px;
`;
