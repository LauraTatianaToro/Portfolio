import React from 'react';
import TodayIcon from '@material-ui/icons/Today';

const Education = () => {

    return(
        <div className="qualificationContent">
        {/*----------------------QAULIFCATION 1----------------------*/}
        <div className="data">
            <div>
            <h3 className="qTitle">
                Hons. BSc., Computer Science
            </h3>
            <span className="qSubtitle">
                York University- Toronto, ON
            </span>
            <div className="calendar">
                <TodayIcon/>
                2018-2022
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
            </div>
            <div>
            <h3 className="qTitle">
                Executive Office Administration
            </h3>
            <span className="qSubtitle">
                Sheridan College - Brampton, ON
            </span>
            <div className="calendar">
                <TodayIcon/>
                2016-2017
            </div>
            </div>
        </div>
    
    </div>
    )
}

export default Education;
