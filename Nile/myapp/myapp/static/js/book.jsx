var SideBar = React.createClass({
    getInitialState : function() {
        if(window.currentUser == null) {
            window.currentUser = {}
            window.currentUser.first_name = "Aditya";
            window.currentUser.profilePic = "https://avatars.slack-edge.com/2016-04-04/31788970949_40af673c5b4093ee4a4f_512.png";
        }
        return {

        }
    },
    render: function() {
        // debugger;
        var profilePic = window.currentUser.profilePic;
        if(!profilePic || profilePic.length != 0) {
            // profilePic = "http://placehold.it/200x200";
            profilePic = "https://avatars.slack-edge.com/2016-04-04/31788970949_40af673c5b4093ee4a4f_512.png";
        }

        return (
            <div className="sidebar">
                <div className="website-name">Nile</div>
                <div className="profileInfo">
                    <img src={profilePic}/>
                    <span>{window.currentUser.first_name}</span>
                </div>
                <div className="divider">
                </div>
                <ul className="navIcons">
                    <li><i className="material-icons">home</i><br/><span>Home</span></li>
                    <li><i className="material-icons">library_books</i><br/><span></span>Books</li>
                    <li><i className="material-icons">info</i><br/><span></span>About</li>
                    <li><i className="material-icons">contact_mail</i><br/><span>Contact</span></li>
                </ul>
            </div>
        )
    }
});

var BookComponent = React.createClass({
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <div>
                <SideBar/>
            </div>
        )
    }
});

var cookComponent = <BookComponent/>
ReactDOM.render(
  cookComponent,
  document.getElementById('addItemContainer')
);
