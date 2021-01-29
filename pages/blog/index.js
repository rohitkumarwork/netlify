import styled from 'styled-components'
import { useEffect, useState } from 'react'
import ContentfulClient from '../../lib/contentful'

import ClientLayout from '../../layouts/clientLayout.js';
import Header from '../../components/seoComponents/header'
import GridContainer from '../../components/generic/grids/gridContainer'
import GridItem from '../../components/generic/grids/gridItem'

const ImageWrap = styled.div`
  position: relative;
  vertical-align: top;
  height: 220px;
  overflow: hidden;
`;

const BlogThumb = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;  
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
`;

const Shadow = styled.div`
  box-shadow: inset 0px -70px 50px -40px black;
  z-index: 2;
`;

const BlogName = styled.p`
  width: 100%;
  font-size: 22px;
  max-width: 290px;
  font-weight: 500;
  color: black;
  margin: 10px auto;
`;


const BlogDescription = styled.p`
  width: 100%;
  font-size: 12px;
  font-weight: 300;
  color: black;
  margin: 0px auto 15px;
  max-width: 320px;
`;

export default () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    ContentfulClient.getEntries({content_type: 'blogPost'}).then(posts => {
      setBlogs(posts.items)
    })
  }, [])
  
  return (
    <ClientLayout>
      <Header title={'Townhomes Blog'} />
      <GridContainer whiteBackground={true} >
        { blogs.map((blog) => {
            return (
              <GridItem url={'/blog/' + blog.fields.slug}>
                <ImageWrap>
                  {blog.fields.thumbnail &&
                    <BlogThumb src={blog.fields.thumbnail.fields.file.url}/>
                  }
                  <Shadow/>
                </ImageWrap>
                <BlogName>{blog.fields.title}</BlogName>
                <BlogDescription>{blog.fields.summaryField}</BlogDescription>
              </GridItem>
            )
          })
        }
      </GridContainer>
    </ClientLayout>
  )

}


