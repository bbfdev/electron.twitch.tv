const electron = require('electron')
const path = require('path')
const ChronoTray = require('./app/chronotray')
const { app, BrowserWindow } = electron;
const log = require('electron-log');

let window;

app.on('ready', () => {
    // cria icone na bara de tarefas
    tray = new ChronoTray(path.join(__dirname, 'assets/images/icons/16x16.png'));

    tray.on('click', (event, bounds, position) => {
        if (window.isVisible()) {
            window.hide()
        } else {
            window.show();
        }
    })

    //cria a janela
    window = new BrowserWindow({
                        alwaysOnTop: true,
                        frame: true,
                        icon: path.join(__dirname, 'assets/images/icons/64x64.png'),
                        //backgroundColor: '#000000',
                        width: 620,
                        height: 378,
                        show: false,
                        darkTheme: true,
                        minimizable: true,
                        maximizable: false
                    })
    //window.webContents.openDevTools()
    window.setMenu(null);
    //window.loadURL(`file://${__dirname}/views/twitch.tv.html`);
    window.loadURL(`file://${__dirname}/dist/electron_twitch_tv/index.html`);
    /**
     * também é possivel carregar o player com
     * window.loadURL(`https://player.twitch.tv/?channel=monstercat`);
     */

    window.once('ready-to-show', () => {
        log.info(`Aplicação iniciada`)
        window.show()
    })
})

app.on('window-all-closed', () => {
    log.info(`Todas as janelas foram fechadas.`)
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


