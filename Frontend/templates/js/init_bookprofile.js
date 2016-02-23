require([
    "react",
    "react-dom",
    "jsx!components/base/bookprofile"
], function(React, BookprofileComponent) {
    var app = React.createElement(BookprofileComponent);
    React.render(app, document.getElementById('content'));
}, function(error) {

});
