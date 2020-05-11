import React from 'react'

const Welcome = ({changeScreen}) => {
    return (
        <div className="wrapper">
            <div className="welcome-screen">
                <h1>Welcome!</h1>
                <p>Press the button to get started! </p>
                <button className="welcome-button" onClick={changeScreen}>Get Started</button>
            </div>
        </div>
    )
}

export default Welcome
