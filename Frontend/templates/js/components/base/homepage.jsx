define([
    'jquery',
    'underscore',
    'react',
    'backbone',
    'jsx!components/navigation/navbar'
], function($, _, React, Backbone,NavigationBar) {
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
                    <h1>WORKS!!</h1>
                </div>
            )
        }
    });
})
