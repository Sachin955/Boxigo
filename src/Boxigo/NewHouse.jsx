import React from 'react'

const NewHouse = () => {
    return (
        <div className="new-house">
            <div className="hr"></div>
            <div className="house">
                <div className="house-details">
                    <div className="house-item"><span className="heading">New House Details</span> </div>
                </div>
                <div className="house-details">
                    <div className="house-details-items">
                        <span className="heading">Floor No.</span>
                        <p>0</p>
                    </div>
                    <div className="house-details-items">
                        <span className="heading">Elevator Available</span>
                        <p>No</p>
                    </div>
                    <div className="house-details-items">
                        <span className="heading">Packing Required</span>
                        <p>Yes</p>
                    </div>
                    <div className="house-details-items">
                        <span className="heading">Distance from truck to door</span>
                        <p>1 meters</p>
                    </div>
                </div>

                <div className="house-details-items">
                    <span className="heading">Additional Information</span>
                    <p>No additional info</p>
                </div>
            </div>
        </div>
    )
}
export default NewHouse;