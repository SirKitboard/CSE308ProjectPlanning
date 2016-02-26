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
            var loginSection;
            var popularSection;
            var newReleasesSection;
            var curatedSection;
            // var
            return(
                <div>
                    <NavigationBar/>
                </div>
            )
        }
    });
})
