const electron = require('electron')
const path = require('path')
const { app, BrowserWindow } = electron;

app.on('ready', () => {
    const window = new BrowserWindow({
                        alwaysOnTop: true,
                        //frame: false,
                        icon: path.join(__dirname, 'assets/images/icons/64x64.png')
                        // width: 250,
                        // height: 500
                    })
    window.setMenu(null);
    window.loadURL(`file://${__dirname}/views/twitch.tv.html`);
})