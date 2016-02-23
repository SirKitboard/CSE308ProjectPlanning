require([
    "react",
    // "react-dom",
    "jsx!components/base/searchresults"
], function(React, SearchResultComponent){
    var app = React.createElement(SearchResultComponent, {key:"a"})
    React.render(app, document.getElementById('content'));
}, function(error){
    console.log(error)
    debugger;
}
)
