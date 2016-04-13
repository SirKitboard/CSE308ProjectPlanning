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
        return {
            loading:true,
            book: null,
            quantity : 1
        };
    },
    componentDidMount: function() {
        var ISBN = window.isbn;
        var self = this;
        $.ajax({
            url: "/api/book/" + ISBN,
            method: "GET",
            success: function(response) {
                var date = new Date(response.date_added);
                response.date_added = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
                self.setState({
                    book: response,
                    loading: false
                });
            }
        })
    },
    quantityChanged : function() {
        var quantity = ReactDOM.findDOMNode(this.refs.quantity).value
        console.log(quantity);
        this.setState({
            quantity: quantity
        })
    },
    render: function() {
        var content = "";
        if(!this.state.loading) {
            var content = (
                <div className="content" style={{marginTop:'10px', marginLeft: '65'}}>
                    <div className="breadcrumbs">
                        <a href="#">Home</a> <i className="material-icons">navigate_next</i> <a href="#">Books</a> <i className="material-icons">navigate_next</i> <a href="#">{this.state.book.authors[0].first_name}</a> <i className="material-icons">navigate_next</i> <a href="#">{this.state.book.title}</a>
                    </div>
                    <div style={{marginTop: '10px', width:'95%'}} className="container">
                        <div className="row">
                            <div className="col s12 m3 l4">
                                <img className="coverImage" src={this.state.book.cover_image_url}/>
                            </div>
                            <div className="col s12 m6 l5">
                                <h3 style={{margin:'0'}}>{this.state.book.title}</h3>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Authors</td>
                                        <td>
                                        {
                                            _.map(this.state.book.authors, function(author) {
                                                return <span>{author.first_name + " " + author.last_name}<br/></span>
                                            })
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ISBN</td>
                                        <td>{this.state.book.ISBN}</td>
                                    </tr>
                                    <tr>
                                        <td>Release Date</td>
                                        <td>{this.state.book.date_added}</td>
                                    </tr>
                                    <tr>
                                        <td>Publisher</td>
                                        <td>{this.state.book.publisher.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Genre</td>
                                        <td>Fiction</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{this.state.book.price}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col s12 m3">
                                <div className="puchaseBox">
                                <div className="row">
                                  <div className="input-field col s6">
                                      <input placeholder="Quantity" defaultValue="1" min="0" id="quantity" ref="quantity" onChange={this.quantityChanged} type="number" className="validate"/>
                                      <label className="active" htmlFor="quantity">Quantity</label>
                                  </div>
                                  <div className="price col s6">
                                    ${this.state.book.price * this.state.quantity}
                                  </div>
                                </div>
                                <div className="row">
                                    <a className="waves-effect waves-light btn col s8 offset-s2"><i className="material-icons left">shopping_cart</i>Purchase</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            content = (
                <div style={{textAlign:"center"}}>
                    Loading<br/>
                    <div className="preloader-wrapper big active" style={{margin: "auto"}}>
                     <div className="spinner-layer spinner-blue">
                       <div className="circle-clipper left">
                         <div className="circle"></div>
                       </div><div className="gap-patch">
                         <div className="circle"></div>
                       </div><div className="circle-clipper right">
                         <div className="circle"></div>
                       </div>
                     </div>

                     <div className="spinner-layer spinner-red">
                       <div className="circle-clipper left">
                         <div className="circle"></div>
                       </div><div className="gap-patch">
                         <div className="circle"></div>
                       </div><div className="circle-clipper right">
                         <div className="circle"></div>
                       </div>
                     </div>

                     <div className="spinner-layer spinner-yellow">
                       <div className="circle-clipper left">
                         <div className="circle"></div>
                       </div><div className="gap-patch">
                         <div className="circle"></div>
                       </div><div className="circle-clipper right">
                         <div className="circle"></div>
                       </div>
                     </div>

                     <div className="spinner-layer spinner-green">
                       <div className="circle-clipper left">
                         <div className="circle"></div>
                       </div><div className="gap-patch">
                         <div className="circle"></div>
                       </div><div className="circle-clipper right">
                         <div className="circle"></div>
                       </div>
                     </div>
                    </div>
                    </div>

            )
        }
        return (
            <div>
                <SideBar/>
                {content}
            </div>
        )
    }
});

var cookComponent = <BookComponent/>
ReactDOM.render(
  cookComponent,
  document.getElementById('addItemContainer')
);
