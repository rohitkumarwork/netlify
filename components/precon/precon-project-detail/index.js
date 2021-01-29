import React, { useState, useEffect } from "react";
import Header from "../PreconProjectHeader";
import CTAForm from "../CTAForm";
import Nearby from "../PerconNearbyProjects";
//Compoenents
import SearchLayout from "../../../layouts/searchLayout.js";
import Tabs from "./tabs";
import KeyFacts from "./key-facts";
import PriceListingTab from "./pricing-listing-tab";
import { useRouter } from 'next/router'
import CompareableTabs from "./comparable-tab";
import ProjectDetailTab from "./project-detail-tab";
import StatisticTab from "./statistics-tab";

function PreConProject() {
  const [activeKey, setActiveKey] = useState("keyfact");
  const router = useRouter();

  const handleKeyChange = (e, key) => {
    e.preventDefault();
    setActiveKey(key);
  };

  const data = router.query.data && JSON.parse(router.query.data);

  return (
    <SearchLayout>
    {data ?
    <>
	    <Header data={data} />
        <div className="LeftSideboxTabular">
            <div className="tabulerBox">
                <div className="container-fluid">
                    <div className="tabulerContent">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="tabulerStep">
                                    <Tabs handleKeyChange={handleKeyChange} activeKey={activeKey} />
                                    <div className="tab-content" id="myTabContent">
                                        <KeyFacts activeKey={activeKey} handleKeyChange={handleKeyChange} data={data} />
                                        <PriceListingTab activeKey={activeKey} handleKeyChange={handleKeyChange} data={data} />
                                        <CompareableTabs activeKey={activeKey} handleKeyChange={handleKeyChange} data={data} />
                                        <ProjectDetailTab activeKey={activeKey} handleKeyChange={handleKeyChange} data={data} />
                                        <StatisticTab activeKey={activeKey} handleKeyChange={handleKeyChange} data={data} /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    : null}
	    <div className="RightSideboxTabular">
		    <CTAForm /> 
        </div>
	    <Nearby /> 
    </SearchLayout>
  );
}

export default PreConProject;
