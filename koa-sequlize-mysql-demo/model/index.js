const sequlize = require('../db/index')

// 导入模型
const  student = sequlize.import('./student')
const subject = sequlize.import('./subject')

// 关联 student subject 表
student.hasMany(subject, {foreignKey : {name: 'studentId', allowNull: false}})

// 同步模型到数据库，即是创建一个 表
sequlize.sync()
// 导出模型
exports.student = student 
exports.subject = subject