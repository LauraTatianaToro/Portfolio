import "./contact.scss"
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

export default function Contact() {
    return (
        <div className="contact" id="connect">


<h1>Connect with me!</h1>

            <div className="socialContainer">



            <a href="https://www.instagram.com/lauratoro.art/?hl=en"><div className="socialElement">
                    
            <InstagramIcon className="socialImg"/>
                    
                </div></a>

                <a href="https://github.com/LauraTatianaToro"><div className="socialElement">
                    
            <GitHubIcon className="socialImg"/>
                    
                </div></a>

                <a href="https://www.linkedin.com/in/torolaura/"><div className="socialElement">
            <LinkedInIcon className="socialImg"/>
                </div></a>

                <a href="mailto:lttoro20@gmail.com"><div className="socialElement">
            <MailIcon className="socialImg"/>
                </div></a>

            </div>           
        </div>
    )
}
