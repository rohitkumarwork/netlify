import styled from 'styled-components'
import {Wrap, SubTitle}  from '../../components/generic/GenericComponents'

import { faBed, faHome, faCity} from "@fortawesome/free-solid-svg-icons";
import { faClock} from "@fortawesome/free-regular-svg-icons";
import HighlightBox from '../generic/highlightBox'

const FlatTitle = styled(SubTitle)`
  margin-bottom: 5px;
`;
const BorderedWrap = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
`;


export default ({project}) =>  {
  return (
    <Wrap>
      <FlatTitle>Project Highlights</FlatTitle>
      <BorderedWrap>
        <HighlightBox  icon={faCity} text={'Style'}  subText={project.projectType ? `${project.projectType} Townhome` : 'TBA'}/>
        <HighlightBox  icon={faHome} text={'Types'} subText={project.townhomeType ? project.townhomeType.join(', ') : 'TBA'}  />
        <HighlightBox  icon={faBed} text={'Bedrooms'} subText={project.bedrooms ? project.bedrooms.join(', ') : 'TBA'}  />
        <HighlightBox  icon={faClock} text={'Completion'} subText={project.completionDate ? `${project.completionDate}` : 'TBA'}/>
      </BorderedWrap>
    </Wrap>
  )
}