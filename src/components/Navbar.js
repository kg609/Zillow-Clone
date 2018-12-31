import React from 'react';
import zillowIcon from '../images/zillow-icon.png';
class Navbar extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }
    }

   showMenu = (event) => {
       event.preventDefault();

       this.setState({
           showMenu: true,
       });
    }

    closeMenu = (event) => {
        event.preventDefault();

        this.setState({
            showMenu: false,
        })
    }
    
    render(){
        return (
            <div>
                {
                    this.state.showMenu ? 
                    (
                        console.log(this.state.showMenu),
                        <div className="modal">
                                <div className="arrow-left" onClick={this.closeMenu}></div>   
                                <div className="img-container" onClick={this.closeMenu}>
                                    <img src={zillowIcon} alt="Zillow Logo" />
                                    <a  className="" href="placeholder">Homepage</a>
                                </div>
                                <div className="Dropdown-menu" onClick={this.closeMenu}>
                                    <ul className="Dropdown-list">
                                        <li className="CTA-links"><a href="placeholder">Sign in</a> or <a href="placeholder">Join</a>
                                            <a className="advertise-link" href="placeholder">Advertise</a>
                                            
                                        </li>
                                        <li>Link 1</li>
                                        <li>Link 1</li>
                                        <li>Link 1</li>
                                        <li>Link 1</li>
                                        <li>Link 1</li>
                                    </ul>
                                </div>
                        </div> 
                    )
                    : (
                        <div>
                        <div className="arrow-left" onClick={this.showMenu}></div>   
                            <div className="img-container" onClick={this.showMenu}>
                                <img src={zillowIcon} alt="Zillow Logo" />
                            </div>
                        </div> 
                    )

                        /* Desktop navbar
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
                        )*/
                }

            </div>      
        );
    }
};

export default Navbar;