import React from "react";

const Tabs = ({handleKeyChange, activeKey}) => {
    return (
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" >
                <a className={ activeKey == "keyfact" ? "nav-link active" : "nav-link " } onClick={(e) => handleKeyChange(e, "keyfact")} id="home-tab" data-toggle="tab" href="#keyfact" role="tab" aria-controls="home" aria-selected="true"><span>Key Facts</span></a>
            </li>
            <li className="nav-item">
                <a className={ activeKey == "Floor" ? "nav-link active" : "nav-link " } id="profile-tab" onClick={(e) => handleKeyChange(e, "Floor")} data-toggle="tab" href="#Floor" role="tab" aria-controls="profile" aria-selected="false"><span>Floor Plans & Pricing List</span></a>
            </li>
            <li className="nav-item">
                <a className={ activeKey == "Comparables" ? "nav-link active" : "nav-link " } onClick={(e) => handleKeyChange(e, "Comparables")} id="contact-tab" data-toggle="tab" href="#Comparables" role="tab" aria-controls="contact" aria-selected="false"><span>Comparables</span></a>
            </li>
            <li className="nav-item">
                <a className={ activeKey == "ProjectDetails" ? "nav-link active" : "nav-link " } id="contact-tab" onClick={(e) => handleKeyChange(e, "ProjectDetails")} data-toggle="tab" href="#ProjectDetails" role="tab" aria-controls="contact" aria-selected="false"><span>Project Details</span></a>
            </li>
            <li className="nav-item">
                <a className={ activeKey == "Statitistics" ? "nav-link active" : "nav-link " } onClick={(e) => handleKeyChange(e, "Statitistics")} id="contact-tab" data-toggle="tab" href="#Statitistics" role="tab" aria-controls="contact" aria-selected="false"><span>Statitistics / Numbers</span></a>
            </li>
        </ul>
    )
}

export default Tabs;