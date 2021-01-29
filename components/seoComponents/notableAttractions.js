import styled from 'styled-components'
import {Title} from '../generic/GenericComponents'

import StructuralWrap from './structural/wrap'
import TripleImage from './structural/tripleImage';

export default ({title}) => (
  <StructuralWrap backgroundColor="#f1f0f0">
    <Title>Notable Attractions</Title>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat semper ex ut pellentesque. Fusce eu tincidunt tellus. Sed volutpat velit eget ultrices tempus. Integer eget porttitor eros. Fusce pretium neque tincidunt nulla consectetur, at lacinia nisl iaculis. Fusce vel sem nulla. Vestibulum elementum sapien efficitur tellus gravida vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac aliquet justo, sed mollis nisi. Donec egestas dignissim facilisis. Donec consequat augue nisi, suscipit pretium purus molestie sit amet. Maecenas viverra nunc id nunc fermentum egestas.</Text>
    <TripleImage/>
    <Text> Integer eget porttitor eros. Fusce pretium neque tincidunt nulla consectetur, at lacinia nisl iaculis. Fusce vel sem nulla. Vestibulum elementum sapien efficitur tellus gravida vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac aliquet justo, sed mollis nisi. Donec egestas dignissim facilisis. Donec consequat augue nisi, suscipit pretium purus molestie sit amet. Maecenas viverra nunc id nunc fermentum egestas.</Text>
  </StructuralWrap>
)


const Text = styled.p`
  font-size: 14px;
  line-height: 23px;
  font-weight: 300;
  margin-bottom: 15px;
`;