import styled from 'styled-components'

const StructuralWrap = (props) => {
  const Wrap = styled.div`
    width: 100%;
    margin: ${props.backgroundColor ? '40px auto 20px' : "20px auto"};
    padding:  ${props.backgroundColor ? '25px 0px 25px' : "0px"};
    background-color: ${props.backgroundColor ? props.backgroundColor : "none"};
  `;

  const CenterBox = styled.div`
    width: 1100px;
    margin: 0px auto;
  `;

  return (
    <Wrap>
      <CenterBox>
        {props.children}
      </CenterBox>
    </Wrap>
  )

}

export default StructuralWrap;