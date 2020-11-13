import { Common, HIDDEN_SCREEN, VISIBLE_SCREEN } from './Common.esm.js';
import { DATALOADED_EVENT_NAME, loader } from './Loader.esm.js';
import { gameLevels } from './gameLevels.esm.js';
import { canvas } from './Canvas.esm.js';
import { Diamond } from './Diamond.esm.js';
import { media } from './Media.esm.js';

const gameState = {
    pointsToWin: 7000,
    getPlayerPoints: () => 1000,
    getLeftMovement: () => 30,
};

class Game extends Common {
    constructor() {
        super();
    }

    playLevel(level) {
        window.removeEventListener(DATALOADED_EVENT_NAME, this.playLevel);
        const levelInfo = gameLevels[level - 1];
        this.changeVisibilityScreen(canvas.element, VISIBLE_SCREEN);
        this.diamond = new Diamond(50, 50, 1, 1, 4, media.diamondsSprite);
        this.animate();
    }

    animate() {
        canvas.drawGameonCanvas(gameState);
        this.diamond.draw();
        this.animationFrame = window.requestAnimationFrame(() => this.animate());
    }
}

export const game = new Game();