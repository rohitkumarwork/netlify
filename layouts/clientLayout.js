// components
import Meta from '../components/meta'

// styling and tools
import styled from 'styled-components'

// components
import Header from '../components/header'
import Footer from '../components/footer'

import GAWrapper from '../lib/GAWrapper'

const MainWrap = styled.div`
  width: 100%;
  margin: 0px auto;
  position: relative;
`;

const HeaderSpace = styled.div`
  width: 100%;
  // height: 174px;
`;

export default function ClientLayout(props) {

  return (
    <GAWrapper>
      <MainWrap>
        <Meta/>
        <HeaderSpace/>
        <Header/>
          {props.children}
        <Footer/>
      </MainWrap>
    </GAWrapper>
  )
}


