import React, {useState, useEffect}  from "react";
import image1 from "../precon-assets/stat-small-1.png";
import image2 from "../precon-assets/stat-small-2.png";
import image3 from "../precon-assets/stat-small-3.png";
import Loader from "react-loader-spinner";

const Region = (props) => {
    const { regionName, regionData, mainHeading, heading1,heading2, heading3, vipText, 
        registrations, commingSoonText, soldText, color ,selectedCity } = props;

    const [loading, setLoader] = useState(true);
    const [ dataList ,setDataList ] = useState(regionData)

    useEffect(() => {
        if(dataList && dataList.length > 0) {
            setLoader(false)
        }
    })

    useEffect(()=>{
        if(selectedCity && regionData){
            let filterList = [...regionData].filter((o)=>
                o.city === selectedCity.name
            )
            setDataList(filterList)
        }
    },[selectedCity])

    return (
        <>
            <div className="cityBox">
                <div className="regionsBox">
                    <div className={regionName === "Central" ? "markTitle central" : regionName === "West" ?
                    "markTitle West" : regionName === "East" ? "markTitle East" : regionName === "North" ?
                    "markTitle North" : ""}>
                        {regionName}
                    </div>
                    {loading === true ? <div className="loader-center"><Loader type="ThreeDots" color="#f89e37" /></div> : 
                     dataList.map((value) => {
                        return (
                            <>
                                <div className="cityNameTitle">
                                    <div className="cityName">
                                        {value.city}
                                    </div>
                                    <div className="totalProject"> 
                                        Total Project <span>{value.cityData && value.cityData.length}</span>
                                    </div>
                                </div>
                                <div className="cityDiscriptions">
                                    {value.city} is one of the GTA's largest suburbs and 
                                    therefore there is constant migration and growth, 
                                    demanding new home sales and inventory. 
                                </div>
                                <div className="cityStats">
                                    <div className="heading">
                                        {mainHeading}
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="statBox">
                                                <img src={image1} alt="image" />
                                                <div className="statTitle">
                                                    {heading1}
                                                    <span>$N/A</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="statBox">
                                                <img src={image2} alt="" />
                                                <div class="statTitle">
                                                    {heading2}
                                                    <span>N/A</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="statBox">
                                                <img src={image3} alt="image3" />
                                                <div class="statTitle">
                                                    {heading3}
                                                    <span>N/A</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="stagesProject">
                                    <ul>
                                        <li>
                                            <a href="#" className="purple">
                                                {vipText}<span>5</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="blue">
                                                {registrations}<span>5</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="skyblue">
                                                {commingSoonText}<span>5</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="pink">
                                                {soldText} <span>5</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Region;