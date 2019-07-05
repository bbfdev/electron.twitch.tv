const electron = require('electron')
const { app, BrowserWindow } = electron;

app.on('ready', () => {
    const window = new BrowserWindow({
                        alwaysOnTop: true,
                        // frame: false,
                        // width: 250,
                        // height: 500
                    })
    window.loadURL(`file://${__dirname}/views/twitch.tv.html`);
})
    