define([
    'jquery',
    'materialize',
    'underscore',
    'backbone',
    'react',
    'jsx!components/navigation/navbar'
], function($, Materialize, _, Backbone, React, NavigationBar) {
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
