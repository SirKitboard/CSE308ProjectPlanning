define([
    'jquery',
    'underscore',
    'react',
    'backbone',
    'jsx!components/widgets/bookCarousel'
], function($, _, React, Backbone, BookCarouselComponent) {
    return React.createClass({
        getInitialState: function() {
            var book = {
                title: null,
                description: null,
                author: null
            };
            var books = []
            for (i=0; i<16; i++) {
                books.push(book);
            }
            return {
                "recommendations": books
            }
        },

        render: function() {
            return (
                <div className="recommendContainer">
                    <div>
                        <p>Similar Books</p>
                    </div>
                    <div className="bookRecommend">
                        <BookCarouselComponent books={this.state.recommendations} />
                    </div>
                </div>
            )
        }
    });
})
