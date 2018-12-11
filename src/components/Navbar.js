import React from 'react';
import zillowIcon from '../images/zillow-icon.png';

const Navbar = () => {
     return (
         <nav id="mainNav">
            <div className="img-container">
                <img src={zillowIcon} alt="Zillow Logo" />
            </div>
             <ul className="main-navbar">
                 <li><a href="placeholder">Buy</a></li>
                 <li><a href="placeholder">Rent</a></li>
                 <li><a href="placeholder">Sell</a></li>
                 <li><a href="placeholder">Mortgages</a></li>
                 <li><a href="placeholder">Agent finder</a></li>
                 <li><a href="placeholder">More</a></li>

                 <ul className="extra-links">
                    <li>links</li>
                    <li>links</li>
                    <li>links</li>
                        <span className="text">or</span>
                    <li>links</li>
                    <span className="help-link">
                        <li>links</li>
                    </span>
                 </ul>
                 
             </ul>
                    
         </nav>
     );
};

export default Navbar;