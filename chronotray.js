const electron = require('electron')
const { Tray, Menu } = electron;
const contexMenu = Menu.buildFromTemplate([
    {
        label: 'Twitch.tv floating unofficial.',
        enabled: false
    },
    { type: "separator" },
    { role: "quit" }
])

class ChronoTray extends Tray {
    constructor(icon) {
        super(icon);
        this.setToolTip('Twitch.tv floating unofficial.');
        this.setContextMenu(contexMenu);
    }
}

module.exports = ChronoTray;