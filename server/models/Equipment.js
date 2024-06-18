module.exports = (sequelize, DataTypes) =>{

    const Equipment = sequelize.define("Equipment", {
        
        equip_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
            
        },
        
        equip_name: {
            type: DataTypes.STRING,
            allowNull: false
        
        },

        equip_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        equip_serial: {
            type: DataTypes.STRING,
            allowNull: false
        }
         
    })


    Equipment.associate = (models) =>
        {
            Equipment.belongsToMany(models.EventType, { through: 'EquipmentEventTypeAssignment'})
        }


    

    return Equipment
    
}