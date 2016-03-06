define([
    'underscore',
    'react'
], function(_, React) {
    return React.createClass({
        render: function() {
            var available = this.props.book.available;
            if (available === "Available") {
                var card =
                (<div className="card green" id="bookAvailable">
                    <div className="card-content white-text">
                      <p className="center-align">{this.props.book.available}</p>
                    </div>
                </div>)
                var disabled = ""
            } else {
                  var card =
                  (<div className="card red z-depth-1" id="bookAvailable">
                      <div className="card-content white-text">
                        <p className="center-align">{this.props.book.available}</p>
                      </div>
                  </div>)

                  var disabled = "disabled"
            }


            return (
                <div id="bookInfo">
                    <h2>{this.props.book.title}</h2>
                    <h5>by {this.props.book.author}</h5>
                    {card}
                    <p>ISBN: {this.props.book.isbn}</p>
                    <hr />
                    <p>Description</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <hr />
                    <span>
                        <p className="left-align">Year</p><p className="right-align">{this.props.book.year}</p>
                    </span>
                    <hr />
                    <span>
                        <p className="left-align">Publisher</p><p className="right-align">{this.props.book.publisher}</p>
                    </span>
                    <hr />
                    <span>
                        <p className="left-align">Rating</p><p className="right-align"></p>
                    </span>
                    <button className= {"btn-large right " + disabled} id="addToCart">Add to cart</button>
                </div>
            )
        }
    });
})
