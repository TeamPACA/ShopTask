module.exports = function(sequelize, DataType){
    const catergory = sequelize.define("catergory", {
        name:{
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        current: {
            type: DataType.BOOLEAN,
            defaulValue: true
        }
    });
    catergory.associate = function(models){
        catetgory.hasMany(models.items, {
        })
    };

};