export function toggleAudio(audio: HTMLAudioElement) {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}