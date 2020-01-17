module.exports = {
  name: 'test', // 数据库名称，
  username: 'root', // 用户名,
  password: '123456', // 密码
  option: {
    host: 'localhost',
    dialect: 'mysql', // 数据库类型
    pool: { // 连接池配置
      max: 5, // 数据库连接池最大数
      min: 0, //  数据库连接池最小数
      idle: 10000, // 在释放连接之前允许空闲的最大毫秒数
      acquire: 30000 // 在抛出错误之前允许获取连接的最大时长(毫秒)
    }    
  }
}