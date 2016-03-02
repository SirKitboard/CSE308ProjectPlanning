define([
    'jquery',
    'underscore',
    'react',
    'backbone',
    'jsx!components/template/book'
], function($, _,React,Backbone, Book) { //, BookInfoComponent, BookExtrasComponent, BookRecommendComponent) {
    return React.createClass({
        getInitialState: function() {
            var user = {
                "title": "User name"
            }
            return {
                users : [user, user, user, user, user, user, user],
                selectedBook: 0
            }
        },
        render: function() {
            return (
                <div id="usersTab" className="row">
                    <div className="col s12 m4 userList">
                        <ul>
                            {
                                _.map(this.state.users, function(user) {
                                    return (
                                        <li>
                                            <Book book={user}/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col s12 m8 userDetails">
                    </div>
                </div>
            )
        }
    });
})
