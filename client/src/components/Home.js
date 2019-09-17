import React from 'react'
import rightArrow from '../images/circled-right-2.png'
import logo from '../images/MYtineraryLogo.png'
import homeIcon from '../images/homeIcon.png'
import '../style/home.css'
import '../style/main.css'

const Home = () => {
    return (
        <div className="viewport">
            <div className="mainContainer">
                <img src={logo} alt="" className="logoImg" />
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
                <img src={homeIcon} alt="" className="homeIcon" />
            </div>
        </div>
    )
}

export default Home