

module.exports = function(sequelize,DataTypes){
    const Item = sequelize.define("Item",{
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL(10,2),
        description: DataTypes.STRING,




    });
    return Item
}


/*foreign key (sellerid ) references seller(id)

still needs to be entered 

/*



*/