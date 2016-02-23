require([
    "react",
    "jsx!components/base/homepage"
], function(React, HomepageComponent){
    var app = React.createElement(HomepageComponent, {key:"a"})
    React.render(app, document.getElementById('content'));
}, function(error){
    console.log(error)
    debugger;
}
)
