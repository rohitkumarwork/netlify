// components
import Meta from '../components/meta'

// styling and tools
import styled from 'styled-components'

// components
import Header from '../components/header'

const HeaderSpacer = styled.div`
  width: 100%;
  height: 62px;
`;

export default function SearchLayout(props) {
  return (
    <div>
      <Meta/>
      <Header staticHeader={true}/>
      <HeaderSpacer/>
      {props.children}
    </div>

  )
}