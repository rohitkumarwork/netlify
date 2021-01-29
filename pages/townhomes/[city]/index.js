// import styled from 'styled-components'
import { useRouter } from 'next/router'
import ClientLayout from '../../../layouts/clientLayout'

import Header from '../../../components/seoComponents/header'
import Summary from '../../../components/seoComponents/summary'
import Statistics from '../../../components/seoComponents/statistics'

import LifeStyle from '../../../components/seoComponents/lifestyle'

import { useEffect, useState } from 'react'
import ContentfulClient from '../../../lib/contentful'


export default function City() {
  const slug = useRouter().query.city
  const [city, setCity] = useState({})

  useEffect(() => {
    if (slug) {
      ContentfulClient.getEntries({content_type: 'city', 'fields.slug': slug}).then(entry => {
        setCity(entry.items[0].fields)
      })
    }
  }, [slug])

  return (
    <ClientLayout>
      <Header title={(city.title || '') + ' Townhomes'} />
      <Summary city={city.title} para1={city.summary1} para2={city.summary2} stat1={city.summaryPricing} stat2={city.summaryLifestyle} stat3={city.summaryCommute} stat4={city.summaryPerfectFor} />
      <Statistics para1={city.market1} para2={city.market2} yearPercent={city.yearPercent} threeYearPercent={city.threeYearPercent}/>
      <LifeStyle
        title={city.title}
        slug={city.slug}
        lifestyle1={city.lifestyle1}
        lifestyle1Title={city.lifestyle1Title}
        lifestyle2={city.lifestyle2}
        lifestyle2Title={city.lifestyle2Title}
        lifestyle3={city.lifestyle3}
        lifestyle3Title={city.lifestyle3Title}/>
    </ClientLayout>
  )
}


