define([
    'jquery',
    'underscore',
    'react',
    'backbone',
    'jsx!components/bookprofile/bookinfo',
    'jsx!components/bookprofile/bookextras',
    'jsx!components/bookprofile/bookrecommend'
], function($, _,React,Backbone, BookInfoComponent, BookExtrasComponent, BookRecommendComponent) {
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
                    <div className="row" id="bookProfileTop">
                        <div className="col l4">
                            <BookInfoComponent book={this.state.book}/>
                        </div>
                        <div className="col l8">
                            <BookExtrasComponent id="bookExtras"/>
                        </div>
                    </div>
                    <div className="row" id="bookProfileBottom">
                        <BookRecommendComponent />
                    </div>
                </div>
            )
        }
    });
})
