define([
    'jquery',
    'underscore',
    'react',
    'backbone',
], function($, _, React, Backbone) {
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
            } else {
                  var card =
                  (<div className="card red" id="bookAvailable">
                      <div className="card-content white-text">
                        <p className="center-align">{this.props.book.available}</p>
                      </div>
                  </div>)
            }


            return (
                <div id="bookInfo">
                    <h2>{this.props.book.title}</h2>
                    <h5>by {this.props.book.author}</h5>
                    <h5 id="bookAvailable">{this.props.book.available}</h5>
                    <p>ISBN: {this.props.book.isbn}</p>
                    <p>Description</p>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <hr />
                    <p>Year {this.props.book.year}</p>
                    <hr />
                    <p>Publisher {this.props.book.publisher}</p>
                    <hr />
                    <p>Rating</p>
                    <button className="btn right" id="addToCart">Add to cart</button>
                </div>
            )
        }
    });
})
