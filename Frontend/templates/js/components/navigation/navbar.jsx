define([
    "underscore",
    "react",
    "backbone"
], function(_, React, backbone) {
    return React.createClass({
        getInitialState: function(){
            // debugger;
            var loggedIn = false
            if(window.location.hash == '#loggedIn') {
                loggedIn = true
            }
            return {
                'loggedIn': loggedIn
            }
        },
        componentDidMount : function() {
            $(".dropdown-button").dropdown();
            $(".button-collapse").sideNav();
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
            $("#searchDetails").css('display', 'block')
        },
        hideDetails : function() {
            $("#searchDetails").css('display', 'none')
        },
        render: function() {
            var searchDetails = (
                <div id="searchDetails" className="searchDetails container">
                    <div className="row">
                        <div className="col s12 m6 input-field">
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

                        </div>
                        <div className="col s12 m6">
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
                        </div>
                    </div>
                </div>
            )
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
                <div>
                    {navItems}
                    <nav>
                    <div className="white blue-grey-text text-darken-1 nav-wrapper">
                        <a href="#" className="left blue-grey-text text-darken-1 brand-logo hide-on-med-and-down">Logo</a>
                        <a href="#" data-activates="mobile-demo" className="blue-grey-text text-darken-1 button-collapse"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {!this.state.loggedIn ? <li><a onClick={this.toggleLogin}>Login</a></li> : <li> <a className="blue-grey-text text-darken-1 dropdown-button" href="#!" data-activates="dropdown1"> Welcome Name<i className="material-icons right">arrow_drop_down</i></a></li>}
                        </ul>
                        <form onFocus={this.showDetails} onBlur={this.hideDetails} className="nav-search">
                            <div className="input-field">
                                <input id="search" type="search" placeholder="Search" required/>
                                <label htmlthtmlFor="search"><i className="grey-text material-icons">search</i></label>
                                <i className="grey-text material-icons">close</i>
                            </div>
                            {searchDetails}
                        </form>
                        {mobileItems}
                    </div>
                    </nav>
                </div>
            )
        }
    });
})
