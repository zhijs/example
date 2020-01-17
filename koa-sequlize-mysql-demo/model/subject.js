module.exports = (sequelize, DataTypes) => {
    return sequelize.define('subject', {
      name: {
        type: DataTypes.STRING(50), // 定义类型(长度)
        allowNull: false // 是否允许为 NULL
      }
    })
  }