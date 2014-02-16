var Panorama = {};

(function ( document, navigator ) {
  
  'use strict';
  
  var video;
  
  function cameraSuccess( stream ) {
    video.src = URL.createObjectURL( stream );
    video.play();
  }
  
  function cameraError( error ) {
    console.error( error );
  }

  function deviceMove() {
    var orientation = screen.orientation ||
        screen.mozOrientation ||
        screen.msOrientation;

    //Device is in vertical position.
    if ( /portrait/.test( orientation ) ) {
      //Show some warning..
    }

    
  }
  
  Panorama.init = function init( options ) {
    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.webkitGetUserMedia;

    video = document.querySelector( options.video );
    
    return this;
  };
  
  Panorama.initCapture = function initCapture() {
    var mediaOptions = {
      video: true
    };
    navigator.getUserMedia( mediaOptions, cameraSuccess, cameraError );

    return this;
  };
  
  Panorama.stopCapture = function stopCapture() {
    

    return this;
  };
  
})( document, navigator );