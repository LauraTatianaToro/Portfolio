import "./topbar.scss"
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> 
                    <span>&#60;</span> <FavoriteIcon/>
                     /<span>&#62;</span>
                    </a>



                    
                </div>
                <div className="right"> 
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}
