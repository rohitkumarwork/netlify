import ClientLayout from '../../../layouts/clientLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ContentfulClient from '../../../lib/contentful'

import { withApollo } from '../../../lib/apollo'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
import TransitCompMap from '../../../components/generic/mapping/transitCompMap'


import {SubTitle, Wrap}  from '../../../components/generic/GenericComponents'
import PhotoPoints from '../../../components/seoComponents/PhotoPoints'
import Header from '../../../components/project-page/header'
import ProjectDetails from '../../../components/project-page/projectDetails'
import Highlights from '../../../components/project-page/highlights'

import {GET_NEARBY_DATA, GET_MAP_DATA, GET_SCHOOL_DATA} from '../../../components/generic/mapping/databaseCalls'

const PreconPage = () => {
  const [mapType, setMapType] = useState('ttc')
  const slug = useRouter().query.project
  const [project, setProject] = useState(null)

  useEffect(() => {
    if (slug) {
      ContentfulClient.getEntries({content_type: 'preConProject', 'fields.slug': slug}).then(entry => {
        setProject(entry.items[0].fields)
      })
    }
  }, [slug])

  const {data: nearbyData} = useQuery(GET_NEARBY_DATA, {
    skip: project == null,
    variables: {      
      viewportPolygon: {"type": "Point","coordinates": project ? [project.geoInfo.lat, project.geoInfo.lon] : null}
    }
  });

  const {data: pointData} = useQuery(GET_MAP_DATA, {
    skip: mapType == 'school',
    variables: {mapType: mapType}
  });

  const {data: schoolData} = useQuery(GET_SCHOOL_DATA, {
    skip: mapType != 'school',
    variables: {      
      viewportPolygon: {"type": "Point","coordinates": project ? [project.geoInfo.lat, project.geoInfo.lon] : null},
    }
  });

  return (
    <ClientLayout>
      {project &&
        <>
          <Header  project={project}/>
          <Highlights project={project}/>
          <Wrap>
            <SubTitle>Location & Comp's</SubTitle>
            {
              nearbyData &&
              <TransitCompMap 
                compsEnabled 
                latitude={project.geoInfo.lat} 
                longitude={project.geoInfo.lon} 
                address={project.projectName}
                mapType={mapType} 
                setMapType={setMapType} 
                nearbyData={nearbyData} 
                pointData={pointData} 
                schoolData={schoolData}
                />
            }
          </Wrap>
          <PhotoPoints project={project}/>

        </>
      }
    </ClientLayout>
  )
}

export default withApollo(PreconPage)