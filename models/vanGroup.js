module.exports = function(sequelize, DataTypes) {
    var VanGroup = sequelize.define("VanGroup", {
      vanGroup_ID: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.AUTO_INCREMENT,
        allowNull: false
      },
      vanGroup_admin_ID: {
        type: DataTypes.INTEGER,
        allowNull: true, 
      },
      pickup_point: {
        type: DataTypes.STRING,
        //need to change
        allowNull: true, 
      },
      passenger_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        foreignKey: true
      },
      current_rider: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    });

    VanGroup.associate = function(models) {
        // We're saying that a VanGroup should belong to an User
        // A VanGroup can't be created without a User due to the foreign key constraint
        VanGroup.belongsTo(models.User, 
          {
            foreignKey: 'passenger_ID'

        });

        // TODO: commented out for testing
        // VanGroup.belongsTo(models.Van, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // });
    };
  
  
    return VanGroup;
  };