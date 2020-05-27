module.exports = function(sequelize, DataTypes){
    const transactions = sequelize.define("transactions", {
        qty: {
            type: DataTypes.INTERGER,
            allowNull: true,
            defaultValue: 0
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    transactions.associate = function(models){
        transactions.belongsTo(models.orders, {
            foreignKey: {
                name: 'orderid',
                allowNull: false
            }
        });
    };
    transactions.associate = function(models){
        transactions.hasOne(models.items, {
            foreignKey: {
                name: "itemId"
            }
        });
    };
return transactions;

};