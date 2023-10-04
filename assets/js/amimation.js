// ==== Party =====
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function party() {
    confetti({
        particleCount: 100,
        spread: 360,
        startVelocity: 30,
        decay: 0.9
    });
}

export default party()
