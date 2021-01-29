import styled from 'styled-components'

export default ({url1, url2, title}) => {
  const Wrap = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    margin: 20px 0px;
  `;

  const ImageWrap = styled.div`
    width: 49%;
    display: inline-block;
    box-sizing: border-box;
    height: 500px;
    background-color: lightgrey;
    position: relative;
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
        <Image alt={`Image showing the lifestyle in this ${title}`} src={url1} />
      </ImageWrap>
      <ImageWrap>
        <Image alt={`Image showing the scenery of ${title}`} src={url2} />
      </ImageWrap>
    </Wrap>
  )

}
