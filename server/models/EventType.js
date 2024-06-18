module.exports = (sequelize, DataTypes) =>{

    const EventType = sequelize.define("EventType", {
        
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
            
        },
        
        type_desc: {
            type: DataTypes.STRING,
            allowNull: false
        
        }
         
    })


    EventType.associate = (models) =>{
        EventType.hasMany(models.Events,{
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    };
    

    return EventType
    
}