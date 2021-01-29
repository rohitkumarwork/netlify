import styled from 'styled-components'

export default ({url}) => {
  const Wrap = styled.div`
    width: 100%;
    margin: 20px 0px;
  `;

  const ImageWrap = styled.div`
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    height: 400px;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  `;

  const Image = styled.img`
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;

  `;

  return (
    <Wrap>
      <ImageWrap>
        <Image alt="Image showing the lifestyle in this city" src={url} />
      </ImageWrap>
    </Wrap>
  )

}
