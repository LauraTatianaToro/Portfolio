import { useState } from "react";
import "./resume.scss";
import Education from './Education';
import Work from './Work';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

export default function Resume() {

    const [active, setActive] = useState("Education");

    return (
        <div className="resume" id="resume">
            <h2>My Qualifications</h2>

            <div className="container">
                <div className="tabs">
                    <div className="button" onClick={() => setActive("Education")}>
                        <SchoolIcon/>
                        <span>Education</span>
                    </div>

                    <div className="button" onClick={() => setActive("Work")}>
                        <WorkIcon/> 
                        <span>Experience</span>
                    </div>
                </div>

                    <div className="qSection">
                        {active === "Education" && <Education/>}
                        {active === "Work" && <Work />}
                    </div>
        </div>
        </div>
    )
}
