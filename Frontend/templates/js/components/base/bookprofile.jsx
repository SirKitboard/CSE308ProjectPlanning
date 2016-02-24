define([
    'jquery',
    'underscore',
    'react',
    'backbone',
    'jsx!components/navigation/navbar'
], function($, _,React,Backbone, Navbar) {
    return React.createClass({
        getInitialState: function() {
            return {
                'something': true
            }
        },

        render: function() {
            return (
                <div>
                    <Navbar />
                    <h1>This is the book profile</h1>
                </div>
            )
        }
    });
})
