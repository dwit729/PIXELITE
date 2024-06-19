module.exports = (sequelize, DataTypes) =>{

    const Events = sequelize.define("Events", {
        
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
            
        },
        
        event_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        
        },

        event_address: {
            type: DataTypes.STRING,
            allowNull: false
        
        },
        
         
    })

    Events.associate = (models) =>
        {
            Events.belongsToMany(models.Employees, { through: 'EmployeeEventAssignment'})
        }

    Events.associate = (models) =>{
        Events.belongsTo(models.EventType,{
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION'
        });
    };

    Events.associate = (models) =>{
        Events.belongsTo(models.Clients,{
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION'
        });
    };

    return Events
    
}