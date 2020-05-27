module.exports = function(sequelize, DataTypes){
    const item = sequelize.define("item",{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        current: {
            type: DataTypes.BOOLEAN,
            defaulValue: true
        }

    });

    item.associate = function(models){
        item.belongsTo(models.category,{
            foreignKey: {
                allowNull: false
            }
        });
    };

    return item;
};