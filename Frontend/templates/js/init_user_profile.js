require([
	'react',
	'react-dom',
	'jsx!components/base/user_profile'
],function(React, ReactDOM, UserProfileComponent){
	var app  = React.createElement(UserProfileComponent, {key: 'a'})
	ReactDOM.render(app, document.getElementById('content'));
},function(error){
	console.log(error)
	debugger;

}
)
