import React from 'react'

const Rooms = () => {
    return (
        <div className="rooms">
            <div className="rooms">
                <div className="room-type">
                    <div className="room-name">Living Room</div>
                    <div className="dropdown-arrow"><i className="fas fa-angle-up"></i></div>
                </div>
                <div className="room-type">
                    <div className="room-name">Bed Room</div>
                    <div className="dropdown-arrow"><i className="fas fa-angle-up"></i></div>
                </div>
                <div className="room-type">
                    <div className="room-name">Kitchen</div>
                    <div className="dropdown-arrow"><i className="fas fa-angle-up"></i></div>
                </div>
                <div className="room-type">
                    <div className="room-name">Bathroom</div>
                    <div className="dropdown-arrow"><i className="fas fa-angle-up"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Rooms;