import React from 'react';
import TodayIcon from '@material-ui/icons/Today';


const Work = () => {

    return(
        <div className="qualificationContent">
{/*----------------------QAULIFCATION 1----------------------*/}
<div className="data">
    <div>
    <h3 className="qTitle">
        Code Mentor
    </h3>
    <span className="qSubtitle">
        Canada Learning Code - Toronto, ON
    </span>
    <div className="calendar">
        <TodayIcon/>
        2021-Present
    </div>
    </div>

    <div>
        <span className="round"></span>
        <span className="line"></span>
    </div>
</div>
{/*----------------------QAULIFCATION 2----------------------*/}
<div className="data">
    <div></div>
    <div>
        <span className="round"></span>
        <span className="line"></span>
    </div>
    <div>
    <h3 className="qTitle">
        Client Relations Associate
    </h3>
    <span className="qSubtitle">
        Align Custom Fit - Mississauga, ON
    </span>
    <div className="calendar">
        <TodayIcon/>
        2020 - 2021
    </div>
    </div>
</div>
{/*----------------------QAULIFCATION 3----------------------*/}
<div className="data">

    <div>
    <h3 className="qTitle">
        Claims Adjustor
    </h3>
    <span className="qSubtitle">
        United Van Lines - Mississauga, ON
    </span>
    <div className="calendar">
        <TodayIcon/>
        2018 - 2019
    </div>
    </div>

    <div>
        <span className="round"></span>
    </div>
</div>

</div>     

    )
}

export default Work;


