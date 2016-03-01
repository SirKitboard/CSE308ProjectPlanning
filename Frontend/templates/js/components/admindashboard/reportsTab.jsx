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
                <div id="reportsTab" className="row">
                    <div className="col s12 m4 topResults">
                        Top Search Results
                    </div>
                    <div className="col s12 m8 mostDownloaded">
                        Most Downloaded Books
                    </div>
                </div>
            )
        }
    });
})
