require.config({
	baseUrl: "js/",
	shim: {
		"materialize" : {"deps" :['jquery']}
	},
 	paths: {
	            "jquery": "bower_components/jquery/dist/jquery.min",
	         "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",
		   "materialize": "bower_components/Materialize/dist/js/bootstrap.min",
	              "flux": "bower_components/flux/dist/Flux",
	             "react": "bower_components/react/react-with-addons",
			 "react-dom": "bower_components/react/react-dom",
	    "JSXTransformer": "bower_components/jsx-requirejs-plugin/js/JSXTransformer",
	               "jsx": "bower_components/jsx-requirejs-plugin/js/jsx",
	          "backbone": "bower_components/backbone/backbone",
	        "underscore": "bower_components/underscore/underscore",
	        	  "text": "bower_components/requirejs-text/text",
	        	"events": "bower_components/eventEmitter/EventEmitter",
	           "snapsvg": "bower_components/snap.svg/dist/snap.svg"
 	},
 	jsx: {
		fileExtension: ".jsx"
 	}
});
