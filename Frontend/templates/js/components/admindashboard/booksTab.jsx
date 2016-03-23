define([
    'underscore',
    'react',
    'jsx!components/template/book',
    'jsx!components/bookprofile/bookinfo'
], function(_,React, Book, BookInfo) { //, BookInfoComponent, BookExtrasComponent, BookRecommendComponent) {
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
                 <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                    <div className="col s12 m3 bookList">
                        <div className="input-field">
                          <i className="material-icons prefix">search</i>
                          <input id="search" type="text" className="validate"/>
                          <label htmlFor="search">Search</label>
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
                    <div className="col s12 m9 BookDetails">
                        <BookInfo book={this.state.books[0]}/>

                    </div>
                </div>
            )
        }
    });
})
