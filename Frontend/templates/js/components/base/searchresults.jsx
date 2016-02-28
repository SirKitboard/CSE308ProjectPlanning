define([
    'jquery',
    'underscore',
    'backbone',
    'react'
], function($, _, Backbone, React) {
    return React.createClass({
        getInitialState : function() {
            return {
                'something' : true
            }
        },
        render: function() {
            return(
                <div>
                    <NavigationBar/>
                    <h1>SEARCHES</h1>
                </div>
            )
        }
    });
})
