module.exports = function(sequelize, DataTypes){
    const orders = sequelize.define("orders", {
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    orders.associate = function(models){
        orders.belongsTo(models.user, {
            foreignKey: {
                name: 'userid',
                allowNull: false
            }
        });
    };
    orders.associate = function(models){
        orders.hasMany(models.transactions, {

        });
    };

return orders;
};