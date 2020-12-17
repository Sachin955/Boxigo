import React,{Component} from 'react'

class HomeContent extends Component {
    constructor(){
        super()
        
    }
    clickHandler = () => {

    }
    render() {
        return (
            <div className="HomeContent">
                <div className="home-content">
                    <div className="home">
                        <div className="home-items">
                            <i className="icon icon-color fas fa-home"></i>1 BHK
                            </div>
                        <div className="home-items">
                            <i className="icon icon-color fab fa-adversal"></i>32
                            </div>
                        <div className="home-items">
                            <i className="icon icon-color fas fa-ruler-vertical"></i>4.8 km
                            </div>
                        <div className="home-items">
                            <i className="icon icon-color fas fa-clock"></i>Sep26,2020 at 6.18pm<i
                                className="fas fa-pencil-alt"></i>
                        </div>
                        <div className="home-items">
                            <i className="icon icon-color fas fa-check-square"></i>Is flexible
                            </div>
                        <div className="home-items">
                            <div className="home-button">
                                <button className="view-btn"
                                    type="button"
                                    onClick={this.clickHandler}>View move details</button>
                            </div>
                            <div className="home-button">
                                <button className="quotes-btn" type="button">Quotes Awaiting</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeContent;