'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificationTicket.init({
    subject: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    content: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    recipientEmail: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    status: { 
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['InProcess', 'Confirmed', 'Cancelled'],
      defaultValue: 'InProcess'
    },
    notificationTime: { 
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'NotificationTicket',
  });
  return NotificationTicket;
};