/**
 * electron模块包含了 Electron 提供的所有API和功能
 */

// app 代表整个应用程序
const { app, BrowserWindow, Menu } = require('electron')

function createWindow () {   
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { 
      nodeIntegration: true, // 是否注入 NodeJs
    }
  })

  // 加载index.html文件 - 可以加载远程或者本地的页面
  win.loadFile('view/index.html')
  // win.setThumbarButtons([
  //   {
  //     tooltip: '菜单1'
  //   },
  //   {
  //     tooltip: '菜单2'
  //   }
  // ])
  // 设置菜单栏
  const menu = Menu.buildFromTemplate([
    {
      label: '打开',
      click: () => {
        console.log('start---')    
      }
    },
    {
      label: '关闭',
      click: () => {
        console.log('end-----')  
      }
    }
  ])
  win.setMenu(menu)
  win.webContents.openDevTools()
}
// 当 Electron 初始化完成创建一个窗口
app.whenReady().then(createWindow)