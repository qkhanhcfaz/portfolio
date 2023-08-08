// party 
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function party() {
    confetti();
}
document.getElementsByClassName(".confetti").addEventListener("click",party);