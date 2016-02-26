define([
    'jquery',
    'underscore',
    'react',
    'backbone',
], function($, _, React, Backbone) {
    return React.createClass({
        render: function() {
            return (
                <div className="recommendContainer">
                    <div>
                        <p>Similar Books</p>
                    </div>
                    <div className="bookRecommend">
                        <a href="#"><div className="bookPreview">
                            <img src="http://placehold.it/250x200" className="bookThumb"></img>
                            <p>Title</p>
                        </div></a>
                        <a href="#"><div className="bookPreview">
                            <img src="http://placehold.it/250x200" className="bookThumb"></img>
                            <p>Title</p>
                        </div></a>
                        <a href="#"><div className="bookPreview">
                            <img src="http://placehold.it/250x200" className="bookThumb"></img>
                            <p>Title</p>
                        </div></a>
                        <a href="#"><div className="bookPreview">
                            <img src="http://placehold.it/250x200" className="bookThumb"></img>
                            <p>Title</p>
                        </div></a>
                        <a href="#"><div className="bookPreview">
                            <img src="http://placehold.it/250x200" className="bookThumb"></img>
                            <p>Title</p>
                        </div></a>
                        <a href="#"><div className="bookPreview">
                            <img src="http://placehold.it/250x200" className="bookThumb"></img>
                            <p>Title</p>
                        </div></a>
                        <a href="#"><div className="bookPreview">
                            <img src="http://placehold.it/250x200" className="bookThumb"></img>
                            <p>Title</p>
                        </div></a>
                        <a href="#"><div className="bookPreview">
                            <img src="http://placehold.it/250x200" className="bookThumb"></img>
                            <p>Title</p>
                        </div></a>
                        <a href="#"><div className="bookPreview">
                            <img src="http://placehold.it/250x200" className="bookThumb"></img>
                            <p>Title</p>
                        </div></a>
                        <a href="#"><div className="bookPreview">
                            <img src="http://placehold.it/250x200" className="bookThumb"></img>
                            <p>Title</p>
                        </div></a>
                        <a href="#"><div className="bookPreview">
                            <img src="http://placehold.it/250x200" className="bookThumb"></img>
                            <p>Title</p>
                        </div></a>
                    </div>
                </div>
            )
        }
    });
})
