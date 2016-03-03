define([
    'jquery',
    'underscore',
    'react',
    'backbone',
    'jsx!components/template/book',
    'jsx!components/bookprofile/bookinfo'
], function($, _,React,Backbone, Book, BookInfo) { //, BookInfoComponent, BookExtrasComponent, BookRecommendComponent) {
    return React.createClass({
        getInitialState: function() {
            var book = {
                "title": "Hello World",
                "author": "John Smith",
                "isbn": 12345678910,
                "available": "Available",
                "year": 1994,
                "publisher": "John Doe"
            }
            return {
                books : [book, book, book, book, book, book, book],
                selectedBook: 0
            }
        },
        render: function() {
            return (
                <div id="booksTab" className="row">
                    <div className="col s12 m4 bookList">
                        <div className="input-field">
                          <i className="material-icons prefix">search</i>
                          <input id="search" type="text" className="validate"/>
                          <label for="search">Search</label>
                        </div>
                        <ul>
                            {
                                _.map(this.state.books, function(book) {
                                    return (
                                        <li>
                                            <Book book={book}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col s12 m8 BookDetails">
                        <BookInfo book={this.state.books[0]}/>
                    </div>
                </div>
            )
        }
    });
})
