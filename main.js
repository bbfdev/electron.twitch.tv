const electron = require("electron");
const path = require("path");
const ChronoTray = require("./chronotray");
const { app, BrowserWindow } = electron;
const log = require("electron-log");
const url = require("url");

let window;

app.on("ready", () => {
  // cria icone na bara de tarefas
  tray = new ChronoTray(path.join(__dirname, "./16x16.png"));

  tray.on("click", (event, bounds, position) => {
    if (window.isVisible()) {
      window.hide();
    } else {
      window.show();
    }
  });

  //cria a janela
  window = new BrowserWindow({
    alwaysOnTop: true,
    frame: false,
    width: 620,
    height: 378,
    show: false,
    darkTheme: true,
    minimizable: true,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });
  //window.webContents.openDevTools()
  window.setMenu(null);
  window.loadURL(`file://${__dirname}/dist/index.html`);
  /**
   * também é possivel carregar o player com
   * window.loadURL(`https://player.twitch.tv/?channel=monstercat`);
   */

  window.once("ready-to-show", () => {
    log.info(`Aplicação iniciada`);
    window.show();
  });
});

app.on("window-all-closed", () => {
  log.info(`Todas as janelas foram fechadas.`);
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});
