
function  playAudio(who , whos) {
    const play = document.querySelector(who);

    play.addEventListener("click", function() {
     const audio = document.querySelector(whos);
     if(!audio) return ;
     audio.currentTime = 0;
     audio.play();
})
}

playAudio('.gura', '.gura-audio');
playAudio('.ame', '.ame-audio');
playAudio('.ina', '.ina-audio');
playAudio('.kirara', '.kiara-audio');
playAudio('.calli', '.calli-audio');