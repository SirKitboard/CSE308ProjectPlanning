define([
    'underscore',
    'backbone',
    'react',
    'jsx!components/navigation/navbar'
], function(_, Backbone, React, NavigationBar) {
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
