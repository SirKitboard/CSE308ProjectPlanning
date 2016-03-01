define([
    'jquery',
    'underscore',
    'react',
    'backbone',
    'jsx!components/admindashboard/reportsTab'
], function($, _,React,Backbone, ReportsTab) { //, BookInfoComponent, BookExtrasComponent, BookRecommendComponent) {
    return React.createClass({
        getInitialState: function() {
            return null;
        },
        render: function() {
            return (
                <div>
                    Reports
                </div>
            )
        }
    });
})
