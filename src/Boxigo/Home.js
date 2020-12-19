import React from "react"
import Header from "./Header"
import Location from "./Location"
import HomeContent from "./HomeContent"
import Disclaimer from "./Disclaimer"
import Inventory from "./Inventory"
import Rooms from "./Rooms"
import House from "./House"
import NewHouse from "./NewHouse"



import "./style.css"

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="main-wrapper">
                    <Header/>   
                    <div className="main-content">
                        <Location />
                        <HomeContent />
                        <Disclaimer />
                        <div>
                            <Inventory />
                            <Rooms />
                            <House />
                            <NewHouse />
                            
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default Home;