import instagram from '../assets/Instagram-Icon.png'
import linkedin from '../assets/Linkedin-Icon.png'
import github from '../assets/GitHub-Icon.png'

export default function Footer(){
    return (
        <div className='footer-section'>
            <img className='footer--sitelink' src={instagram} onClick={() => window.open('https://instagram.com/emilytmcintyre?igshid=YmMyMTA2M2Y=','_blank')}></img>
            <img className='footer--sitelink' src={linkedin} onClick={() => window.open('https://www.linkedin.com/in/emilytaintor/','_blank')}></img>
            <img className='footer--sitelink' src={github} onClick={() => window.open('https://github.com/emilytm','_blank')}></img>
        </div>
    )
}