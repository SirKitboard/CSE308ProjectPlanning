require([
	'react',
	'jsx!components/base/user_profile'
],function(React,UserProfileComponent){
	var app  = React.createElement(UserProfileComponent, {key: 'a'})
	React.render(app, document.getElementById('content'));
},function(error){
	console.log(error)
	debugger;

}
)