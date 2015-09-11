$(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'tosca.mp3');

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('.play').click(function() {
            audioElement.play();
        });

        $('.pause').click(function() {
            audioElement.pause();
        });
    });

