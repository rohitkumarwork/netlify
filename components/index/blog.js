import styled from 'styled-components'
import {Wrap } from '../generic/GenericComponents'
import Link from 'next/link';

const BlogPost = styled.div`
  cursor: pointer;
  width: 32%;
  float: left;
    position: relative;
    box-shadow: 0px 0px 15px 0px #d5d5d552;
    background: #ffff;
  h3 {
    width: 100%;
    float: left;
    position: relative;
    font-size: 24px;
    font-weight: 600;
    padding:20px 20px 0px 20px;
    box-sizing: border-box;
    min-height:78px;
  }
  p {
    width: 100%;
    float: left;
    position: relative;
    font-size: 16px;
    min-height: 80px;
    box-sizing: border-box;
    padding:20px;
  }
  @media(min-width:320px) and (max-width:480px){
    width:100%;
    margin-bottom:20px;
  
  }
`;

const BlogImage = styled.div`
  background-image: ${props => `url(${props.imageUrl})`};
  height: 300px;
  width: 100%;
  background-position: center;
  background-size: cover;
`;
const BtmAction = styled.div`
  width: 100%;
  float: left;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  box-sizing: border-box;
  padding:20px;
`;
const Div = styled.div`
  width: 100%;
  float: left;
  box-sizing: border-box;
  
  &.readMore{
    text-align:right;
    a{
      color: #363636;
      text-decoration:none;
    }
  }

`;

function Post({title, summary, thumbnail, slug}) {
  return (
      <Link href={`/blog/${slug}`}>
        <BlogPost>
          <BlogImage imageUrl={thumbnail}/>
          <h3>{title}</h3>
          <p>{summary}</p>
          <BtmAction>
                <Div className="date">
                    May 15, 2020
                </Div>
                <Div className="readMore text-right">
                    <a href="#" >Read more</a>
                </Div>
            </BtmAction>
        </BlogPost>
      </Link>
  )
}

const WraperBox = styled.div`
  width: 100%;
  float: left;
  position: relative;
  box-sizing: border-box;
  padding:50px;
  background: #fbfbfb;
  @media(min-width:320px) and (max-width:480px){
    padding:20px;
  
  }
`;
const MainTitle = styled.div`
  width: 100%;
  float: left;
  position: relative;
  margin-bottom: 30px;
  box-sizing: border-box;
`;

const HeadTitle = styled.div`
  font-size: 42px;
  font-weight: 600;
  width: 100%;
  float: left;
  position: relative;
  padding:25px;
  box-sizing: border-box;
  &:before {
    position: absolute;
    content: "";
    width: 10px;
    height: 60px;
    background: #f89e37;
    left: 0;
 }
 @media(min-width:320px) and (max-width:480px){
  font-size: 24px;

}
`;

const SubTitle = styled.div`
  width: 100%;
  float: left;
  position: relative;
  max-width: 727px;
  box-sizing: border-box;
`;

const BlogWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0px;
  justify-content: space-between;
  @media(min-width:320px) and (max-width:480px){
    flex-direction:column;
  
  }

`;
export default ({blogs}) => {

  return (
    <div>
    <Wrap>
      <WraperBox>
      <MainTitle>
        <HeadTitle>The Townhome Blog</HeadTitle>
        <SubTitle>We are the specialists! We pride ourselves on knowing every single aspect of buying a townhome in the GTA!</SubTitle>
      </MainTitle>
      
      <BlogWrap>
        {blogs.map((blog)=> {
         return <Post title={blog.fields.title} slug={blog.fields.slug}  summary={blog.fields.summaryField} thumbnail={blog.fields.thumbnail.fields.file.url} />
        })}
      </BlogWrap>
      </WraperBox>
    </Wrap>
    </div>

  )
}
