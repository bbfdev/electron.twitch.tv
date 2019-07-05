const electron = require('electron')
const path = require('path')
const { app, BrowserWindow } = electron;

let window;

app.on('ready', () => {
    window = new BrowserWindow({
                        alwaysOnTop: true,
                        frame: false,
                        icon: path.join(__dirname, 'assets/images/icons/64x64.png'),
                        // width: 250,
                        // height: 500,
                        show: false
                    })
    window.setMenu(null);
    window.loadURL(`file://${__dirname}/views/twitch.tv.html`);

    window.once('ready-to-show', () => {
        window.show()
    })
})
