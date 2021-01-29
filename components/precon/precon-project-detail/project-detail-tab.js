import React from "react";

const ProjectDetailTab = ({activeKey, handleKeyChange}) => {
    return (
        <div className={ activeKey=="ProjectDetails" ? "tab-pane fade show active" : "tab-pane fade " } id="ProjectDetails" role="tabpanel" aria-labelledby="contact-tab" onClick={(e)=> handleKeyChange(e, "ProjectDetails")}>
            <div className="innerContentzone">
                <div className="peraContent">
                    <div className="title"> Discriptions </div>
                    <div className="subtitle"> Paradise Developments is going to offer Brampton homebuyers MORE choice, MORE value, MORE locations, and MORE features than ever before. </div>
                    <div className="subtitle"> Purchaser attendees will be asked to bring photo identification, bank pre-approval, and checkbook for deposit.One purchase per registrant. Registrants' name must be the same name on the Offer To Purchase. </div>
                </div>
                <div className="peraContent">
                    <div className="title"> Additional Informations </div>
                    <div className="subtitle"> Mount Pleasant North is a New Condo development by Consulate Development Group located at Camilla Rd & N Service Rd, Mississauga. </div>
                    <div className="subtitle"> Top 5 Reasons to Live at Mount Pleasant North </div>
                    <div className="additionsInfo">
                        <div className="addInfo"> <span>1. Highway Access –</span> Mount Pleasant North are located adjacent to the Queen Elizabeth Way, which offers easy connections for motorists to Lakeshore Road and the Gardiner Expressway. Commuters can travel into downtown Toronto in just 24 minutes. Hurontario Street is located around the corner and leads directly to Highway 403 and 401, allowing for seamless travel throughout the GTA. </div>
                        <div className="addInfo"> <span>2. Highway Access –</span> Mount Pleasant North are located adjacent to the Queen Elizabeth Way, which offers easy connections for motorists to Lakeshore Road and the Gardiner Expressway. Commuters can travel into downtown Toronto in just 24 minutes. Hurontario Street is located around the corner and leads directly to Highway 403 and 401, allowing for seamless travel throughout the GTA. </div>
                        <div className="addInfo"> <span>3. Highway Access –</span> Mount Pleasant North are located adjacent to the Queen Elizabeth Way, which offers easy connections for motorists to Lakeshore Road and the Gardiner Expressway. Commuters can travel into downtown Toronto in just 24 minutes. Hurontario Street is located around the corner and leads directly to Highway 403 and 401, allowing for seamless travel throughout the GTA. </div>
                        <div className="addInfo"> <span>4. Highway Access –</span> Mount Pleasant North are located adjacent to the Queen Elizabeth Way, which offers easy connections for motorists to Lakeshore Road and the Gardiner Expressway. Commuters can travel into downtown Toronto in just 24 minutes. Hurontario Street is located around the corner and leads directly to Highway 403 and 401, allowing for seamless travel throughout the GTA. </div>
                        <div className="addInfo"> <span>5. Highway Access –</span> Mount Pleasant North are located adjacent to the Queen Elizabeth Way, which offers easy connections for motorists to Lakeshore Road and the Gardiner Expressway. Commuters can travel into downtown Toronto in just 24 minutes. Hurontario Street is located around the corner and leads directly to Highway 403 and 401, allowing for seamless travel throughout the GTA. </div>
                    </div>
                </div>
                <div className="peraContent">
                    <div className="title"> Features & Finishes </div>
                    <div className="subtitleHeading"> CONTEMPORARY EXTERIORS </div>
                    <div className="exteriorList">
                        <ul>
                            <li> Dark Brick combined with light architectural block, precast sills, ledges and modern panel and trim system, elevations as per plan* </li>
                            <li> Energy efficient windows with screens on all operating windows </li>
                            <li> Vinyl thermo pane sliding balcony doors* </li>
                            <li> Pre-finished metal flashing, soffits and fascia </li>
                            <li> Insulated exterior front door </li>
                            <li> Exterior front door entry package which includes outside fixture, door Chime, grip set and deadbolt </li>
                            <li> Poured concrete front porches including precast front steps where applicable </li>
                            <li> Modern glass and aluminum frame railings on balconies and rooftop patios </li>
                            <li> Professionally designed perennial landscaping to front yards, courtyards and common areas </li>
                            <li> Exterior landscape lighting providing neighborhood ambiance and increased visibility </li>
                            <li> •Gas barbecue connection on rooftop terrace </li>
                            <li> Resident underground parking access via overhead garage door operated by a personal remote control </li>
                            <li> Exterior and interior bicycle parking </li>
                        </ul>
                    </div>
                    <div className="subtitleHeading"> ELEGANT INTERIORS </div>
                    <div className="exteriorList">
                        <ul>
                            <li> Dark Brick combined with light architectural block, precast sills, ledges and modern panel and trim system, elevations as per plan* </li>
                            <li> Energy efficient windows with screens on all operating windows </li>
                            <li> Vinyl thermo pane sliding balcony doors* </li>
                            <li> Pre-finished metal flashing, soffits and fascia </li>
                            <li> Insulated exterior front door </li>
                            <li> Exterior front door entry package which includes outside fixture, door Chime, grip set and deadbolt </li>
                        </ul>
                    </div>
                    <div className="subtitleHeading"> DESIGNER FLOORING </div>
                    <div className="exteriorList">
                        <ul>
                            <li> Dark Brick combined with light architectural block, precast sills, ledges and modern panel and trim system, elevations as per plan* </li>
                            <li> Energy efficient windows with screens on all operating windows </li>
                            <li> Vinyl thermo pane sliding balcony doors* </li>
                            <li> Pre-finished metal flashing, soffits and fascia </li>
                            <li> Insulated exterior front door </li>
                            <li> Exterior front door entry package which includes outside fixture, door Chime, grip set and deadbolt </li>
                        </ul>
                    </div>
                    <div className="subtitleHeading"> GOURMET KITCHEN FEATURES </div>
                    <div className="exteriorList">
                        <ul>
                            <li> Dark Brick combined with light architectural block, precast sills, ledges and modern panel and trim system, elevations as per plan* </li>
                            <li> Energy efficient windows with screens on all operating windows </li>
                            <li> Vinyl thermo pane sliding balcony doors* </li>
                            <li> Pre-finished metal flashing, soffits and fascia </li>
                            <li> Insulated exterior front door </li>
                            <li> Exterior front door entry package which includes outside fixture, door Chime, grip set and deadbolt </li>
                        </ul>
                    </div>
                    <div className="subtitleHeading"> LUXURIOUS BATHROOM FEATURES </div>
                    <div className="exteriorList">
                        <ul>
                            <li> Dark Brick combined with light architectural block, precast sills, ledges and modern panel and trim system, elevations as per plan* </li>
                            <li> Energy efficient windows with screens on all operating windows </li>
                            <li> Vinyl thermo pane sliding balcony doors* </li>
                            <li> Pre-finished metal flashing, soffits and fascia </li>
                            <li> Insulated exterior front door </li>
                            <li> Exterior front door entry package which includes outside fixture, door Chime, grip set and deadbolt </li>
                        </ul>
                    </div>
                    <div className="subtitleHeading"> PAINTING </div>
                    <div className="exteriorList">
                        <ul>
                            <li> Dark Brick combined with light architectural block, precast sills, ledges and modern panel and trim system, elevations as per plan* </li>
                            <li> Energy efficient windows with screens on all operating windows </li>
                            <li> Vinyl thermo pane sliding balcony doors* </li>
                            <li> Pre-finished metal flashing, soffits and fascia </li>
                            <li> Insulated exterior front door </li>
                            <li> Exterior front door entry package which includes outside fixture, door Chime, grip set and deadbolt </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailTab;