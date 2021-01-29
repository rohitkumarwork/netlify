import styled from 'styled-components'

export default ({image1, image2}) => {
  const Wrap = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    margin-bottom: 20px;
  `;

  const ImageWrap = styled.div`
    width: 32%;
    display: inline-block;
    box-sizing: border-box;
    height: 320px;
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
        <Image  alt="Image showing the lifestyle in this city" src="https://www.seetorontonow.com/wp-content/uploads/2017/12/cn-tower-dusk.jpg" />
      </ImageWrap>
      <ImageWrap>
        <Image  alt="Image showing the lifestyle in this city" src="https://s3-media4.fl.yelpcdn.com/bphoto/uJLZKTnPQiQ_cSyCx0bqtw/o.jpg" />
      </ImageWrap>
      <ImageWrap>
        <Image alt="Image showing the lifestyle in this city"  src="https://s3-media4.fl.yelpcdn.com/bphoto/uJLZKTnPQiQ_cSyCx0bqtw/o.jpg" />
      </ImageWrap>
    </Wrap>
  )

}
