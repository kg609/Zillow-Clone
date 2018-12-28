import React from 'react';
import zillowIcon from '../images/zillow-icon.png';
class Navbar extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: true,
        }
    }

   showMenu = (event) => {
       event.preventDefault();

       this.setState({
           showMenu: false,
       });
    }

    closeMenu = (event) => {
        event.preventDefault();

        this.setState({
            showMenu: true,
        })
    }
    
    render(){
        return (
            <div>
                {
                    this.state.showMenu
                        ? (
                        <div>  
                            <nav id="mainNav">
                                <ul className="navbar">
                                    <li><a href="placeholder">Buy</a></li>
                                    <li><a href="placeholder">Rent</a></li>
                                    <li><a href="placeholder">Sell</a></li>
                                    <li><a href="placeholder">Mortgages</a></li>
                                    <li><a href="placeholder">Agent finder</a></li>
                                    <li><a href="placeholder">More</a></li>
                                </ul>


                                <ul className="extra-links">
                                <li><a href="placeholder">List your rental</a></li>
                                <li><a href="placeholder">Advertise</a></li>
                                <li><a href="placeholder">Sign in</a></li>
                                    <li>or</li>
                                <li><a href="placeholder">Join</a></li>
                                <span className="help-link">
                                    <li><a href="placeholder">Help</a></li>
                                </span>
                                </ul>
                            </nav>

                            <div className="arrow-left" onClick={this.showMenu}></div>   
                            <div className="img-container" onClick={this.showMenu}>
                                <img src={zillowIcon} alt="Zillow Logo" />
                            </div>  
                        </div>
                        )
                        : (
                            <div className="modal">
                                <div className="arrow-left" onClick={this.showMenu}></div>   
                                <div className="img-container" onClick={this.showMenu}>
                                    <img src={zillowIcon} alt="Zillow Logo" />
                                </div>
                                <h2>Homepage</h2>
                                <hr/>
                                <div className="Dropdown-menu" onClick={this.closeMenu}>
                                    <ul className="Dropdown-list">
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        )
                }

            </div>      
        );
    }
};

export default Navbar;