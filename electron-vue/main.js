/**
 * electron模块包含了 Electron 提供的所有API和功能
 */

// app 代表整个应用程序
const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const fsPromises = require('fs').promises;
function createWindow () {   
  // 创建浏览器窗口
  let win  = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { 
      nodeIntegration: true, // 是否注入 NodeJs
    }
  })

  // 加载本地服务或者本地的文件
  const url = process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:9008/'
    : `file:///${__dirname}/main-render/index.html`;

  win.loadURL(url) // 注意这里需要使用 loadURL
  win.removeMenu()
  win.webContents.openDevTools()
}
// 当 Electron 初始化完成创建一个窗口
app.whenReady().then(createWindow)

// 监听渲染进程发来的事件
ipcMain.on('readFile', async (event, args) => {
  try{
    const fsHandle = await fsPromises.open(`${args.name}`, 'r')
    const data =  await fsHandle.readFile({
      encoding: 'utf-8'  
    })
    // 回复消息
    event.reply('fileData', data)
  }catch(e) {
  }
})


// 监听渲染进程委托通知事件
ipcMain.on('notification', (event, args) => {
  const notification = new Notification({
    title: args.title,
    body: args.body
  })
  notification.show()  
})