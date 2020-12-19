import React, { Component } from 'react'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            menuItems: ["MY MOVES", "MY PROFILE", "GET QUOTES", "LOGOUT"]
        };
    }
    render() {
        const {menuItems} = this.state
        const navItems = menuItems.map((navItem, index) => {
            return <li key={index}>
                <a href=""><i className="icon fas fa-shipping-fast"></i>{navItem}</a>
            </li>
        })
        return (
            <div className="header"> <ul>{navItems}</ul></div>
        )

    }

}
export default Header;