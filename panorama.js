/*************************************************************************
 * This is a library aimed at writing web apps that deliver the parorama *
 * experience one may have on the camera app on iOS and Android devices. *
 *                                                                       *
 * Enjoy!                                                                *
 *************************************************************************/

var Panorama = (function Panorama( document, navigator ) {
  
  'use strict';
  
  var video, cameraStream,
    Panorama = {};
  
  function cameraSuccess( stream ) {
    video.src = URL.createObjectURL( stream );
    video.play();

    cameraStream = stream;
  }
  
  function cameraError( error ) {
    console.error( error );
  }

  function deviceTilt() {
    var orientation = screen.orientation ||
        screen.mozOrientation ||
        screen.msOrientation;

    //Device is in vertical position.
    //See https://developer.mozilla.org/en-US/docs/Web/API/Screen.orientation#Example
    if ( orientation && /portrait/.test( orientation ) ) {
      //Show some warning..
    }
  }

  function deviceMove() {

  }
  
  Panorama.init = function init( options ) {
    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.webkitGetUserMedia;

    video = document.querySelector( options.video );
    
    addEventListener( 'devicemotion', deviceMove );
    screen.addEventListener( 'orientationchange', deviceTilt );
    screen.addEventListener( 'mozorientationchange', deviceTilt );

    return Panorama;
  };
  
  Panorama.initCapture = function initCapture() {
    var mediaOptions = {
      video: true
    };
    navigator.getUserMedia( mediaOptions, cameraSuccess, cameraError );

    return Panorama;
  };
  
  Panorama.stopCapture = function stopCapture() {
    video.src = '';
    cameraStream.stop();

    return Panorama;
  };

  return Panorama;
  
})( document, navigator );