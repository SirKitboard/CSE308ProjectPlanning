define([
    'jquery',
    'underscore',
    'react',
    'backbone',
    'jsx!components/navigation/navbar',
    'jsx!components/bookprofile/bookinfo',
    'jsx!components/bookprofile/bookextras',
    'jsx!components/bookprofile/bookrecommend'
], function($, _,React,Backbone, Navbar, BookInfoComponent, BookExtrasComponent, BookRecommendComponent) {
    return React.createClass({
        getInitialState: function() {
            return {
                "book": {
                    "title": "Hello World",
                    "author": "John Smith",
                    "isbn": 12345678910,
                    "available": "Available",
                    "year": 1994,
                    "publisher": "John Doe"
                }
            }
        },

        render: function() {
            return (
                <div id="profileContent">
                    <Navbar />
                    <div className="row" id="bookProfileTop">
                        <div className="col s4">
                            <BookInfoComponent book={this.state.book}/>
                        </div>
                        <div className="col s8">
                            <BookExtrasComponent id="bookExtras"/>
                        </div>
                    </div>
                    <div className="row">
                        <BookRecommendComponent />
                    </div>
                </div>
            )
        }
    });
})
