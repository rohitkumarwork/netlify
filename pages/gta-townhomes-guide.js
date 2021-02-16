import ClientLayout from '../layouts/clientLayout.js';
import Header from '../components/seoComponents/header'
import Summary from '../components/seoComponents/summary'
import CitiesGrid from '../components/seoComponents/citiesGrid'
import Guidepanel from '../components/guide/guide'

export default () => {
  return (
    <ClientLayout className="layoutBox">
      {/* <Header title={'TOWNHOME GUIDE'} /> */}


      <Guidepanel/>

      <Summary 
        city={'the GTA'} 
        para1={"Looking for a townhome in the GTA? We have you covered in every city and neighbourhood! Our experts have grabbed all the data you'd want to know before moving anywhere in the GTA"} 
        para2={"We grab four crticial points for every city & neighbourhood to let you easily go around and find a place you'll love to live in!"} 
        stat1={"The average price of townhomes and rental rates. Price range within the last 30-60 days."} 
        stat2={"What you can expect living in this city/neighbourhood with your family. Does it fit your lifestyle?"}
        stat3={"How easy is it to get around? Whats available for drivers & commuters?"}
        stat4={"Who is this city/neighbourhood perfect for? Would this be a culture you see yourself in?"}
      />
      <CitiesGrid/>

    </ClientLayout>
  )
}
