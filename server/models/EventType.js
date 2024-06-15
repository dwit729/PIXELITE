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

    return EventType
    
}