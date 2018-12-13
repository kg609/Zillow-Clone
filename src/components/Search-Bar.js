import React from 'react';

class SearchBar extends React.Component {
    
    render(){
        return (
            <div className="HomePageImgs">
                <h1>Find your way home</h1>

                <ul className="CTA-Links">
                    <li><a href="placeholder">Buy</a></li>
                    <li><a href="placeholder">Rent</a></li>
                    <li><a href="placeholder">Sell</a></li>
                    <li><a href="placeholder">Zestimate</a></li>
                </ul>

                <form className="searchForm">
                    <input type="text" placeholder="Enter an address neighborhood, city, or ZIP code" name="search"/>
                    <button className="search-button">Search</button>
                </form>
            </div>
        );
    };
}

export default SearchBar;