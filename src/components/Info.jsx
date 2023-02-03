import profilePicture from '../assets/headshot_square.jpg'
export default function Info(){
    return (

        <div className="info">
            <img className="info--image" src={profilePicture}></img>
            <h1 className="info--name">Emily Taintor McIntyre</h1>
            <h2 className="info--title">Frontend Developer</h2>
            <div className="info--buttons">
                <button className="info--buttons--email">Email</button>
                <button className="info--buttons--linkedin">LinkedIn</button>
            </div>
        </div>

    )
}