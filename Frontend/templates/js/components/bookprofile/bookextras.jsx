define([
    'jquery',
    'underscore',
    'react',
    'backbone',
    'materialize'
], function($, _, React, Backbone, Materialize) {
    return React.createClass({
        componentDidMount: function() {
            $('ul.tabs').tabs();
        },

        render: function() {
            return (
                <div>
                    <div className="row tab-row">
                        <div className="col s12">
                          <ul className="tabs">
                            <li className="tab col s3"><a className="active" href="#test1">Images</a></li>
                            <li className="tab col s3"><a href="#test2">Reviews</a></li>
                          </ul>
                        </div>
                        <div id="test1" className="col s12">Images</div>
                        <div id="test2" className="col s12">Reviews</div>
                    </div>
                </div>
            )
        }
    });
})
