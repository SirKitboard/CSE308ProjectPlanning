define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'materialize'
], function($, _, Backbone, React, Materialize) {
    return React.createClass({
        getInitialState : function() {
            return {

            }
        },
        render: function() {
            return(
                <div>
                    <NavigationBar/>
                    <div className="row">
                        <div className="col s12 m7">
                          <div className="card">
                            <div className="card-image">
                              <img src="http://placehold.it/200x200"/>
                              <span className="card-title">Hello, User! </span>
                            </div>
                            <div className="card-content">
                              <p>You are looking great today!</p>
                            </div>
                            <div className="card-action">
                              <a className="waves-effect waves-light btn">Update Profile</a>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m6 right-align">
                            <h5>Stats</h5>
                            You've borrowed <span className="bold green-text">Test</span><br/>
                            You've reviwed <span className="bold green-text">test</span><br/>
                            You've currently checked out <span className="bold green-text">Test</span><br/>
                        </div>
                      </div>

                </div>
            )
        }
    });
})
