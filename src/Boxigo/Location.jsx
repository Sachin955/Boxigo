import React from 'react'

const Location = () => {
    return (
        <div className="Location">
            <div>
                <p className="heading">MY MOVES</p>
            </div>
            <div className="location">
                <div className="location-items">
                    <p className="heading">From</p>
                    <p>Ejapura,Bengluru,Karnataka</p>
                </div>
                <div className="location-items">
                    <div>
                        <i className="icon far fa-arrow-alt-circle-right"></i>
                    </div>
                </div>
                <div className="location-items">
                    <div>
                        <p className="heading">To</p>
                        <p>HSR Layout,Bengluru,Karnataka</p>
                    </div>
                </div>
                <div className="location-items">
                    <div>
                        <p className="heading">Request</p>
                        <p className="text-color">E21418</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Location;