define([
    'jquery',
    'underscore',
    'react',
    'backbone',
    'jsx!components/navigation/navbar',
    'jsx!components/bookprofile/bookinfo',
    'jsx!components/bookprofile/bookextras'
], function($, _,React,Backbone, Navbar, BookInfoComponent, BookExtrasComponent) {
    return React.createClass({
        getInitialState: function() {
            return {
                "book": {
                    "title": "hello world",
                    "available": "available",
                    "year": 1994,
                    "publisher": "John Doe"
                }
            }
        },

        render: function() {
            return (
                <div>
                    <Navbar />
                    <div className="row">
                        <div className="col s4">
                            <BookInfoComponent book={this.state.book}/>
                        </div>
                        <div className="col s8">
                            <BookExtrasComponent />
                        </div>
                    </div>
                </div>
            )
        }
    });
})
