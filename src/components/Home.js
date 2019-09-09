import React from 'rgit eact'
import rightArrow from '../images/circled-right-2.png'
import '../style/home.css'
const Home = () => {
    return (
        <div className="container">
            <p>
                Find your perfect trip, designed by insiders who know and love their cities
            </p>
            <div className="startBrowsingWrapper">
                <p className="bold">Start Browsing</p>
                <img src={rightArrow} className="mediumIcon" alt="" />
            </div>
            <div className="byoIniteraryWrapper">
                <p>Want to build your own MYtinereary</p>
                <br />
            </div>
            <div className="rowJustifyBetween">
                <a href="/login">Login</a>
                <a href="/signup">Create Account</a>
            </div>
        </div>
    )
}

export default Home