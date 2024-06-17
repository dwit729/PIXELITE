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

    return Events
    
}