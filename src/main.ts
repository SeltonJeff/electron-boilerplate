const { app, BrowserWindow } = require("electron");
const path = __dirname;

class Application {
  private static async createWindow() {
    return new BrowserWindow({
      autoHideMenuBar: false,
      height: 800,
      width: 1200,
      resizable: true,
      maximizable: true,
      webPreferences: {
        preload: `${path}/preload.js`,
      },
      background: "red",
    });
  }

  private static async afterMount() {
    const win = await Application.createWindow();
    win.setBackgroundColor("rgb(60,60,60)");
    win.loadFile(`${path}/base.html`);
    return;
  }

  public start() {
    app.whenReady().then(Application.afterMount);
    return;
  }

  public listenerFunctions() {
    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") app.quit();
    });
  }
}

new Application().start();
new Application().listenerFunctions();
