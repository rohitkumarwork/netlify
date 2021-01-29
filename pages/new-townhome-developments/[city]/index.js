import ClientLayout from '../../../layouts/clientLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ContentfulClient from '../../../lib/contentful'


import TripleStat from '../../../components/seoComponents/tripleStat'
import PreConGrid from '../../../components/seoComponents/preconGrid'
import TheatreSummary from '../../../components/seoComponents/theatreSummary'


export default function PreConLobby() {
  const slug = useRouter().query.city
  const [city, setCity] = useState({})

  useEffect(() => {
    if (slug) {
      ContentfulClient.getEntries({content_type: 'preConCity', 'fields.slug': slug}).then(entry => {
        setCity(entry.items[0].fields)
      })
    }
  }, [slug])

  return (
    <ClientLayout>
      <TheatreSummary slug={city.slug} city={city.title} para1={city.summary1} para2={city.summary2} />
      <TripleStat city={city}/>
      <PreConGrid city={city.title} projects={city.projects}/>
    </ClientLayout> 
  )
}

