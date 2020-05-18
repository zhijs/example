/**
 * electron模块包含了 Electron 提供的所有API和功能
 */

// app 代表整个应用程序
const { app, BrowserWindow, Menu } = require('electron')

function createWindow () {   
  // 创建浏览器窗口
  let win:BrowserWindow  = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { 
      nodeIntegration: true, // 是否注入 NodeJs
    }
  })

  // 加载index.html文件 - 可以加载远程或者本地的页面
  win.loadFile('main-render/index.html')
  // 设置菜单栏
  // const menu = Menu.buildFromTemplate([
  //   {
  //     label: '打开',
  //     click: async () => {
  //       console.log('start---')    
  //     }
  //   },
  //   {
  //     label: '关闭',
  //     click: async () => {
  //       console.log('end-----')  
  //     }
  //   }
  // ])
  win.removeMenu()
  win.webContents.openDevTools()
}
// 当 Electron 初始化完成创建一个窗口
app.whenReady().then(createWindow)