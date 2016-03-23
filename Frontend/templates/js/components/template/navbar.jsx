define([
    "underscore",
    "react",
    'jsx!components/template/shoppingcart',
    'react-dom'
], function(_, React, ShoppingCartComponent, ReactDOM) {
    return React.createClass({
        getInitialState: function(){
            // debugger;
            var loggedIn = false
            if(window.location.hash == '#loggedIn') {
                loggedIn = true
            }
            var book = {
                title: null,
                description: null,
                author: null
            }
            books = [book, book, book, book]
            return {
                'loggedIn': loggedIn,
                'books': books,
                cartOpen: false,
                showSearchDetails: false
            }
        },
        componentDidMount : function() {
            $(".dropdown-button").dropdown();
            $(".button-collapse").sideNav();
            var shoppingCart = <ShoppingCartComponent onClose={this.toggleCart} books={this.state.books}/>
            if(this.state.loggedIn) {
                ReactDOM.render(shoppingCart, document.getElementById('cart'))
            }
        },
        toggleLogin : function() {
            if(this.state.loggedIn) {
                window.location.hash = "";
                window.location.reload();
            }
            else {
                window.location.hash = "loggedIn";
                window.location.reload();
            }
        },
        showDetails : function() {
            this.setState({
                showSearchDetails : true
            });
        },
        hideDetails : function() {
            this.setState({
                showSearchDetails : false
            });
            // $("#searchDetails").css('display', 'none')
        },
        toggleCart : function() {
            if(this.state.cartOpen) {
                $("#cart").animate({
                    right:"-450px"
                }, 500);
                $("#dark-cover").animate({
                    opacity: '0'
                }, 500, function() {
                    $("#dark-cover").css('display','none')
                });
                this.setState({
                    cartOpen:false
                })
            } else {
                $("#cart").animate({
                    right:"0px"
                }, 500)
                $("#dark-cover").css('display','block')
                $("#dark-cover").animate({
                    opacity: '0.7'
                }, 500);
                this.setState({
                    cartOpen:true
                })
            }
        },
        submitSearch : function(e) {
            if(e.keyCode == 13) {
                window.location.href = "searchresults.html";
            }
        },
        render: function() {
            var searchDetails = "";
            if(this.state.showSearchDetails) {
                var searchDetails = (
                    <div id="searchDetails" className="searchDetails container">
                        <div className="row">
                            <div className="col s12 m6 genre-filters input-field">
                                <p>
                                  <input type="checkbox" id="genre_fiction" />
                                  <label htmlFor="genre_fiction">Fiction</label>
                                </p>
                                <p>
                                  <input type="checkbox" id="genre_youngadult"/>
                                  <label htmlFor="genre_youngadult">Young Adult</label>
                                </p>
                                <p>
                                  <input type="checkbox" id="genre_mature"/>
                                  <label htmlFor="genre_mature">Mature</label>
                                </p>
                                <p>
                                  <input type="checkbox" id="genre_biography"/>
                                  <label htmlFor="genre_biography">Biography</label>
                                </p>
                                <p>
                                  <input type="checkbox" id="genre_sci-fi"/>
                                  <label htmlFor="genre_sci-fi">Science Fiction</label>
                                </p>
                                <p>
                                  <input type="checkbox" id="genre_sci-fi"/>
                                  <label htmlFor="genre_sci-fi">Mystery</label>
                                </p>
                                <p>
                                  <input type="checkbox" id="genre_sci-fi"/>
                                  <label htmlFor="genre_sci-fi">Romance</label>
                                </p>

                            </div>
                            <div className="col s12 m6 search-filters">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input ref="Author" id="Author" type="text" className="validate"/>
                                        <label htmlhtmlFor="Author">Author</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12 m6">
                                        <input ref="fromyear" id="fromyear" type="text" className="validate"/>
                                        <label htmlhtmlFor="fromyear">From Year</label>
                                    </div>
                                    <div className="input-field col s12 m6">
                                        <input ref="toyear" id="toyear" type="text" className="validate"/>
                                        <label htmlhtmlFor="toyear">To Year</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input ref="rating" id="rating" type="number" min="0" max="5" className="validate"/>
                                        <label htmlhtmlFor="rating">Rating</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            if(this.state.loggedIn) {
                var navItems = (<ul id="dropdown1" className="dropdown-content">
                      <li><a href="#!">Profile</a></li>
                      <li><a href="#!">Account Settings</a></li>
                      <li><a onClick={this.toggleLogin} href="#!">Logout</a></li>
                    </ul>)
                var mobileItems = (
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="#!">Profile</a></li>
                        <li><a href="#!">Account Settings</a></li>
                        <li><a onClick={this.toggleLogin}>Logout</a></li>
                    </ul>
                )
            } else {
                var mobileItems = (<ul className="side-nav" id="mobile-demo">
                        <li><a onClick={this.toggleLogin}>Login</a></li>
                    </ul>
                )
            }
            return(
                <div className="nav-wrapper-outer">
                    {navItems}
                    <nav>
                    <div className="white blue-grey-text text-darken-1 nav-wrapper">
                        <a href="#" className="left blue-grey-text text-darken-1 brand-logo hide-on-med-and-down">Logo</a>
                        <a href="#" data-activates="mobile-demo" className="blue-grey-text text-darken-1 button-collapse"><i className="material-icons">menu</i></a>
                        {this.state.loggedIn ? <a style={{padding:'0 5px'}} className="right blue-grey-text text-darken-1 shopping-cart-icon" onClick={this.toggleCart}><i className="material-icons">shopping_cart</i></a> : null}
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {!this.state.loggedIn ? <li><a className="blue-grey-text text-darken-1" onClick={this.toggleLogin}>Login</a></li> : <li> <a className="blue-grey-text text-darken-1 dropdown-button" href="#!" data-activates="dropdown1"> Welcome Name<i className="material-icons right">arrow_drop_down</i></a></li>}
                        </ul>
                        <form onFocus={this.showDetails} onBlur={this.hideDetails} className="nav-search">
                            <div className="input-field">
                                <input id="search" type="search" placeholder="Search" onKeyDown={this.submitSearch} required/>
                                <label htmlthtmlFor="search"><i className="grey-text material-icons">search</i></label>
                                <i className="grey-text material-icons">close</i>
                            </div>
                        </form>
                        {mobileItems}
                    </div>
                    </nav>
                    {searchDetails}
                </div>
            )
        }
    });
})
