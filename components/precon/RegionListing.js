import React, {useState, useEffect} from "react";
//core
import Link from "next/link";
//images
import Projectpic1 from "./precon-assets/projectPic1.jpg";
import Loader from "react-loader-spinner";

const RegionListing = ({data ,selectedCity}) => {
  const [loading,setLoading] = useState(true);
  const [dataList ,setDataList ] =useState(data)
  useEffect(() => {
    if(data && data.length > 0) {
      setLoading(false)
    } 
  })
  useEffect(()=>{
    if(selectedCity && data){
      let filterList = [...data].filter((o)=>
                o.city === selectedCity.name
            )
            setDataList(filterList)
    }
  },[selectedCity])

  console.log("data.......",data)

  return (
    <div className="cityProjectList">
      <div className="apheading">
        All Project
      </div>

    {loading === true ? <div className="loader-center"><Loader type="ThreeDots" color="#f89e37" /></div> :
    <>
      {dataList.map((value) => value.cityData.map((value) => {
        return (
          <div className="projectDis">
            <div className="projectPic" style={{background:`url(${Projectpic1})`}}></div>
            <div className="headingTitle">
              <div className="projectName">
                {value.Community}
              </div>
              <div className="stageName">
                Comming Soon
              </div>
            </div>
            <div className="projectArea">
              {value.Address}
            </div>
            <div className="projectFeature">
              <ul>
                <li>
                  <span>2 + 1 Bed Room</span>
                </li>
                <li>
                  <span>2 Bath Room</span>
                </li>
                <li>
                  <span>1 Garage</span>
                </li>
              </ul>
            </div>
            <div className="projectPrice">
              $ {value.Starting_From_Price}
              {/* ${value.Max_Price} */}
            </div>
          </div>
        )}))}
      </>
    }
    </div>
  )
}

export default RegionListing;