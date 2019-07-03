import React, { Component } from 'react';

/*const imagesUrl = {
    buy: 'https://expo.advance.net/img/93fa2b73cc/width960/93c_3718huntingrunrd.jpeg',
    rent: 'http://www.sprayedout.com/wp-content/uploads/2015/09/glass-apartments.jpg',
    sell: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Living_Room.jpg',
    zestimate: 'https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_960_720.jpg'

}*/

class SearchBar extends Component {
    state = {
        url: ''
    };

    changeImage = (event) => {
        console.log(event.target.value);
    }
    
    render(){
        return (
            <div className="HomePageImgs">
                <h1>Find your way home</h1>

                <div className="search-container">
                    {/* <ul className="CTA-Links">
                        <li className="active"><a href="placeholder">Buy</a></li>
                        <li onClick={this.changeImage}><a href="placeholder">Rent</a></li>
                        <li><a href="placeholder">Sell</a></li>
                        <li><a href="placeholder">Zestimate</a></li>
                    </ul> */}

                    <form className="searchForm">
                        {/* <div className="arrow-up"></div> */}
                        <input type="text" placeholder="Enter an address neighborhood, city, or ZIP code" name="search"/>
                        <button type="submit" className="search-button">Search</button>
                        <i className="fa fa-search "></i>
                    </form>
                </div>
            </div>
        );
    };
}

export default SearchBar;