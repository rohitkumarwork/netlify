import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  background-size: cover;
`;


const MainTitle = styled.h1`
  text-align: center;
  font-size: 67px;
  line-height: 69px;
  color: rgb(35, 35, 35);
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;
  max-width: 1060px;
`;

export default ({title}) => (
  <Wrap>
    <MainTitle>{title}</MainTitle>
  </Wrap>    
)


