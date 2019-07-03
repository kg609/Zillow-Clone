import React from 'react';
import zillowIcon from '../images/zillow-icon.png';
import mobileIcon from '../images/mobile-logo.jpg';

class Navbar extends React.Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        }
    }

   showMenu = (event) => {
       event.preventDefault();

       console.log(this.state);
       this.setState({
           showMenu: true,
       });
    }

    closeMenu = (event) => {
        event.preventDefault();

        console.log(this.state);
        this.setState({
            showMenu: false,
        })
    }
    
    render(){
        return (
           /* Desktop navbar*/
            <div>
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

                    <div className="arrow-left" ></div>   
                    <div className="img-container" >
                        <img className="desktop-logo" src={zillowIcon} alt="Zillow Logo" />
                        <img className="mobile-logo" src={mobileIcon} alt="Zillow Logo" onClick={this.closeMenu} />
                    </div>
                </div>
            </div>      
        );
    }
};

export default Navbar;