import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backSpeed: 60,
            backDelay: 1500,
            strings: ["Java", "MERN Stack", "Artist", "Team Player"]
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/metwo.png" alt="Photo of me, female. " />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Laura Toro</h1>
                    <h3>Software Developer | <span ref={textRef}></span></h3>

                    <div className="buttons">
                    <button type="button" className="button1 dark"><a href="#portfolio"><span>Portfolio</span></a></button>
                    <button type="button" className="button1 pink"><a href="#resume"><span>Resume</span></a></button>
                    </div>


                </div>

            </div>
        </div>
    )
}
