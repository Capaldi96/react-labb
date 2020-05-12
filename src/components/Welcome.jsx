import React from 'react'

const Welcome = ({changeScreen}) => {
    return (
        <div className="wrapper">
            <div className="welcome-screen">
                <h1>Welcome!</h1>
                <p>See characters you want?</p>
                <p>Click button you must!</p>
                <button className="welcome-button" onClick={changeScreen}>Character list</button>
            </div>
        </div>
    )
}

export default Welcome
