const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')
const url = require('url')

function createWindow () {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1440,
    height: 1024,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.webContents.openDevTools();

  

  win.loadFile(path.join(__dirname, 'bukuinduk/build/index.html'));
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})