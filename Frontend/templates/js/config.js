require.config({
	baseUrl: "js/",
	shim: {
		"materialize": {
			deps: ['jquery', 'hammerjs', 'jquery-hammerjs', 'velocity'] //, 'hammerjs', 'velocity', 'scrollfire']
		},
		'jquery': {
            exports: '$'
        },
	},
 	paths: {

		   "materialize": "bower_components/materialize/dist/js/materialize",
			  'velocity': 'bower_components/velocity/velocity',
    		  'hammerjs': 'bower_components/hammerjs/hammer',
	   'jquery-hammerjs': 'bower_components/jquery-hammerjs/jquery.hammer',
			    "jquery": "bower_components/jquery/dist/jquery.min",
			'scrollfire': 'bower_components/materialize/js/scrollFire',
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
