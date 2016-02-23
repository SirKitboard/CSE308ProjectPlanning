define([
    "jquery",
    "underscore",
    "backbone",
    "react"
], function($, _, Backbone, React) {
    return React.createClass({
        getInitialState : function() {
            return {
                'something' : True
            }
        },
        render: function() {
            return(
                <div>
                    <h1>WORKS!!</h1>
                </div>
            )
        }
    });
})
