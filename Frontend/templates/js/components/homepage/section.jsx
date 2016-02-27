define()[
    'jquery',
    'underscore',
    'react',
    'backbone'
], function($, _, React, Backbone) {
    return React.createClass({
        getInitialState: function() {
            return null;
        },
        render : function() {
            return (
                <div className="homepage-section" id={this.props.id + "-section"}>
                    <span class="section-heading">{this.props.title}</span>
                </div>
            )
        }
    })
});
