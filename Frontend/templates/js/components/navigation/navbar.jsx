define([
    "underscore",
    "react",
    "backbone"
], function(_, React, backbone) {
    return React.createClass({
        getInitialState: function(){
            // debugger;
            return {
                'loggedIn': true
            }
        },
        componentDidMount : function() {
            // $(".dropdown-button").dropdown();
            $(".button-collapse").sideNav();
        },
        componentDidUpdate : function() {
            $(".dropdown-button").dropdown();
            $(".button-collapse").sideNav();
        },
        render: function() {
            if(this.state.loggedIn) {
                var navItems = (<ul id="dropdown1" className="dropdown-content">
                      <li><a href="#!">Profile</a></li>
                      <li><a href="#!">Account Settings</a></li>
                      <li><a href="#!">Logout</a></li>
                    </ul>)
                var mobileItems = (
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="#!">Profile</a></li>
                        <li><a href="#!">Account Settings</a></li>
                        <li><a href="#!">Logout</a></li>
                    </ul>
                )
            } else {
                var mobileItems = (<ul className="side-nav" id="mobile-demo">
                        <li><a href="#!">Login</a></li>
                    </ul>
                )
            }
            return(
                <div>
                    {navItems}
                    <nav>
                    <div className="white blue-grey-text text-darken-1 nav-wrapper">
                        <a href="#" className="blue-grey-text text-darken-1 brand-logo">Logo</a>
                        <a href="#" data-activates="mobile-demo" className="blue-grey-text text-darken-1 button-collapse"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {!this.state.loggedIn ? <li><a href="#">Login</a></li> : <li> <a className="blue-grey-text text-darken-1 dropdown-button" href="#!" data-activates="dropdown1"> Welcome Name<i className="material-icons right">arrow_drop_down</i></a></li>}
                        </ul>
                        {mobileItems}
                    </div>
                    </nav>
                </div>
            )
        }
    });
})
