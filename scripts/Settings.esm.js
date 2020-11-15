import { Common } from './Common.esm.js';

const SETTINGS_SCREEN_ID = 'js-settings-screen';
const MUSIC_ON_OFF_ID = 'js-music-on-off';
const MUSIC_VOLUME_INCREASE_ID = 'js-music-volume-increse';
const MUSIC_VOLUME_DECREASE_ID = 'js-music-volume-decraese';
const SOUND_ON_OFF_ID = 'js-sound-on-off';
const SOUND_VOLUME_INCREASE_ID = 'js-sound-volume-increse';
const SOUND_VOLUME_DRCREASE_ID = 'js-sound-volume-decrease';
const SETTINGS_EXIT_BUTTON_ID = 'js-settings-screen-exit-button';

class Settings extends Common {
    constructor() {
        super(SETTINGS_SCREEN_ID);
    }

    bintsToElements() {
        const exitSettingsElement = this.bindToElement(SETTINGS_EXIT_BUTTON_ID);

        exitSettingsElement.addEventListener('click', () => this.changeVisibilityScreen(this.element))
    }
}

export const settings = new Settings();