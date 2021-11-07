import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { javaPortfolio,
         webPortfolio,
         cPortfolio } from "../../data";   

export default function Portfolio() {
    const[selector, setSelector] = useState("mobile");
    const[data, setData] = useState([]);
    const list = [
        {
            id: "java",
            title: "Java Projects",
        },
        {
            id: "web",
            title: "Web Projects",
        },
        {
            id: "C",
            title: "C Projects"
        },
    ];
    
    useEffect(()=>{

        switch(selector){
            case "java":
                setData(javaPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "C":
                setData(cPortfolio);
                break;
            default:
                setData(webPortfolio);
        }

    }, [selector])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio </h1>
            <ul>
            {list.map(item=>(
                <PortfolioList 
                title={item.title} 
                active={selector === item.id } 
                setSelected={setSelector}
                id={item.id}/>
            ))}
            </ul>
            
                 <div className="container">
                {data.map(d=>(
                <a href={d.link}><div className="item">
                <img src={d.img} alt=""/>
                    <h3>{d.title}</h3>
                </div> </a>
                 ))}
            </div>
            
        </div>
    )
}
