import React, { Component } from 'react'
import RoomType from "./room-type";
import "./rooms-style.css"

class Rooms extends Component {
    constructor(props) {
        super(props)
        this.state = [
            {
                name: "Living Room",
                body: "Living room body"
            },
            {
                name: "Bed Room",
                body: "Bed room body"
            },
            {
                name: "Kitchen Room",
                body: "Kitchen room body"
            },
            {
                name: "Bathroom",
                body: "Bathroom room body"
            },
        ]
    }
    render() {
        const roomInfo = this.state.map((items) => {
            return <RoomType roomName={items.name}>
                {items.body}
            </RoomType>
        })
        return (
            <div className="rooms">
                    {roomInfo}
            </div>
        )
    }
}

export default Rooms;