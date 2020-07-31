/**
 * 这里配置窗口的属性
 */
module.exports = {
  width: 800, // 窗口宽度
  height: 400, // 窗口高度
  nodeIntegration: true, // 是否注入 NodeJs，
  x: 20, // 窗口距离屏幕左边的距离
  y: 20, // 窗口距离屏幕上方的距离
  resizable: true, // 窗口是否可以缩放
  movable: true, // 窗口是否可以拖动
  title: '主窗口界面', // loadURL 如果 html 中有<title>, 该属性会被忽略
  modal: false // 是否是模态窗口
}