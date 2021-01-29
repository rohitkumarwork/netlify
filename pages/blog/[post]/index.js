import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ContentfulClient from '../../../lib/contentful'

import ClientLayout from '../../../layouts/clientLayout'
import StructuralWrap from '../../../components/generic/structural/wrap'

import Header from '../../../components/seoComponents/header'

const BlogWrap = styled.div`
  width: 80%;
  margin: 0px auto;
`;


const PageTitle = styled.h1`
  margin: 10px 0px;
`;
const ContentHeading = styled.h2`
  font-size: 25px;
  margin: 5px 0px;
`;
const ContentHeading2 = styled.h3`
  /* font-size: 25px; */
`;
const ContentHeading3 = styled.h4`
  /* font-size: 25px; */
`;
const ContentHeading4 = styled.h5`
  /* font-size: 25px; */
`;
const Paragraph = styled.p`
  margin: 10px 0px 25px;
  padding: 0px 5px;
  line-height: 23px;
`;

const HyperLink = styled.a`
  display: inline-block;
`;

const Image = styled.img`

`;

export default function PreCon() {
  const slug = useRouter().query.post
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    if (slug) {
      ContentfulClient.getEntries({content_type: 'blogPost', 'fields.slug': slug}).then(entry => {
        setBlog(entry.items[0].fields)
      })
    }
  }, [slug])


  if (blog) return (
    <ClientLayout>
        <Header title={blog.title} />
      <BlogWrap>
        {blog.content.content.map(contentSection => {        
        if (contentSection.nodeType === 'heading-1') {
          return <ContentHeading>{contentSection.content[0].value}</ContentHeading>
        }
        if (contentSection.nodeType === 'heading-2') {
          return <ContentHeading2>{contentSection.content[0].value}</ContentHeading2>
        }
        if (contentSection.nodeType === 'heading-3') {
          return <ContentHeading3>{contentSection.content[0].value}</ContentHeading3>
        }
        if (contentSection.nodeType === 'heading-4') {
          return <ContentHeading4>{contentSection.content[0].value}</ContentHeading4>
        }

        if (contentSection.nodeType === 'paragraph') {
          return <Paragraph>
            {contentSection.content.map((paraContentSection) => {
              if (paraContentSection.nodeType === 'text') 
                return paraContentSection.value
              
              if (paraContentSection.nodeType === "hyperlink") 
                return <HyperLink href={paraContentSection.data.uri} >{paraContentSection.content[0].value}</HyperLink>
            })}

          </Paragraph>
        }

        if (contentSection.nodeType === 'embedded-asset-block') {
          return <Image src={contentSection.data.target.fields.file.url}/>
        }



      })}
      </BlogWrap>

    </ClientLayout>
  )
  return (
    <div></div>
  )
}
