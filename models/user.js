module.exports = function(sequelize, DataTypes){
    const user = sequelize.define("user",{
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        password: {
            type: DataTypes.STRING,
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

    user.associate = function(models){
        user.hasMany(models.orders, {
        })
    };

    return user
};