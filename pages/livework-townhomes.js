import ClientLayout from '../layouts/clientLayout.js';
import TheatreSummary from '../components/seoComponents/theatreSummary'

import CallToAction from '../components/generic/CTA'
// This is here to maintain old well ranking urls.
export default () => {
  return (
    <ClientLayout>
      <TheatreSummary 
        city="A Live/Work Townhome" 
        para1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s" 
        para2=" with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publi" 
        url="https://mthc.s3.us-east-2.amazonaws.com/townhometypes/livework.jpg"/>
      
      <CallToAction buttonText="Find your dream Live/Work townhome today!" url="/search-townhomes" />
      
    </ClientLayout>
  )
}
