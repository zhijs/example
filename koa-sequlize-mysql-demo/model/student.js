module.exports = (sequelize, DataTypes) => {
    /**
     * 第一个参数 String: 表的名称
     * 第二个参数 Object: 表中每一行的数据项,每个属性代表一列数据
     * 第三个参数 Object: 额外的配置
     */
    return sequelize.define('student', {
      name: {
        type: DataTypes.STRING(50), // 定义类型(长度)
        allowNull: false // 是否允许为 NULL
      },
      number: {
        type: DataTypes.INTEGER(5), // 定义类型(长度)
        allowNull: false, // 是否允许为 NULL
        unique: true // 是否是唯一的
      },
      age: {
        type: DataTypes.INTEGER(3), // 定义类型(长度)
        allowNull: false, // 是否允许为 NULL
        default: 1 // 默认值
      }, 
      classNumber: {
        type: DataTypes.INTEGER(3), // 定义类型(长度)
        allowNull: false, // 是否允许为 NULL
        default: 1 // 默认值   
      }
    })
  }