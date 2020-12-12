import React from 'react';
import { MenuItems } from './MenuItem';
import './NavBar.css';

class NavBar extends React.Component {
    state = {clicked : false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render () {
        return (
            <div className="NavBarItems">
                <h1 className="navbar-logo"><i class="fas fa-book-reader"></i>Read & Find</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ?  'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}                  
                </ul>
            </div>
        )
    }
}


export default NavBar