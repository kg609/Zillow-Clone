import React, { Component } from 'react';

class SearchBar extends Component {
    
    render(){
        return (
            <div className="HomePageImgs">
                <h1>Find your way home</h1>

                <ul className="CTA-Links">
                    <li className="active"><a href="placeholder">Buy</a></li>
                    <li><a href="placeholder">Rent</a></li>
                    <li><a href="placeholder">Sell</a></li>
                    <li><a href="placeholder">Zestimate</a></li>
                </ul>

                <form className="searchForm">
                    <input type="text" placeholder="Enter an address neighborhood, city, or ZIP code" name="search"/>
                    <button type="submit" className="search-button">Search</button>
                </form>

                <section className="banner">
                    <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                    <h4>Be ready to buy Get pre-qualified by a local lender on zillow.</h4>
                    <button className="get-started-Btn"><a href="placeholder">Get Started</a></button>
                </section>
            </div>
        );
    };
}

export default SearchBar;