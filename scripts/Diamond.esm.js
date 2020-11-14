import { Sprite } from './Sprite.esm.js';
import { GAME_BOARD_X_OFFSET, GAME_BOARD_Y_OFFSET } from './gameLevels.esm.js';

const DIAMOND_ORGINAL_SIZE = 32;

export const NUMBER_OF_DIAMOND_TYPES = 6;
export const DIAMOND_SIZE = 48;

const DIAMOND_ZOOM = DIAMOND_SIZE / DIAMOND_ORGINAL_SIZE;

export class Diamond extends Sprite {
    constructor(x, y, row, column, kind, dimaondSpriteImage) {
        const offset = {
            x: GAME_BOARD_X_OFFSET,
            y: GAME_BOARD_Y_OFFSET
        };

        super(
            x,
            y,
            DIAMOND_ORGINAL_SIZE,
            DIAMOND_ORGINAL_SIZE,
            dimaondSpriteImage,
            NUMBER_OF_DIAMOND_TYPES,
            offset
        );

        this.row = row;
        this.column = column;
        this.kind = kind;
        this.match = 0;
    }

    draw() {
        super.draw(this.kind, DIAMOND_ZOOM);
    }
}